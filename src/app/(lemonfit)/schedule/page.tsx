"use client";

import { Fit1CWidget } from "@/components/fit1c-widget";

export default function Schedule() {
  return (
    <main className="flex flex-col gap-1 items-center w-full">
      <Fit1CWidget kind="schedule" />
    </main>
  );
}
