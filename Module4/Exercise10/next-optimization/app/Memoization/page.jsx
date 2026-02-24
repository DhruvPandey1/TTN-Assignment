import './page.css'
async function getCachedData() {
  console.log("Fetching Forced cached data");

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/2",
    { cache: "force-cache" }
  );

  return res.json();
}

async function getNoStoreData() {
  console.log("Fetching No Store Data");

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Memoization() {
  const cached = await getCachedData();
  const noStore = await getNoStoreData();

  return (
    <div className="memo">
      <h2>Check Terminal</h2>

      <pre>{JSON.stringify(cached, null, 2)}</pre>
      <pre>{JSON.stringify(noStore, null, 2)}</pre>
    </div>
  );
}