# DB 연결 방법

util 폴더 안에 database.js안에 Next.js와 MongoDB를 연결하는 코드가 있다.

이후 연결하고 싶은 페이지에서

const client = await connectDB;
// 내가 생성한 DB 이름으로 연결하고
const db = client.db("dbname");
// 그 DB의 Collection의 모든 내용을 배열로 가져옴
let result = await db.collection("clname").find().toArray();

이 3개의 코드를 실행한다.

# DB 연결 종류

find().toArray - DB내용 전부 가져와서 배열로 출력
findOne("id") - id의 내용을 하나 가져온다
deleteOne("id") - id의 내용을 지운다

# 렌더링 방법

1. npm run build -> 내 모든 코드를 검색 엔진 친화적인 자바스크립트 문법으로 만들어줌
2. npm run start -> 클라우드에서 실행

next.js에서의 두거지 렌더링 방법
ㅇ = static rendering -> npm run build 할때 만든 html 페이지 그대로 보내줌 (정보가 많이 없다)
ㅅ = dynamic rendering -> 유저가 페이지 접속할 때 마다 html 페이지 새로 만들어서 보내줌

fetch를 쓰면 ㅅ 으로 자동으로 된다. 하지만 ㅅ 이어야 하는데 ㅇ 인 페이지가 있다. 이걸 바꾸는 방법은

export const dynamic = 'force-dynamic' -> 항상 ㅅ
export const dynamic = 'force-static' -> 항상 ㅇ

ㅅ 은 서버나 db에 부담될 수 있다. -> 캐싱 방법을 통해 해결할 수 있다.
캐싱 = 요청 결과를 저장해두고 재사용

await fetch('URL', {cache : 'force-cache'}) -> 근데 {cache : 'force-cache'} 는 안써도 자동으로 있음
{next : {revalidate : 60}} -> 60초 마다 캐싱된 데이터 갱신

fetch를 안하고 데이터베이스에서 데이터를 직접 가져올 경우의 캐싱
export const revalidate = 60; -> 60초마다 캐싱 갱신
