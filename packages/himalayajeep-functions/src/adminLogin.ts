import { db } from "database";

export const adminLogin = async (
  emailOrPhone: string,
  password: string
): Promise<{
  isSuccessful: boolean;
  message: string;
  loginToken?: string;
}> => {
  const admin = db.get("AdminLoginType");
};
