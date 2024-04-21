"use client";

import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { postSignIn } from "../../../apis/Api";
import type { UserSignInParams } from "../../../types/user";
import * as storge from "../../../utils/accessTokenStoraage";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params: UserSignInParams = {
      email: email,
      password: password,
    };
    try {
      const { data } = await postSignIn(params);
      storge.tokenStorage.token = data.access_token;
      router.push("/");
    } catch (error) {
      setHasError(true);
    }
  }

  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Sign In into Video Sharing
          </h1>
        </header>
      </section>
      <section>
        <SignInAlert isDisplay={hasError} />
        <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </div>
  );
}

type SignInAlertProps = {
  isDisplay: boolean;
};
/* eslint-disable react/prop-types */
const SignInAlert: React.FC<SignInAlertProps> = ({ isDisplay }) => {
  /* eslint-enable react/prop-types */
  if (!isDisplay) {
    return <></>;
  }

  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Email or password is incorrect</span>
    </Alert>
  );
};
