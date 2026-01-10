"use server";

import { cookies } from "next/headers";

export async function logoutUserAction() {
  try {
    (await cookies()).delete("token", { path: "/" });
    return {
      success: "logged out successfully.",
      status: 200,
    };
  } catch (error) {
    return {
      error: "Failed to logout! Please try after sometime.",
      status: 500,
    };
  }
}
