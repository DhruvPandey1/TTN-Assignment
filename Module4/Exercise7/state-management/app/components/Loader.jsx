"use client";

import { useLoader } from "../context/LoaderContext";

export default function Loader() {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "2rem",
      zIndex: 9999
    }}>
      Loading...
    </div>
  );
}
