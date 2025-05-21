// components/ElfsightWidget.tsx
"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function ElfsightWidget() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if ((window as any).elfsight) {
      (window as any).elfsight.load();
    }
  }, [loaded]);

  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        onLoad={() => setLoaded(true)}
      />
      <div
        className="elfsight-app-d63f0ff0-f7b4-4915-a8be-42aa7c3ecf40 w-full max-w-full overflow-hidden"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
