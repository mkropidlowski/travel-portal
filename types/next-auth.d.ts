import { UserRole } from "@prisma/client";
import { BE_User } from "./types";
import { User } from "next-auth";
import "next-auth/jwt";

type userId = string;

declare module "next-auth/jwt" {
    interface JWT {
        id: userId;
        role: UserRole;
        // access_token: string;
        // refresh_token: string;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: string;
            role: UserRole;
            // access_token: string;
            // refresh_token: string;
        };
    }
}
