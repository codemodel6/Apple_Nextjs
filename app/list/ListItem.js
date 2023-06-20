"use client";
import Link from "next/link";

export default async function ListItem({ result }) {
  return (
    <div>
      {result.map((it, idx) => (
        <div key={idx} className="list-item">
          {/* prefetch 기능을 끈다 */}
          <Link prefetch={false} href={`/detail/${it._id}`}>
            <h4>{it.title}</h4>
          </Link>
          <Link href={`/edit/${it._id}`}>✏️</Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "POST",
                body: it._id,
              });
            }}
          >
            🗑️
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
