"use client";
import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const analyticsCode = `       <script async src="https://www.googletagmanager.com/gtag/js?id=G-CRGEYG5RG2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-CRGEYG5RG2');
        </script>`;
    const analyticsDiv = document.createElement("div");

    analyticsDiv.innerHTML = analyticsCode;

    document.body.appendChild(analyticsDiv);
  }, []);

  return <></>;
}
