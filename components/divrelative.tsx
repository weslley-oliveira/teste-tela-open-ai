import type { NextPage } from "next";
import Divh2d659b134d from "./divh2d659b134d";
import Divflex from "./divflex";
import Divrelative1 from "./divrelative1";

const Divrelative: NextPage = () => {
  return (
    <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start max-w-[1920px] text-center text-sm text-lightslategray font-roboto">
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start relative">
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start z-[0]">
          <div className="self-stretch flex-1 flex flex-col items-center justify-between pt-0 px-0 pb-64">
            <div className="w-[1660px] flex flex-col items-start justify-start py-6 px-2 box-border">
              <div className="self-stretch flex flex-col items-center justify-center py-0 px-[668px]">
                <div className="rounded-xl bg-gray-100 flex flex-row items-start justify-start p-1">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-[11px] px-px box-border gap-[8px] min-w-[148px]">
                        <div className="flex flex-col items-start justify-start z-[1]">
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/svg5.svg"
                          />
                        </div>
                        <div className="overflow-hidden flex flex-col items-center justify-start py-0 pr-1.5 pl-0 z-[0]">
                          <div className="relative leading-[20px] font-medium">
                            GPT-3.5
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start text-whitesmoke">
                      <div className="self-stretch rounded-lg bg-darkslategray-100 shadow-[0px_1px_7px_rgba(0,_0,_0,_0.06)] box-border flex flex-row items-center justify-center py-[11px] px-px gap-[8px] min-w-[148px] border-[1px] border-solid border-dimgray-200">
                        <div className="flex flex-col items-start justify-start z-[1]">
                          <img
                            className="relative w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/svg6.svg"
                          />
                        </div>
                        <div className="overflow-hidden flex flex-col items-center justify-start py-0 pr-[6.4850006103515625px] pl-[0.68499755859375px] z-[0]">
                          <div className="relative leading-[20px] font-medium">
                            GPT-4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-[1660px] flex flex-row items-start justify-center pt-0 px-0 pb-[150.4000244140625px] box-border text-17xl text-dimgray-100">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center py-[267.79998779296875px] pr-[728.4000244140625px] pl-[730.39501953125px] gap-[9.79px]">
                <div className="relative leading-[40px] font-semibold">
                  ChatGPT
                </div>
                <div className="rounded-md bg-palegoldenrod flex flex-col items-center justify-start py-0.5 pr-[5.605007171630859px] pl-[5.80499267578125px] text-sm text-darkgoldenrod">
                  <div className="relative leading-[20px] uppercase font-semibold">
                    Plus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(53,_55,_64,_0),_#353740_58.85%)] w-[1652px] flex flex-col items-center justify-start py-0 pr-0 pl-2 box-border z-[1] text-left text-silver">
          <div className="w-[768px] flex flex-row items-start justify-start max-w-[768px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <Divh2d659b134d />
              <Divflex />
            </div>
          </div>
          <Divrelative1 />
        </div>
      </div>
    </div>
  );
};

export default Divrelative;
