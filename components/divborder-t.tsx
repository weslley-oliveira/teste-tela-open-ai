import type { NextPage } from "next";

const DivborderT: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-[9px] px-0 pb-0 text-left text-[13.89px] text-white font-roboto border-t-[1px] border-solid border-gray-200">
      <div className="self-stretch rounded-md flex flex-row items-center justify-start py-1 px-3 box-border min-h-[44px]">
        <div className="flex-1 flex flex-row items-start justify-between">
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/svg3.svg"
            />
            <div className="relative leading-[20px]">Refer a friend</div>
          </div>
          <div className="self-stretch rounded-md bg-palegoldenrod flex flex-col items-start justify-start py-0.5 pr-[7.040000915527344px] pl-1.5 text-xs text-darkslategray-200">
            <div className="relative leading-[16px] uppercase font-medium">
              NEW
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-sm">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="rounded-md w-[244px] h-14 flex flex-row items-center justify-start p-3 box-border gap-[12px]">
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch rounded flex flex-row items-center justify-center">
                <div className="h-8 flex flex-row items-start justify-start">
                  <img
                    className="self-stretch relative rounded-sm max-h-full w-8 overflow-hidden shrink-0 object-cover max-w-[32px]"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[148px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-12 pl-0">
                <div className="relative leading-[20px] font-semibold inline-block max-w-[148px]">
                  Weslley Oliveira
                </div>
              </div>
            </div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/svg4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivborderT;
