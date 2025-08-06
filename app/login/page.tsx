import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-2 px-6 md:px-10 bg-dot-pattern ">
      <LoginForm />
    </div>
  );
}
