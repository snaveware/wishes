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
  Friends = "friends",
  Partner = "partner",
  Mother = "mother",
  Father = "father",
  Son = "son",
  Daughter = "daughter",
  Brother = "brother",
  Sister = "sister",
  Classmate = "classmate",
  Classmates = "classmates",
  Colleague = "colleague",
  Colleagues = "colleagues",
  Mentor = "mentor",
  Hero = "hero",
  // You can add more relationships here
}

const songs = [
  {
    link: "/we-wish-you-a-merry-christmas-xmas-background-short-music-30-second-178228.mp3",
    name: "We wish you a merry christmas",
    image: "/merry-christmas-red-background.jpg",
  },
  {
    link: "/jingle-bells-xmas-background-music-60-second-for-short-video-vlog-178759.mp3",
    name: "Jingle Bells",
    image: "morgane-le-breton-Ym4my-Xj8EY-unsplash.jpg",
  },
  {
    link: "/joy-to-the-world-156945.mp3",
    name: "Joy To the World",
    image: "/red-fruits.jpg",
  },
  {
    link: "/silent-night_medium.mp3",
    name: "Silent Night",
    image: "/christmas-balls.jpg",
  },
];

export default function Wish() {
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
  const [background, setBackground] = useState(songs[0].image);
  const [songLink, setSongLink] = useState(songs[0].link);
  const [songName, setSongName] = useState(songs[0].name);
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    console.log("change song", songIndex, songs[songIndex]);
    setSongLink(songs[songIndex].link);
    setSongName(songs[songIndex].name);
    setBackground(songs[songIndex].image);
  }, [songIndex]);

  useEffect(() => {
    audioRef.current?.load();
    audioRef.current?.play();
  }, [songLink]);

  return (
    <main
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh", // Set the height as needed
      }}
      className="min-h-screen max-h-screen overflow-hidden flex justify-center items-center"
      // onClick={() => {
      //   if (songIndex === 3) {
      //     setSongIndex(0);
      //   } else {
      //     setSongIndex(songIndex + 1);
      //   }
      // }}
    >
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

      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full fixed min-h-full min-w-full left-0 right-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video> */}
      <div className="text-2xl absolute z-10 w-5/6 md:w-3/4  lg:w-1/3 p-4 bg-red-500/80 rounded-lg shadow-lg -translate-y-5 ">
        {searchParams.get("t") && (
          <p className="col-span-3">
            <span className=" text-green-950">To: </span>
            <span
              className={`${dancing_script.className} text-white capitalize`}
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
            <span className={`${dancing_script.className} text-white text-lg`}>
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

      <div className="fixed bottom-0 left-o w-5/6 md:w-3/4 lg:w-1/2 mx-auto bg-red-500/50 h-10 rounded-full px-4 py-1 my-2 flex justify-center items-center">
        <audio
          ref={audioRef}
          controls
          className="max-h-full bg-transparent m-1"
          onEnded={() => {
            if (songIndex === 3) {
              setSongIndex(0);
            } else {
              setSongIndex(songIndex + 1);
            }
            console.log("audio ended");
          }}
        >
          <source src={songLink} type="audio/mpeg" />
        </audio>

        {/* <span className="pl-3  max-w-full max-h-full text-white text-ellipsis">
          {songName.length > 10 ? songName.substring(0, 10) + "..." : ""}
        </span> */}
      </div>
    </main>
  );
}
