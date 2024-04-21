"use client"

import { Button, Label, TextInput } from "flowbite-react";
import { FormEvent, useState } from "react";
import { postSignIn } from "../../../apis/Api";
import { UserSignInParams } from "../../../types/user";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from 'next/navigation'


export default function SignInPage() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params: UserSignInParams = {
      email: email,
      password: password
    }
    try {
      await postSignIn(params);
      router.push('/')
    } catch (error) {
      setIsError(true)
    }
  }

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter()

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
        <SignInAlert isShow={isError}/>
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
  isShow: boolean
}
const SignInAlert: React.FC<SignInAlertProps> = function ({isShow})  {
  if (!isShow) {
    return <></>
  }

  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Email or password is incorrect</span>
    </Alert>
  );
}
