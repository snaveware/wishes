"use client";
import Image from "next/image";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { Rubik_Bubbles } from "next/font/google";
import { FaRegCopy } from "react-icons/fa6";
import {
  MdOutlinePlayCircleOutline,
  MdOutlinePauseCircle,
} from "react-icons/md";
import Link from "next/link";
import { IoPlayOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import messages from "@/messages";
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
  // You can add more relationships here
}

export default function Home() {
  //   const videoRef = useRef<LegacyRef<HTMLVideoElement>>();

  //   useEffect(() => {
  //     if (videoRef && videoRef.current) {
  //       videoRef.current.play();
  //     }
  //   }, [videoRef]);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    }
  }, [audioRef]);
  const [isPlaying, setIsPlaying] = useState(false);
  const searchParams = useSearchParams();
  return (
    <main
      style={{
        backgroundImage: `url('/christmas-holidays-composition.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh", // Set the height as needed
      }}
      className="min-h-screen max-h-screen overflow-hidden flex justify-center items-center"
    >
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full fixed min-h-full min-w-full left-0 right-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video> */}
      <div className="text-2xl absolute z-10 w-5/6 md:w-3/4  lg:w-1/3 m p-4 bg-red-500/80 rounded-lg shadow-lg">
        {searchParams.get("t") && (
          <p className="col-span-3">
            <span className=" text-green-950">To: </span>
            <span
              className={`${dancing_script.className} text-lg text-white capitalize animate-pulse`}
            >
              {searchParams.get("t")}
            </span>
          </p>
        )}
        <p className="col-span-3 capitalize">
          <span className=" text-green-950">Dear </span>
          <span className="text-white">
            {searchParams.get("r") || Relationship.Friend}
          </span>{" "}
        </p>

        {searchParams.get("r") && (
          <p className="text-white my-3">
            {messages[searchParams.get("r") as Relationship]}
          </p>
        )}

        {!searchParams.get("r") && (
          <p className="text-white my-3">{messages[Relationship.Friend]}</p>
        )}

        {searchParams.get("f") && (
          <p className="col-span-3">
            <span className=" text-green-950">From: </span>
            <span className={`${dancing_script.className} text-white`}>
              {searchParams.get("f")}
            </span>
          </p>
        )}
        <Link
          href={`/`}
          className="shadow-md mt-3 flex flex-row flex-nowrap justify-center items-center w-full col-span-3 cursor-pointer px-4 py-1 rounded-full bg-white hover:bg-white/80 active:bg-white/90"
        >
          <span>Spread Wishes</span>
        </Link>
      </div>

      <div className="fixed bottom-0 left-o w-11/12 md:w-1/2 lg:w-1/3 mx-auto bg-red-500 h-10 rounded-full px-4 py-1 my-2 flex flex-row flex-nowrap justify-start items-center">
        {!isPlaying && (
          <span
            onClick={() => {
              audioRef.current?.play();
              setIsPlaying(true);
            }}
            className="cursor-pointer"
          >
            <MdOutlinePlayCircleOutline
              width={20}
              height={20}
              className="text-3xl text-white hover:text-white/80"
            />
          </span>
        )}

        {isPlaying && (
          <span
            onClick={() => {
              audioRef.current?.pause();
              setIsPlaying(false);
            }}
            className="cursor-pointer"
          >
            <MdOutlinePauseCircle
              width={20}
              height={20}
              className="text-3xl text-white hover:text-white/80"
            />
          </span>
        )}

        <audio
          ref={audioRef}
          controls
          className="max-h-full bg-transparent m-1 hidden"
          loop
        >
          <source
            src="/we-wish-you-a-merry-christmas-xmas-background-short-music-30-second-178228.mp3"
            type="audio/mpeg"
          />
        </audio>

        <span className="pl-3 text-ellipsis max-w-full max-h-full text-white">
          We wish you a merry christmas
        </span>
      </div>
    </main>
  );
}
