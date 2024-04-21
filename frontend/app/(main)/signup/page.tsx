'use client'

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function SignUpPage() {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Sign Up member of Video Sharing
          </h1>
        </header>
      </section>
        <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="connfirmPassword" value="Confirm Password" />
          </div>
          <TextInput id="connfirmPassword" type="password" required />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
