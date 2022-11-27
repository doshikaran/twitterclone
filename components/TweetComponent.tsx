import React, { useEffect, useState } from "react";
import { Comment, Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
  ChatBubbleLeftIcon,
  ArrowsRightLeftIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { fetchComments } from "../utils/fetchComments";

interface Props {
  tweet: Tweet;
}
function TweetComponent({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  return (
    <div className=" flex flex-col  p-5 space-x-5 border-y border-gray-100">
      <div className=" flex space-x-5">
        <img
          className=" h-10 w-10 object-cover rounded-full "
          src={tweet.profilepic}
          alt=""
        />

        <div>
          <div className=" flex items-center space-x-2">
            <p className=" font-bold mr-1">{tweet.username}</p>
            <p className=" hidden text-sm text-gray-300 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()}
            </p>
            <TimeAgo
              className=" text-sm text-gray-300"
              date={tweet._createdAt}
            />
          </div>
          <p>{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className=" m-5 ml-0 mb-1 max-h-60 rounded-lg shadow-sm object-cover"
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className=" flex cursor-pointer items-center text-gray-600 space-x-4">
          <ChatBubbleLeftIcon className=" h-5 w-5" />
        </div>
        <div className=" flex cursor-pointer items-center text-gray-600 space-x-4">
          <ArrowsRightLeftIcon className=" h-5 w-5" />
        </div>
        <div className=" flex cursor-pointer items-center text-gray-600 space-x-4">
          <HeartIcon className=" h-5 w-5" />
        </div>
        <div className=" flex cursor-pointer items-center text-gray-600 space-x-4">
          <ArrowUpTrayIcon className=" h-5 w-5" />
        </div>
      </div>

      {comments?.length > 0 && (
        <div>
          {comments.map((comment) => (
            <div key={comment._id}>
              <img
                src={comment.profilepic}
                alt=""
                className=" h-7 w-7 object-cover rounded-full"
              />
              <div>
                <div className=" flex items-center space-x-2">
                  <p className=" font-bold mr-1">{comment.username}</p>
                  <p className=" hidden text-sm text-gray-300 lgs:inline"> @{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
                  <TimeAgo
                    className=" text-sm text-gray-300"
                    date={comment._createdAt}
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TweetComponent;
