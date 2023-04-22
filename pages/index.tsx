/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Head from "next/head";
import data from "../public/src.json";
import close from "../public/images/close.svg";
import { Raleway } from "next/font/google";

const rale = Raleway({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

interface Detail {
  id: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Nav {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [id, setId] = useState(0);

  const handleOpen = (id: number) => {
    setOpen(true);
    setId(id);
  };

  return (
    <div>
      <Head>
        <title>Xaverd Gallery</title>
        <meta name="description" content="Collection from enthusiast artist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/moon.jpg" />
      </Head>
      {nav ? (
        <>
          <Nav setNav={setNav} />
        </>
      ) : (
        ""
      )}
      {open ? (
        <>
          <Details id={id} setOpen={setOpen} />
        </>
      ) : (
        ""
      )}
      <div className={`${open ? "fixed w-screen" : "relative"}`}>
        <div className={`${rale.className}  container px-4 mx-auto`}>
          {/* Header */}
          <div className="">
            <div className="py-7 mx-auto flex justify-between items-center">
              <span className="text-2xl font-normal">XAVERD GALLERY</span>
              <div className="font-light text-base gap-4 flex">
                <button
                  onClick={() => {
                    setNav(true);
                  }}
                >
                  CONTACT
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-black/20"></div>
          <div>
            <img
              src={data[0].image}
              alt=""
              className="w-full max-h-[40rem] my-7 object-cover cursor-pointer"
              onClick={() => {
                handleOpen(0);
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  my-10 md:my-20">
            <img
              src={data[6].image}
              alt=""
              className="col-span-1 px-0 md:px-10 xl:px-24 w-full cursor-pointer"
              onClick={() => {
                handleOpen(6);
              }}
            />
            <div className="flex justify-center  space-y-4 py-4 md:py-0 flex-col md:px-10 ">
              <div onClick={() => handleOpen(6)} className="cursor-pointer">
                <h1 className="text-3xl md:text-4xl font-extralight ">
                  {data[6].title}
                </h1>
                <h1 className="text-xl md:text-2xl font-thin">
                  {data[6].date}
                </h1>
              </div>
              <h1
                onClick={() => handleOpen(6)}
                className="font-extralight text-lg md:font-xl cursor-pointer"
              >
                {data[6].description}
              </h1>
            </div>
          </div>
          <div className="mt-10 md:mt-20">
            <div className="text-3xl font-extralight mb-8 md:mb-10">
              last seasson
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <img
                  src={data[1].image}
                  alt=""
                  className="max-h-[50rem] w-full object-cover"
                  onClick={() => {
                    handleOpen(1);
                  }}
                />
                <div className="my-2 md:my-4 space-y-1 md:space-y-2">
                  <div className="text-xl md:text-2xl font-extralight">
                    {data[1].title}
                  </div>
                  <div className="text-lg md:text-xl font-thin">
                    {data[1].date}
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={data[13].image}
                  alt=""
                  className="max-h-[50rem] w-full object-cover"
                  onClick={() => {
                    handleOpen(13);
                  }}
                />
                <div className="my-2 md:my-4 space-y-1 md:space-y-2">
                  <div className="text-xl md:text-2xl font-extralight">
                    {data[13].title}
                  </div>
                  <div className="text-lg md:text-xl font-thin">
                    {data[13].date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`overflow-hidden`}>
            <div className="h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 ">
              {data.slice(0, 8).map((unit, index) => {
                return (
                  <>
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="aspect-square object-cover w-full cursor-pointer duration-200"
                      onClick={() => {
                        handleOpen(index);
                      }}
                    />
                  </>
                );
              })}
            </div>
          </div> */}

          {/* footer */}
          <div>
            <div className="w-full h-[1px] bg-black/20 mt-10"></div>
            <div className="my-10 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between">
              <div>© 2023 | XAVERD GALLERY</div>
              <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-3 font-light">
                <a
                  href="https://www.instagram.com/xaverdred/?hl=id"
                  target="_blank"
                >
                  Instagram
                </a>
                <div>Twitter</div>
                <div>Email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Details = ({ id, setOpen }: Detail) => {
  return (
    <div className={rale.className}>
      <div className="h-screen flex mx-auto fixed md:px-10 w-screen backdrop-blur-lg bg-white/90 z-10 overflow-scroll">
        <div className="mx-auto container px-4 pb-10 pt-7 h-fit">
          <div className="flex justify-end pb-4">
            <button onClick={() => setOpen(false)}>
              <img src={close.src} alt="" className="h-6 w-6"></img>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={data[id].image} alt="" />
            <div className="col-span-1 space-y-4 mx-0 md:mx-8 ">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-light">
                  {data[id].title}
                </h1>
                <h1 className="text-base md:text-lg font-light">
                  {data[id].date}
                </h1>
              </div>
              <div>{data[id].description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Nav = ({ setNav }: Nav) => {
  return (
    <div className="h-screen flex flex-col fixed md:px-10 w-screen backdrop-blur-lg bg-white/90 z-10">
      <div className="flex justify-end w-full mt-7 px-4">
        <button onClick={() => setNav(false)}>
          <img src={close.src} alt="" className="h-6 w-6"></img>
        </button>
      </div>
      <div
        className={`${rale.className} w-1/2 h-2/3 px-4 flex justify-start  space-y-4 font-light mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mx-auto font-light text-2xl space-y-4">
          <a href="https://www.instagram.com/xaverdred/?hl=id" target="_blank">
            Instagram
          </a>
          <div>Twitter</div>
          <div>Email</div>
        </div>
      </div>
    </div>
  );
};
