import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {TwitterTimelineEmbed} from "react-twitter-embed"

function Widgets() {
  return (
    <div className=" px-2 mt-2 col-span-3 hidden lg:inline bg-green-50s">
      {/* Search */}
      <div className=" flex bg-gray-100 items-center space-x-4 p-3 rounded-full mt-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className=" bg-transparent outline-none flex-1"
        />
      </div>

      {/* twitter embed */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="username"
        options={{ height: 400  }}
      />
    </div>
  );
}

export default Widgets;
