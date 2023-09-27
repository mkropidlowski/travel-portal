export interface UserTokens {
    access_token: string;
    refresh_token: string;
}
export type Providers = "credentials";

export type UserLoginResult = { user: UserTokens; error?: undefined } | { user?: undefined; error: string };

export const ProviderList = {
    credentials: "credentials",
};
