import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    data.status = false;

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
// Your server-side code (API endpoint)
import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { _id } = req.query;
    const { status } = req.body;

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

      // Update the status of the to-do item in MongoDB
      await todosCollection.updateOne(
        { _id: _id },
        { $set: { status } } // Update the status field
      );

      res.status(200).json({ message: "Status updated!" });
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      client.close();
    }
  }
}
