"use client";

import { Button } from "flowbite-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Something went wrong!</h1>
      <Button onClick={() => reset()} color={"failure"}>
        Try again
      </Button>
    </main>
  );
}
