import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("dbname");

  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목을 입력하세요");
    }
    try {
      console.log(req.body);
      let result = await db.collection("clname").insertOne(req.body);
      // 성공 시 list 페이지로 이동
      return res.status(200).redirect("/list");
    } catch (error) {
      return console.error(error);
    }
  }
}
