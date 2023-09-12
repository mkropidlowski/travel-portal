export const publicEnvs = {
    MONGODB_ENDPOINT: process.env.NEXT_MONGODB_ENDPOINT as string,
    MONGODB_API_KEY: process.env.NEXT_MONGO_API_KEY as string,
    MONGODB_COLLECTION: process.env.NEXT_MONGODB_COLLECTION as string,
    MONGODB_DATABASE: process.env.NEXT_MONGODB_DATABASE as string,
    MONGODB_DATA_SOURCE: process.env.NEXT_MONGODB_DATA_SOURCE as string,
};

export const isDevServer = process.env.NODE_ENV === "development";
