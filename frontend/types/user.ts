
export type User = {
  email: string;
};

export type UserSignInParams = {
  email: string;
  password: string
};

export type UserSignUpParams = {
  email: string;
  password: string,
  passwordConfirmation: string
};
