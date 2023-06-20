import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    // 메소드 DELETE로 하면 BODY가 안보내짐
    if (req.method === "POST") {
      console.log("delete body : ", req.body);
      const client = await connectDB;
      const db = client.db("dbname");
      let result = await db
        .collection("clname")
        .deleteOne({ _id: new ObjectId(req.body) });
      res.status(200).json("삭제성공");
    }
  } catch (error) {
    console.error(error);
  }
}
