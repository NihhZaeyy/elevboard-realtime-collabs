import { SignupForm } from "@/components/auth/signup-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-2 px-6 pt-24 md:px-10 bg-dot-pattern">
      <Link href={"/"}>
        <Button>Back</Button>
      </Link>
      <SignupForm />
    </div>
  );
}
