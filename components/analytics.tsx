"use client";
import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-CRGEYG5RG2";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CRGEYG5RG2');
    `;
    document.body.appendChild(script2);
  }, []);

  return <></>;
}
