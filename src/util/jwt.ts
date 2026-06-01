import jwt from "jsonwebtoken";
const SECRET = String(process.env.JWT_KEY);
export const generateToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role, 
    },
    SECRET,
    { expiresIn: "1d" },
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
};
