import Link from "next/link";

export default async function ListPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json(),
  );
  return (
    <ul className="grid grid-cols-3 gap-2">
      {data?.map((user) => (
        <Link key={user.id} href={`/list/${user.id}?query=1212`}>
          <li className="bg-blue-500">{user.name} </li>
        </Link>
      ))}
    </ul>
  );
}
