"use client";
import { useRouter } from "next/navigation";
import "./error.css";

export default function Error({ error }) {
  const router=useRouter()
  return (
    <div className="error-page">
      <div className="error-card">
        <h2>Something went wrong!</h2>
        <p>{error?.message}</p>
        <button onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </div>
  );
}
