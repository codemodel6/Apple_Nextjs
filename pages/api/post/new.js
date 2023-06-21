import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("dbname");

  let session = await getServerSession(req, res, authOptions);
  if (session) {
    console.log("session : ", session);

    // body 객체에 새로운 key value 추가
    req.body.author = session.user.email;
    console.log("req.body : ", req.body);
  }

  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목을 입력하세요");
    }
    try {
      // clname에 req.body 추가
      let result = await db.collection("clname").insertOne(req.body);
      // 성공 시 list 페이지로 이동
      res.writeHead(302, { Location: "/list" });
      res.end();
    } catch (error) {
      return console.error(error);
    }
  }
}
