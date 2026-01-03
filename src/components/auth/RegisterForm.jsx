import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export default function RegisterForm() {
  return (
    <>
      <form>
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute top-2 left-1.5 h-5 w-5 text-gray-600" />
            <Input
              type="text"
              className="border border-gray-300 py-4.5 pl-8 text-balance focus:ring-1 focus:ring-blue-400 focus:outline-blue-400"
              placeholder="Enter name"
            />
          </div>
        </div>
      </form>
    </>
  );
}
