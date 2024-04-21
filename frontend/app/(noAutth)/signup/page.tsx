/* eslint-disable tailwindcss/classnames-order */
import {
  DarkThemeToggle,
  Alert,
  Button,
  Checkbox,
  Label,
  TextInput,
} from "flowbite-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
      <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
          Sign up to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <Label
              htmlFor="email"
              value="Your email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            />
            <TextInput
              id="email"
              type="email"
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
              placeholder="******"
              required
              shadow
            />
          </div>
          <div>
            <Label
              htmlFor="repeat-password"
              value="Repeat password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            />
            <TextInput
              id="repeat-password"
              type="password"
              placeholder="******"
              required
              shadow
            />
          </div>
          <Button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Register new account
          </Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            You have already account yet?{" "}
            <Link
              href="/signin"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
