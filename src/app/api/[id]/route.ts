export async function GET(request, { params }) {
  const { id } = await params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return Response.json({ id, data });
}
