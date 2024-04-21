"use client";

import { Button, Label, TextInput } from "flowbite-react";

export default function ShareVideoPage() {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Share Video URL
          </h1>
        </header>
      </section>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="url" value="Your URL" />
          </div>
          <TextInput
            id="url"
            type="url"
            placeholder="https://www.youtube.com/watch?v=aWl6dqxL5XM"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
