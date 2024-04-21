"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export interface FormState {
  message: string;
}

export default async function postSignIn(
  _previousState: FormState,
  formData: FormData,
) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const submitParams = {
    user: {
      email: rawData.email || "",
      password: rawData.password || "",
    },
  };

  const res = await fetch(`${process.env.BASE_API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submitParams),
  });
  const state = await res.json();

  if (res?.ok) {
    cookies().set({
      name: "AccessToken",
      value: state.data.access_token,
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      path: "/",
    });
    redirect("/");
  } else {
    return state;
  }
}
