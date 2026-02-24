"use client";
import './Popup.css'
export default function Popup({ onClose }) {
  return (
    <div className="popup">
      <div>
        <h2>Dynamic Popup</h2>
        <p>This component was dynamically imported.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}