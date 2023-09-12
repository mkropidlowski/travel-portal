export const publicEnvs = {
    MONGODB_ENDPOINT: process.env.NEXT_MONGODB_ENDPOINT as string,
    MONGODB_API_KEY: process.env.NEXT_MONGO_API_KEY as string,
};

export const isDevServer = process.env.NODE_ENV === "development";
