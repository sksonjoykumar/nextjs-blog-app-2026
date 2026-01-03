import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key, Mail } from "lucide-react";

export default function LoginFrom() {
  return (
    <>
      <form>
        <div className="space-y-4 mt-4">
          <div className="relative">
            <Mail className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
            <Input
              type="email"
              className="border border-gray-300 py-4.5 pl-8 text-balance text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter email"
            />
          </div>
          <div className="relative">
            <Key className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
            <Input
              type="password"
              className="border border-gray-300 py-4.5 pl-8 text-balance text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter password"
            />
          </div>
          <Button
            type="submit"
            className="min-w-full  cursor-pointer bg-indigo-500 text-white transition duration-100 ease-in-out hover:bg-[#6a67fc]"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
