"use client";

import { Button } from "@/components/ui/button";
import { InputWithLabel } from "./InputWithLable";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/login.validation";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const formField = useForm<ILoginForm>({
    mode: "all",
    resolver: zodResolver(loginSchema),
  });

  const submit = async ({ username, password }: ILoginForm) =>
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/dashboard",
      username,
      password,
    });

  return (
    <form
      onSubmit={formField.handleSubmit(submit)}
      className="w-full bg-white  max-w-[500] p-8 shadow-md rounded-sm space-y-4"
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

      <Button
        type="submit"
        className="bg-slate-600 text-white w-full"
        variant="secondary"
      >
        Submit
      </Button>
    </form>
  );
};
