"use client";

import { Button } from "@/components/ui/button";
import { InputWithLabel } from "./InputWithLable";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/login.validation";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { classNames } from "../utils/classNames";
import React from "react";
import { signupReq } from "../api/auth";

export const SignUpForm = () => {
  // const router = useRouter();
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const formField = useForm<ILoginForm>({
    mode: "all",
    resolver: zodResolver(loginSchema),
  });

  const submit = async (data: ILoginForm) => {
    setLoading(true);
    try {
      const response = await signupReq(data);
      console.log(response);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (Array.isArray(error.message)) {
          setError(error.message.join(" "));
        }
        setLoading(false);
      }
    }
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
        SignUp
      </Button>
    </form>
  );
};
