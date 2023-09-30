import { UserRole } from "@prisma/client";
import { BE_User } from "./types";
import { User } from "next-auth";
import "next-auth/jwt";

type userId = string;

declare module "next-auth/jwt" {
    interface JWT {
        id: userId;
        role: UserRole;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: string;
            role: UserRole;
        };
    }
}
