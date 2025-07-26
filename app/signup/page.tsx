import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 px-6 pt-24 md:px-10 bg-dot-pattern">
      <SignupForm />
    </div>
  );
}
