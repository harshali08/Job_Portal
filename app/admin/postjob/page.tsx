import { PostNewJob } from "@/components/form/PostNewJob";
import Navbar from "@/components/Navbar";
import SidebarComp from "@/components/SidebarComp";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex ">
        <div className="sm:w-1/6">
          <SidebarComp />
        </div>
        <div className="sm:w-5/6 w-full flex justify-center  overflow-hidden">
          {" "}
          <PostNewJob />
        </div>
      </div>
    </div>
  );
};

export default page;
