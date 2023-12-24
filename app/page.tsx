"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Rubik_Bubbles } from "next/font/google";
import { FaRegCopy } from "react-icons/fa6";
import Link from "next/link";

const dancing_script = Rubik_Bubbles({ weight: "400", subsets: ["latin"] });

enum Relationship {
  Friend = "friend",
  Partner = "partner",
  Mother = "mother",
  Father = "father",
  Son = "son",
  Daughter = "daughter",
  Colleague = "colleague",
  Mentor = "mentor",
  Brother = "brother",
  Sister = "sister",
  Idol = "idol",
  // You can add more relationships here
}

export default function Home() {
  const [to, setTo] = useState<null | string>();
  const [from, setFrom] = useState<string | null>(null);
  const [relationship, setRelationship] = useState<null | Relationship>();
  const [link, setLink] = useState<string | null>();

  useEffect(() => {
    const searchParams = new URLSearchParams();

    if (to) {
      searchParams.set("t", to);
    }

    if (from) {
      searchParams.set("f", from);
    }

    if (relationship) {
      searchParams.set("r", relationship);
    }

    setLink(location.origin + "/wish?" + searchParams.toString());
  }, [to, from, relationship]);

  useEffect(() => {
    const _to = localStorage.getItem("to");
    const _from = localStorage.getItem("from");
    const _relationship = localStorage.getItem("relationship");

    if (_to) {
      setTo(_to);
    }

    if (_from) {
      setFrom(_from);
    }

    if (_relationship) {
      setRelationship(_relationship as Relationship);
    }
  }, []);

  return (
    <main
      style={{
        backgroundImage: `url('/christmas-holidays-composition.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh", // Set the height as needed
      }}
      className="flex min-h-screen max-h-screen overflow-hidden p-4 "
    >
      <div className="z-10 11/12 md:w-3/4 lg:w-1/3 m-auto p-3 bg-red-500/90 rounded-lg shadow-lg ">
        <h1 className="text-white text-center text-4xl lg:text-5xl border-b border-white/50 mb-2">
          Spread the wishes
        </h1>
        <div className="px-4 py-2  text-2xl rounded-full max-w-full grid grid-cols-12 gap-2">
          <p className="col-span-3 text-green-950">To: </p>
          <input
            onChange={(e) => {
              const value = e.target.value;
              setTo(value);
              localStorage.setItem("to", value as string);
            }}
            value={to || ""}
            name="to"
            className={`${dancing_script.className} col-span-9 max-w-full bg-transparent   text-white active:bg-transparent border-b border-white/30 outline-none active:outline-none focus:border-white/80`}
          />
        </div>

        <div className="px-4 py-2  text-2xl rounded-full grid grid-cols-12 max-w-full">
          <p className="col-span-3 text-green-950">From: </p>
          <input
            onChange={(e) => {
              const value = e.target.value;
              setFrom(value);
              localStorage.setItem("from", value as string);
            }}
            value={from || ""}
            name="from"
            className={`${dancing_script.className} col-span-9 max-w-full bg-transparent  text-white active:bg-transparent border-b border-white/30 outline-none active:outline-none focus:border-white/80`}
          />
        </div>
        <div className="p-2 flex flex-row flex-wrap max-w-full overflow-y-auto bg-blue">
          {Object.values(Relationship).map((_relationship) => {
            return (
              <span
                onClick={() => {
                  setRelationship(_relationship);
                  localStorage.setItem("relationship", _relationship as string);
                }}
                className={`cursor-pointer px-4 py-1 rounded-full border border-white/50 m-1  capitalize
                ${
                  relationship == _relationship
                    ? "bg-white/90 text-red-500"
                    : "bg-transparent  text-white"
                }
                `}
              >
                {_relationship}
              </span>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-12 gap-2 justify-center items-center border border-white/30 rounded-full px-4 py-1">
          <p className="w-full max-w-full overflow-x-auto overflow-y-hidden px-3 py-1 text-sm col-span-8 text-white">
            {link}
          </p>

          <p
            onClick={() => {
              if (link) {
                navigator.clipboard.writeText(link);
                alert("Link Copied to clipboard");
              }
            }}
            className="flex flex-row flex-nowrap justify-center items-center w-full col-span-4 cursor-pointer px-4 py-1 rounded-full bg-white hover:bg-white/80 active:bg-white/90"
          >
            <FaRegCopy
              width={20}
              height={20}
              className="text-lg text-red-500 pr-2"
            />
            <span>Copy</span>
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center ">
          <Link
            href={`${link}`}
            className="mx-1 mt-3 shadow-md flex flex-row flex-nowrap justify-center items-center col-span-3 cursor-pointer px-4 py-1 rounded-full bg-white hover:bg-white/80 active:bg-white/90"
          >
            <span>Preview Wishes</span>
          </Link>
          <p
            onClick={() => {
              setTo(null);
              setFrom(null);
              setRelationship(null);
              localStorage.removeItem("to");
              localStorage.removeItem("from");
              localStorage.removeItem("relationship");
            }}
            className="mx-1 mt-3 shadow-md flex flex-row flex-nowrap justify-center items-center col-span-3 cursor-pointer px-4 py-1 rounded-full bg-white hover:bg-white/80 active:bg-white/90"
          >
            <span>Clear</span>
          </p>
        </div>
      </div>
      <div className="max-h-full max-w-full absolute min-h-full min-w-full">
        <ul className="g-snows" id="jsi-snows">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  );
}
