import type { NextPage } from "next";

const HeadreMener: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 text-left text-[13.89px] text-white font-roboto">
      <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
        <div className="self-stretch flex-1 rounded-md box-border overflow-hidden flex flex-row items-center justify-start py-3 pr-[91px] pl-[13px] gap-[12px] min-h-[44px] border-[1px] border-solid border-gray-200">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/svg.svg"
          />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <div className="relative leading-[20px]">New Chat</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="rounded-md box-border w-11 h-11 flex flex-row items-center justify-center p-3.5 min-h-[44px] border-[1px] border-solid border-gray-200">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/svg1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadreMener;
