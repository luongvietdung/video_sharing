"use server";
import { redirect } from "next/navigation";

export interface FormState {
  message: string;
}

export default async function postSignUp(
  _previousState: FormState,
  formData: FormData,
) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirmation: formData.get("password-confirmation"),
  };
  

  const submitParams = {
    user: {
      email: rawData.email || "",
      password: rawData.password || "",
      password_confirmation: rawData.passwordConfirmation || "",
    },
  };

  const res = await fetch(`${process.env.BASE_API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submitParams),
  });
  const state = await res.json();

  if (res?.ok) {
    redirect("/signin");
  } else {
    return state;
  }
}
