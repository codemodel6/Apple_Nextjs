import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("dbname");
  let result = await db.collection("clname").find().toArray();

  console.log(result[0]._id);
  return (
    <div className="list-bg">
      {result.map((it, idx) => (
        <div key={idx} className="list-item">
          {/* prefetch 기능을 끈다 */}
          <Link prefetch={false} href={`/detail/${it._id}`}>
            <h4>{it.title}</h4>
          </Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
