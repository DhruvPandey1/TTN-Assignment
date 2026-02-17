"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./not-found.css";

export default function Error404() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <h1>404 - Page Not Found</h1>
        <p>
          Redirecting to homepage in{" "}
          <span className="countdown">{count}</span> seconds...
        </p>
      </div>
    </div>
  );
}
