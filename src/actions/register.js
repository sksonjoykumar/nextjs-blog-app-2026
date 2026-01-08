"use server";
import { request } from "@arcjet/next";
import { z } from "zod";
import aj from "../lib/arcjet";
import connectToDB from "../lib/db";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email added." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least c characters long." }),
});

export async function registerUserAction(fromData) {
  const validatedFields = schema.safeParse({
    name: fromData.get("name"),
    email: fromData.get("email"),
    password: fromData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
      status: 400,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const req = await request();
    const decision = await aj.protect(req, {
      email,
    });
    console.log(decision, "decision");
    // checking email || bot || ratelimit
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
            error: "Email address are not accepted! Please try again.",
            status: 403,
          };
        }
      } else if (decision.reason.isBot()) {
        return {
          error: "Bot activity deleted!",
          status: 403,
        };
      } else if (decision.reason.isRateLimit()) {
        return {
          error: "Too many request! Please  try again later!",
          status: 429,
        };
      }
    } else {
      return {
        error: "Registration Denied!",
        status: 403,
      };
    }

    // database connection
    await connectToDB()
    

  } catch (error) {
    console.error(`Register Error ${error}`);
    return {
      error: "Interval server error!",
      status: 500,
    };
  }
}
