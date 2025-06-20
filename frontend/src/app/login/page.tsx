"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-16rem)] bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}