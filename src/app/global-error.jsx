"use client"; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2 className="text-2xl text-red-500">글로벌에러발쌩!!!!!!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
