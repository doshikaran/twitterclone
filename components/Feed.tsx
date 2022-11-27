import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox";
import { Tweet } from "../typings";
import TweetComponent from "./TweetComponent";

interface Props {
  tweets: Tweet[];
}
function Feed({ tweets }: Props) {
  return (
    <div className=" bg-yellow-50 col-span-7 lg:col-span-4 border-x">
      {/* header */}
      <div className=" flex items-center justify-between">
        <h1 className=" p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className=" h-8 w-8 cursor-pointer text-twt mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      {/* tweet box */}
      <div>
        <TweetBox />
      </div>

      {/* feed*/}
      <div>
      
          <TweetComponent  tweet={tweets}/>
      </div>
    </div>
  );
}

export default Feed;
