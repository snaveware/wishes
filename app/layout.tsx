import "./globals.css";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export const metadata = {
  title: "Wishes",
  description:
    "Holiday wishes app by Evans - snaveware technologies: https://snaveware.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dancing_script.className} min-h-screen max-h-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
