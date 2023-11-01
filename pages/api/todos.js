import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = new MongoClient(
      "mongodb+srv://shivam18557:Shivam@cluster0.njwclar.mongodb.net/your-todos-database?retryWrites=true&w=majority",
      {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      }
    );

    try {
      await client.connect();

      const db = client.db("your-todos-database");

      const todosCollection = db.collection("todos");

      const result = await todosCollection.insertOne(data);

      res.status(201).json({ message: "Todo inserted!" });
    } catch (error) {
      console.error("Error saving todo:", error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      client.close();
    }
  }
}
