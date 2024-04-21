"use server";

import { redirect } from "next/navigation";

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

  if (res?.ok) {
    redirect("/");
  } else {
    const data = await res.json();
    return data;
  }
}
