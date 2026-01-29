"use server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { z } from "zod";
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
    // database connection
    await connectToDB();
    const user = await User.findOne({ email }).select("+password");

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

    // create token
    const userToken = await new SignJWT({
      userId: user._id.toString(),
      email: user.email,
      userName: user.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("8h")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    const cookieStore = await cookies();

    cookieStore.set("token", userToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 12,
      path: "/",
    });

    return {
      success: "Logged in successfully",
      status: 200,
    };
  } catch (error) {
    console.log(`Login Error ${error}`);
    return {
      error: "Too many requests! Please try after some time!",
      status: 500,
    };
  }
}
