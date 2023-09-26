import { BE_User } from "./types";

declare module "next-auth" {
    interface Session {
        user?: BE_User;
    }
}
