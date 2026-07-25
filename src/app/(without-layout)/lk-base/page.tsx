"use client"

import Script from "next/script";

export default function LkBase() {
  return (
    <div>
      <a href="/" className="back-button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Назад
      </a>

      <style jsx>{`
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 12px 0 0 12px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #f4f4f4;
          color: #4b4b4b;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
          margin-bottom: 12px;
        }

        .back-button:hover {
          background: #e9f9e4;
          color: #27c303;
        }

        .back-button:active {
          opacity: 0.7;
        }
      `}</style>

      <Script
        src="https://reservi.ru/widget-fit1c.v4/public/init.js" data-fit-apikey="288a1229-2774-4bdf-be32-76685b618ade" data-theme='light'>
      </Script>
    </div>
  );
}
