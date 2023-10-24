import type { NextPage } from "next";
import HeadreMener from "./headre-mener";
import DivflexColmargin from "./divflex-colmargin";
import DivborderT from "./divborder-t";

const NavChatHistory: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start p-2 text-left text-[13.89px] text-white font-roboto">
      <HeadreMener />
      <DivflexColmargin />
      <DivborderT />
    </div>
  );
};

export default NavChatHistory;
