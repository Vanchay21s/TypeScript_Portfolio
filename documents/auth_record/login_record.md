## Auth-Login-Record

## Entities with TypeORM

`/src/entities/UserRole.ts`

```ts
export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  EDITOR = "editor",
}
```

`/src/entities/User.ts`

```ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import { UserRole } from "./UserRole";
@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 255 })
  username: string;
  @Column({ type: "varchar", length: 255, unique: true })
  email: string;
  @Column({ type: "varchar", length: 255 })
  password: string;
  @Column({ type: "enum", enum: UserRole, default: UserRole.USER })
  role: UserRole;
  @CreateDateColumn()
  created_at: Date;
}
```

<!-- -------------------------------------------- -->

## Type, DTO and Validation

`/src/schema/userSchema.ts`

```ts
import { z } from "zod";
export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(8, "Password is required & Most 8 charatcers"),
});
export type loginDTO = z.infer<typeof loginSchema>;
```

<!-- -------------------------------------------- -->

### 1. Install dependencies

```

```

## 🗂️ Generate & Verify Token.

`/src/util/jwt.ts`

```ts
import jwt from "jsonwebtoken";
const SECRET = String(process.env.JWT_KEY);
// 1. Generate_Token
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

// 2. Verify_Token
export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
};
```

<!-- -------------------------------------------- -->

## 🗂️ Auth Service.

`/src/service/authService.ts`

```ts
import bcrypt from "bcrypt";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { loginDTO } from "../schema/userSchema";
import { generateToken } from "../util/jwt";

const repo = AppDataSource.getRepository(User);
export const authService = {
  async login(dto: loginDTO) {
    const user = await repo.findOne({
      where: { email: dto.email },
    });
    if (!user) throw new Error("User not found!");

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) throw new Error("Wrong password");
    const token = generateToken(user);

    const { password, ...safeUser } = user;
    return { safeUser, token };
  },
};
```

<!-- -------------------------------------------- -->

## 🗂️ Auth Controller.

`/src/controller/authController.ts`

```ts
import { Request, Response } from "express";
import { loginSchema } from "../schema/userSchema";
import { authService } from "../service/authService";
export const loginUser = async (req: Request, res: Response) => {
  console.log("OK_1 - authController.ts:26");
  const user = loginSchema.safeParse(req.body);
  if (!user.success) {
    return res.status(400).json(user.error.issues);
  }
  try {
    const result = await authService.login(user.data);
    return res.json({
      message: "Login user successfully.",
      status: true,
      data: result,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
    });
  }
};
```

<!-- -------------------------------------------- -->

## 🗂️ Auth Controller.

`/src/routes/authRouter.ts`

```ts
import { Router } from "express";
import { loginUser } from "../controller/authController";
export const authRouter = Router();

authRouter.post("/login", loginUser);
```
