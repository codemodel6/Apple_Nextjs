import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// props에는 url의 값인 params가 있음(여기선 params: {'id':'1'})
export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("dbname");

  // url의 몽고DB의 id값을 입력해서 그 id와 맞는 객체를 찾아냄
  let result = await db
    .collection("clname")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
