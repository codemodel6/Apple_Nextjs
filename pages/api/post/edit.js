import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      console.log("이거", req.body._id);
      let updateContent = { title: req.body.title, content: req.body.content };
      const client = await connectDB;
      const db = client.db("dbname");
      // updateOne의 $set은 문자를 덮어씌움 $inc는 숫자를 더해줌
      let result = await db
        .collection("clname")
        .updateOne(
          { _id: new ObjectId(req.body._id) },
          { $set: updateContent }
        );
      res.writeHead(302, { Location: "/list" });
      res.end();
    } catch (error) {
      console.error(error);
    }
  }
}
