import { UserSignInParams } from "@/types/user";
import axios from "axios";

// export const BASE_URL = 'https://video-sharing-sqba.onrender.com';
export const BASE_URL = "http://localhost:3000";

export const postSignIn = async (params: UserSignInParams) => {
  const { data } = await axios.post(`${BASE_URL}/signin`, { user: params });
  return data;
};
