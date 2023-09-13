import { publicEnvs } from "../config/envs";

const ENDPOINT = publicEnvs.MONGODB_ENDPOINT;
const API_KEY = publicEnvs.MONGODB_API_KEY;

export default async function getDataFromCollection(collectionName: string) {
    try {
        const res = await fetch(`${ENDPOINT}/find`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "*",
                "api-key": API_KEY,
            },
            body: JSON.stringify({
                collection: collectionName,
                database: process.env.NEXT_MONGODB_DATABASE,
                dataSource: process.env.NEXT_MONGODB_DATA_SOURCE,
                filter: {},
            }),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
