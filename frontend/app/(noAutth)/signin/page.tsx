/* eslint-disable tailwindcss/classnames-order */
"use client";

import { SubmitButton } from "@/app/(noAutth)/submit-button";
import { DarkThemeToggle, Alert, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import postSignIn, { FormState } from "./actions";
import { useFormState } from "react-dom";

const initialState: FormState = {
  message: "",
};

export default function SignInPage() {
  const [state, formAction] = useFormState(postSignIn, initialState);

  return (
    <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
      <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
          Sign in to your account
        </h1>
        {state?.message && <Alert color={"failure"}>{state?.message}</Alert>}

        <form className="space-y-4 md:space-y-6" action={formAction}>
          <div>
            <Label
              htmlFor="email"
              value="Your email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            />
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Your password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            />
            <TextInput
              id="password"
              type="password"
              name="password"
              placeholder="******"
              required
              shadow
            />
          </div>
          <SubmitButton>Sign in</SubmitButton>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              href="/signup"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
