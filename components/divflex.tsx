import type { NextPage } from "next";

const Divflex: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start text-left text-base text-lightslategray font-roboto">
      <div className="flex-1 rounded-xl bg-darkslategray-100 shadow-[0px_0px_15px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start p-px relative border-[1px] border-solid border-gray-300">
        <div className="h-full w-[766px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-4 pr-[602px] pl-[46px] box-border max-h-[200px] z-[0]">
          <div className="relative leading-[24px]">Send a message</div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[1px] left-[1px] w-[766px] h-14 overflow-hidden shrink-0 flex flex-col items-end justify-center py-0 px-12 box-border z-[1]">
          <div className="w-[30px] flex flex-col items-start justify-start py-[3px] pr-0 pl-1.5 box-border">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="rounded-11xl bg-white shadow-[0px_0px_0px_1px_#cdd1dc_inset] h-6 overflow-hidden flex flex-row items-center justify-start pt-[1.600000023841858px] pb-[1.6000007390975952px] pr-[1.6000007390975952px] pl-[1.600000023841858px] box-border min-w-[20.799999237060547px]">
                <div className="flex flex-col items-start justify-start">
                  <div className="rounded-13xl w-[20.8px] h-[20.8px] flex flex-col items-start justify-start pt-[1.600000023841858px] pb-[1.5999988317489624px] pr-[1.5999988317489624px] pl-[1.600000023841858px] box-border">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="relative rounded-mid-6 bg-teal w-[17.6px] h-[17.6px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute bottom-[15px] left-[17px] w-[18px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-[4.5px] box-border z-[2]">
          <div className="rounded-9980xl flex flex-row items-center justify-start p-px">
            <div className="flex flex-row items-center justify-center">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/svg7.svg"
              />
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute right-[13px] bottom-[13px] rounded-md flex flex-col items-center justify-start p-2 opacity-[0.4] z-[3]">
          <div className="flex flex-row items-start justify-start">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/svg8.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divflex;
