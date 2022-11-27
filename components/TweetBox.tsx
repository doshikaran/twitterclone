import React, { useState } from "react";
import {
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function TweetBox() {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex items-center p-5 space-x-2">
      <img
        src="https://pbs.twimg.com/profile_images/1279298273669455873/uZneyPh0_400x400.jpg"
        alt=""
        className=" h-14 w-14 rounded-full object-cover mt-4"
      />

      <div className=" flex flex-1 items-center pl-2">
        <form className="  flex flex-col flex-1">
          <input
            type="text"
            placeholder="What's Happening?"
            className=" outline-none h-24 placeholder:text-lg w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className=" flex items-center">
            <div className=" flex space-x-2 text-twt flex-1">
              <PhotoIcon className=" h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <GifIcon className=" h-5 w-5 cursor-pointer" />
              <FaceSmileIcon className=" h-5 w-5 cursor-pointer" />
              <CalendarDaysIcon className=" h-5 w-5 cursor-pointer" />
              <MapPinIcon className=" h-5 w-5 cursor-pointer" />
            </div>
            <button
              className=" bg-twt px-5 py-2 font-bold rounded-full text-white disabled:opacity-40"
              disabled={!input}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
