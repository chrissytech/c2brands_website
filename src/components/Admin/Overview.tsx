import React from "react";
import NavBar from "./navBar/NavBar";
import NewSubmission from "./section/NewSubmission";
import { Header1 } from "../Text";

function Overview() {
  return (
    <div>
      <NavBar />
      {/* <Header1 className="text-black mt-4 xl:mt-[74px]  ">
        Welcome back Chrissy,
      </Header1>{" "} */}
      
      <NewSubmission />
    </div>
  );
}

export default Overview;
