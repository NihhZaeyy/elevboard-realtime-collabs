import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 px-6 pt-24 md:px-10 bg-dot-pattern">
      <LoginForm />
    </div>
  );
}
