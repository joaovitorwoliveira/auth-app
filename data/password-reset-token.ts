import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passweordResetToken = await db.passwordResetToken.findUnique({
      where: {
        token,
      },
    });

    return passweordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passweordResetToken = await db.passwordResetToken.findFirst({
      where: {
        email,
      },
    });

    return passweordResetToken;
  } catch {
    return null;
  }
};
