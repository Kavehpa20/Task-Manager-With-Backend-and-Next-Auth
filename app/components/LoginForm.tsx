"use client";

import { Button } from "@/components/ui/button";
import { InputWithLabel } from "./InputWithLable";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/login.validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { classNames } from "../utils/classNames";
import React from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const formField = useForm<ILoginForm>({
    mode: "all",
    resolver: zodResolver(loginSchema),
  });

  const submit = async ({ username, password }: ILoginForm) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/dashboard",
      username,
      password,
    });
    setLoading(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    result?.status === 200 && router.push("/dashboard");
    if (result?.status === 401) setError("Username or Password is incorrect");
  };

  return (
    <form
      onSubmit={formField.handleSubmit(submit)}
      className="w-full max-w-[500] space-y-4 rounded-sm bg-white p-8 shadow-md"
    >
      <Controller
        control={formField.control}
        name="username"
        render={({ field, fieldState }) => (
          <InputWithLabel
            type="username"
            label="Username"
            placeholder="username"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={formField.control}
        name="password"
        render={({ field, fieldState }) => (
          <InputWithLabel
            type="password"
            label="Password"
            placeholder="Password"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <p
        className={classNames(
          !error ? "hidden" : "block",
          "mt-1 text-xs font-medium text-red-500",
        )}
      >
        {error}
      </p>
      <Button
        type="submit"
        className="w-full bg-slate-600 text-white"
        variant={loading ? "ghost" : "secondary"}
        disabled={loading ? true : false}
      >
        Submit
      </Button>
    </form>
  );
};
