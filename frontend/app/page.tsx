/* eslint-disable tailwindcss/classnames-order */
import {
  DarkThemeToggle,
  Alert,
  Button,
  Checkbox,
  Label,
  TextInput,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
    //   <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
    //   <DarkThemeToggle />
    // </main>
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <Link
            href="/"
            className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="mr-2 size-8"
              src="/logo.png"
              alt="logo"
              width={512}
              height={512}
            />
            MeTube
          </Link>
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <Label
                    htmlFor="email1"
                    value="Your email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  />
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                    shadow
                  />
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    value="Your email"
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <Checkbox id="remember" />
                    </div>
                    <div className="ml-3 text-sm">
                      <Label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </Label>
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Sign in
                </Button>
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
        </div>
      </section>
    </>
  );
}
