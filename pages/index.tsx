import type { NextPage } from "next";
import Divflexmenu from "../components/divflexmenu";
import Divrelative from "../components/divrelative";

const ChatopenaicomByHtmltodes: NextPage = () => {
  return (
    <div className="relative bg-darkslategray-200 w-full h-[1080px] flex flex-row items-center justify-end text-center text-base text-gainsboro font-roboto">
      <div className="w-[1920px] h-[1080px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
        <Divflexmenu />
        <Divrelative />
      </div>
      <div className="w-[46px] flex flex-row items-center justify-start [align-self:start] mt-[517px] ml-[-42px]">
        <div className="flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="rounded-9980xl bg-gray-400 flex flex-row items-center justify-center p-px border-[1px] border-solid border-gray-400">
              <div className="w-6 h-6 flex flex-col items-center justify-start py-0 pr-[7.904999732971191px] pl-[8.095000267028809px] box-border">
                <div className="relative leading-[24px]">?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatopenaicomByHtmltodes;
