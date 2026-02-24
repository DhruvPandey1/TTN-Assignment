"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import './ImagePopup.css'
export default function ImagePopup({ onClose }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
      const data = await res.json();
      setImages(data);
    }

    fetchImages();
  }, []);

  return (
    <div className="img-popup">
      <div>
        <h2>Image Gallery</h2>

        <div>
          {images.map((img) => (
            <Image
              key={img.id}
              src={img.download_url}
              alt={img.author}
              width={200}
              height={150}
            />
          ))}
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}