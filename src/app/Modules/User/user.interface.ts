export type IUser = {
  name: string;
  email: string;
  password: string;
  phoneNumber?: number;
  role: "user" | "admin";
  bio: string;
  image: string;
};
