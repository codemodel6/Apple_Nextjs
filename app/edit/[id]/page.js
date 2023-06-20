import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("dbname");
  console.log(props.params.id);
  let result = await db
    .collection("clname")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      {/* action = 요청 보낼 주소 method = GET 혹은 POST */}
      <form action="/api/post/edit" method="POST">
        {/* Next.js에서는 value를 defaultValue라 써야 한다 */}
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
