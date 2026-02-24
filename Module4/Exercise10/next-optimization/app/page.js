"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styles from './page.module.css'

const Popup = dynamic(() => import("./components/Popup"), {
  ssr: false,
  loading: () => <p>Loading popup...</p>,
});

const ImagePopup = dynamic(
  () => import("./components/ImagePopup"),
  { ssr: false }
);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.home}>
      <h1>Dynamic Popup Example</h1>

      <button onClick={() => setIsOpen(true)}>
        Open Popup
      </button>

      <button onClick={() => setOpen(true)}>
        Open Image Gallery
      </button>

      {open && <ImagePopup onClose={() => setOpen(false)} />}
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
    </div>
  );
}