export default async function DetailPage({ params }) {
  console.log("Detailpage 실행!!!!");
  //   const { id } = await params;
  try {
    await fetch("https://jsonplaceholder.typicode.com1/users").then((res) =>
      res.json(),
    );
  } catch (error) {
    alert(error.message);
  }
  const { id } = await params;

  return (
    <>
      <div>DetailPage</div>
      <p>id: {id}</p>
    </>
  );
}
