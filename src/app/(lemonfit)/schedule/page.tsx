'use client';

import { useEffect, useRef, useState } from "react";

export default function Schedule() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(600);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let observer: MutationObserver | null = null;
    let rafId = 0;
    let currentWin: Window | null = null;

    const updateHeight = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      const body = doc.body;
      const html = doc.documentElement;
      const nextHeight = Math.max(
        body?.scrollHeight ?? 0,
        body?.offsetHeight ?? 0,
        html?.scrollHeight ?? 0,
        html?.offsetHeight ?? 0,
      );

      if (nextHeight > 0) {
        setIframeHeight(nextHeight);
      }
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateHeight);
    };

    const onLoad = () => {
      scheduleUpdate();

      const doc = iframe.contentDocument;
      const win = iframe.contentWindow;
      if (!doc || !win) return;

      observer?.disconnect();
      currentWin?.removeEventListener("resize", scheduleUpdate);
      currentWin = win;

      observer = new MutationObserver(scheduleUpdate);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      win.addEventListener("resize", scheduleUpdate);
    };

    iframe.addEventListener("load", onLoad);
    onLoad();

    return () => {
      iframe.removeEventListener("load", onLoad);
      observer?.disconnect();
      cancelAnimationFrame(rafId);
      currentWin?.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <main className="flex flex-col gap-1 items-center w-full">
      <iframe
        ref={iframeRef}
        src="../schedule-base"
        scrolling="no"
        className="w-full border-0 overflow-hidden"
        style={{ height: `${iframeHeight}px` }}
      />
    </main>
  );
}
