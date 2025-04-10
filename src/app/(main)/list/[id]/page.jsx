"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function DetailPage() {
  //   const { id } = await params;
  const { id } = useParams();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  return (
    <>
      <div>DetailPage</div>
      <p>id: {id}</p>
      <p>query: {query}</p>
    </>
  );
}
