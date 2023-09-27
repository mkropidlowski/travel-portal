import bcrypt from "bcrypt";
import NextAuth, { AuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";
import { JWT } from "next-auth/jwt";
// import { ProviderList, Providers } from "@/app/modules/auth/types";
// import { SignJWT } from "jose";
// import { nanoid } from "nanoid";
// import { getJwtSecretKey } from "@/app/libs/auth";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: "/login",
        signOut: "/",
        error: "/login",
        newUser: "/",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account }) {
            // const token = await new SignJWT({})
            //     .setProtectedHeader({ alg: "HS256" })
            //     .setJti(nanoid())
            //     .setIssuedAt()
            //     .setExpirationTime("1m")
            //     .sign(new TextEncoder().encode(getJwtSecretKey()));

            // user.access_token =

            return true;
        },
        async session(params: { token: JWT; session: Session }) {
            const { session, token } = params;
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.role = token.role;
                // session.user.access_token = token.access_token;
                // session.user.refresh_token = token.refresh_token;
            }

            return session;
        },

        async jwt(params: { token: JWT; user: User }) {
            const { token, user } = params;
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                },
            });

            if (!dbUser) {
                token.id = user!.id;
                return token;
            }

            return {
                id: dbUser.id,
                role: dbUser.role,
                name: dbUser.name,
                email: dbUser.email,
            };
        },
    },

    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid data");
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user || !user.hashedPassword) {
                    throw new Error("Invalid user data");
                }

                const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

                if (!isCorrectPassword) {
                    throw new Error("Invalid password");
                }

                return user;
            },
        }),
    ],
    debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
