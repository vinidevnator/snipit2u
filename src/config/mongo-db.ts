import { MongoClient, Document, Collection } from "mongodb";

const uri = process.env.CLUSTER_MONGO_DB;

if (!process.env.CLUSTER_MONGO_DB) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(uri!);

export async function collectionDb(
  collection: string
): Promise<Collection<Document>> {
  const connection = await client.connect();

  return connection
    .db(process.env.DATABASE_NAME as string)
    .collection(collection);
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default client;
