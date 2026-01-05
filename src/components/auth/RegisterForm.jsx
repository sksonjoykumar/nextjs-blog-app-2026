"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Key, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// schema
const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email added." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least c characters long." }),
});

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form>
        <div className="mt-4 space-y-4">
          <div className="relative">
            <User className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
            <Input
              {...register("name")}
              disabled={isLoading}
              type="text"
              className="border border-gray-300 py-4.5 pl-8 text-balance text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter name"
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
            <Input
              {...register("email")}
              disabled={isLoading}
              type="email"
              className="border border-gray-300 py-4.5 pl-8 text-balance text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter email"
            />
          </div>
          <div className="relative">
            <Key className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
            <Input
              {...register("password")}
              disabled={isLoading}
              type={showPassword ? "text" : "password"}
              className="border border-gray-300 py-4.5 pl-8 text-balance text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter password"
            />
            <button
              className="absolute top-2 right-4.5 h-4 w-4 cursor-pointer text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
              type="button"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="min-w-full cursor-pointer bg-indigo-500 text-white transition duration-100 ease-in-out hover:bg-[#6a67fc]"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
