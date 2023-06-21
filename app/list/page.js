import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export default async function List() {
  const client = await connectDB;
  const db = client.db("dbname");
  let result = await db.collection("clname").find().toArray();

  // id값은 string값으로 보내야 하기 때문에 map으로 새롭게 만든다
  result = result.map((it) => {
    it._id = it._id.toString();
    return it;
  });

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
