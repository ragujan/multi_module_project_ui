import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Dashboard() {
  const [sideBarState, setSideBarState] = useState(false);
  const sideBarRef = useRef(null);

  const [settingIconState, setSettingIconState] = useState(false);
  const [settingOptionHeight, setSettingOptionHeight] = useState(0);
  const settingOptionDiv = useRef(null);
  const [chartIconState, setChartIconState] = useState(false);

  const bodySectionRef = useRef(null);

  let sideBarClassList =
    "flex-col py-5   md:flex gap-y-3 transistion duration-300";

  const sideBarIconsOnly = (sideBar) => {
    const childDivs = sideBar.childNodes;

    childDivs.forEach((element) => {
      let subDivs = element.childNodes;
      subDivs.forEach((subDiv) => {
        let singleSubDiv = subDiv.childNodes;

        let isFirstSvg = true;
        singleSubDiv.forEach((subElement) => {
          if (subElement.nodeName === "svg" && isFirstSvg) {
            isFirstSvg = false;
            return;
          }
          console.log("side bar status was ",sideBarState)
          if (sideBarState && window.innerWidth > 640) {
            subElement.style.display = "none";
          } else if (sideBarState && window.innerWidth <= 640) {
            sideBarRef.current.style.display = "";
            subElement.style.display = "";
          } else if (!sideBarState && window.innerWidth > 640) {
            subElement.style.display = "";
            sideBarRef.current.style.display = "";
          } else if (!sideBarState && window.innerWidth <= 640) {
            sideBarRef.current.style.display = "none";
            subElement.style.display = "";
          }else{
            console.log("else statement ")
          }
        });
      });
    });
  };

  useEffect(() => {
    if (settingOptionHeight === 0) {
      setSettingOptionHeight(settingOptionDiv.current.scrollHeight);
    }
  }, [settingOptionHeight, sideBarState]);
  useEffect(() => {
    sideBarIconsOnly(sideBarRef.current);

    window.addEventListener('resize',()=>{
      sideBarIconsOnly(sideBarRef.current)
    })
  }, [sideBarState]);

  return (
    <div className="flex flex-col bg-main-blue h-[100vh] ">
      {/* top section */}
      <div className="flex items-center justify-between px-4 py-2 bg-secondary-blue">
        <div className="flex flex-row items-center">
          {/* burger menu */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="w"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white cursor-pointer"
              onClick={() => {
                setSideBarState(!sideBarState);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {/* logo div */}
          <div className="flex flex-col justify-center px-10">
            <img
              src={require("../resources/business_logo.png")}
              className="w-12 h-12"
              alt=""
            />
          </div>
        </div>
        {/* bell and user related */}
        <div className="flex flex-row items-center pr-5 gap-x-10">
          {/* notify bell */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
          {/* user icon */}
          <div>
            <div className="relative flex flex-col items-center justify-center w-10 h-10 overflow-hidden bg-white rounded-full">
              <img
                src={require("../resources/cat_in_a_cup.jpg")}
                className="absolute top-0 right-0 cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* body section */}
      <div
        ref={bodySectionRef}
        className="relative flex flex-row px-3 bg-main-blue"
      >
        {/* sidebar */}
        <div
          ref={sideBarRef}
          className={`${sideBarClassList} absolute md:static top-0 left-0 bg-slate-900 px-2 md:px-0 md:bg-main-blue`}
        >
          <div className="flex flex-row items-center px-3 py-2 rounded-md cursor-pointer bg-light-darker bg-opacity-5">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h4 className="px-10 font-bold text-white">Home</h4>
            </div>
          </div>
          <div
            onClick={() => {
              setSettingIconState(!settingIconState);
            }}
            className="bg-light-darker bg-opacity-5"
          >
            <div
              className={
                " cursor-pointer flex flex-row px-3 items-center py-2 rounded-md "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>

              <h4 className="px-10 font-bold text-white">Options</h4>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  settingIconState
                    ? "w-6 h-6 text-white transition ease-in-out  -rotate-180"
                    : "w-6 h-6 text-white transition ease-in-out"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div
              ref={settingOptionDiv}
              className={
                settingIconState
                  ? `max-h-[${settingOptionHeight}px]  transistion duration-700 bg-light-darker bg-opacity-5`
                  : "max-h-0  transistion duration-700  overflow-hidden bg-light-darker bg-opacity-5 "
              }
            >
              <div className="py-2 ml-10">
                <h1 className="text-sm text-white">Overview</h1>
              </div>
              <div className="py-2 ml-10">
                <h1 className="text-sm text-white">Customer List</h1>
              </div>
              <div className="py-2 ml-10">
                <h1 className="text-sm text-white">Overview</h1>
              </div>
              <div className="py-2 ml-10">
                <h1 className="text-sm text-white">Customer List</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center px-3 py-2 rounded-md cursor-pointer bg-light-darker bg-opacity-5">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>

              <h4 className="px-10 font-bold text-white">Elements</h4>
            </div>
          </div>

          <div
            onClick={() => {
              setChartIconState(!chartIconState);
            }}
            className="bg-light-darker bg-opacity-5"
          >
            <div
              className={
                " cursor-pointer flex flex-row px-3 items-center py-2 rounded-md "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>

              <h4 className="px-10 font-bold text-white">Options</h4>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={
                  chartIconState
                    ? "w-6 h-6 text-white transition ease-in-out  -rotate-180"
                    : "w-6 h-6 text-white transition ease-in-out"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div
              className={
                chartIconState
                  ? `max-h-[${settingOptionHeight}]  ease-in-out transistion duration-300 bg-light-darker bg-opacity-5`
                  : "max-h-0  transistion duration-700  overflow-hidden bg-light-darker bg-opacity-5 "
              }
            >
              <div className="flex flex-col">
                <div className="py-2 ml-10">
                  <h1 className="text-sm text-white">Bar Charts</h1>
                </div>
                <div className="py-2 ml-10">
                  <h1 className="text-sm text-white">Pie Charts</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="w-full px-5 py-5">
          <div className=" bg-light-darker bg-opacity-5 py-7 px-7">
            <h1 className="font-bold text-white">Main body sections</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
