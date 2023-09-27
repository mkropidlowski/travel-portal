import { jwtVerify, SignJWT } from "jose";

interface UserJwtPayLoad {
    jti: string;
    iat: number;
}

export const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET_KEY;

    if (!secret || secret.length === 0) {
        throw new Error("Invalid JWT_SECRET");
    }

    return secret;
};
export const verifyAuth = async (token: string) => {
    try {
        const verifired = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
        return verifired.payload as UserJwtPayLoad;
    } catch (error) {
        throw new Error("Your token has expired.");
    }
};
