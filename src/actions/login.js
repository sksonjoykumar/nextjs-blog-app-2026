"use server";
import { request } from "@arcjet/next";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { loginRules } from "../lib/arcjet";
import connectToDB from "../lib/db";
import User from "../models/User";

// schema
const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email. " }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export async function loginUserAction(formData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
      status: 400,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const req = await request();
    const decision = await loginRules.protect(req, {
      email,
    });
    console.log(`Login decision ${decision}`);

    // checking email || bot || shield
    if (decision.isDenied()) {
      if (decision.reason.isEmail()) {
        const emailTypes = decision.reason.emailTypes;
        if (emailTypes.includes("DISPOSABLE")) {
          return {
            error: "Disposable email address are not allowed!",
            status: 403,
          };
        } else if (emailTypes.includes("INVALID")) {
          return {
            error: "Invalid email address!",
            status: 403,
          };
        } else if (emailTypes.includes("NO_MX_RECORDS")) {
          return {
            error: "Email domain does not have valid MX records!",
            status: 403,
          };
        } else {
          return {
            error: "Email address are not accepted! Please try again!",
            status: 403,
          };
        }
      } else if (decision.reason.isBot()) {
        return {
          error: "Bot activity detected! ",
          status: 403,
        };
      } else if (decision.reason.isShield()) {
        return {
          error: "Suspicious activity detected!",
          status: 403,
        };
      } else if (decision.reason.isRateLimit()) {
        return {
          error: "Suspicious activity detected!",
          status: 403,
        };
      }
    }

    // database connection
    await connectToDB();
    const user = User.findOne({ email }).select("+password");

    // user not exist
    if (!user) {
      return {
        error: "Invalid credentials!",
        status: 401,
      };
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // password not match
    if (!isPasswordMatch) {
      return {
        error: "Invalid credentials!",
        status: 401,
      };
    }
  } catch (error) {
    console.log(`Login Error ${error}`);
    return {
      error: "Too many requests! Please try after some time!",
      status: 500,
    };
  }
}
