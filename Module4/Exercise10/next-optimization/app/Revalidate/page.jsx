import { revalidateTodoData } from "../action";
import './page.css'
async function getData() {
  console.log("Fetching tagged data...");

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/2",
    {
      cache: "force-cache",
      next: {
        tags: ["todo-data"],
      },
    }
  );

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="tagged">
      <h1>Tagged Cache Example</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <form action={revalidateTodoData}>
        <button type="submit">Revalidate Cache</button>
      </form>
    </div>
  );
}