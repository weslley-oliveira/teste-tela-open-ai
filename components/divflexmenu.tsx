import type { NextPage } from "next";
import NavChatHistory from "./nav-chat-history";

const Divflexmenu: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-100 w-[260px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-left text-[13.89px] text-white font-roboto">
      <div className="flex-1 w-[260px] flex flex-col items-start justify-start">
        <NavChatHistory />
      </div>
    </div>
  );
};

export default Divflexmenu;
