"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    alert("뭔가처리");
    router.push("/");
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      ).then((res) => res.json());
      setData(data);
    };
    getData();
    setLoading(false);
  }, []);

  if (loading) {
    return <p>로딩중...</p>;
  }

  return (
    <>
      <div>AboutPage</div>
      <button onClick={handleClick}>홈으로 이동</button>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name} </li>
        ))}
      </ul>
    </>
  );
}
