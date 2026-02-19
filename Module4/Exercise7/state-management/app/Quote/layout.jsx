"use client"
import Providers from "../providers";
export default function QuotesLayout({ children }) {
  return (

    <Providers>
      {children}
    </Providers>

  );
}
