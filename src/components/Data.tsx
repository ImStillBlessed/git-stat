import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
// import dateFormte from "dateformat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: any | null;
  loading: any;
};

const Data = ({ data, loading }: Props) => {

  if(loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center ">
        <p className="animate-bounce">Loading...</p>
      </div>
    );
  }
  if(data === null) {
    return (
      <div></div>
    )
  }

  return (
    <div className="flex mt-4">
        <main className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8  min-h-[200px]">
        {/* 1 */}
        <section className="flex gap-4">
          {/* user image  */}
          <Image
            width={200}
            height={200}
            className=" h-20 w-20 rounded-full "
            src={data?.avatar_url ? data.avatar_url : "https://stock.adobe.com/search/images?k=profile+picture+placeholder"}
            alt="user-img"
          />

          <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
            <div>
              {/*name  */}
              <h1>{data?.name}</h1>
              {/* user id */}
              <Link
                target="_blank"
                className="text-blue-500  hover:underline text-sm transition-all"
                href={`https://github.com/${data?.login}/`}
              >
                @{data?.login}
              </Link>
            </div>

            {/* joined date */}
            {/* <p className="">
              <span>Joined</span>
              <span> {dateFormte(data?.created_at, "dd mmm yyyy")} </span>
            </p> */}
          </section>
        </section>
        {/* 2 */}
        <section className="flex flex-col gap-5">
          <p>
            {data?.bio ?? (
              <span className="opacity-60">This profile has no bio</span>
            )}
          </p>
          {/* repo and follower section */}
          <div className="flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 dark:bg-slate-900  min-h-[50px]  ">
            {/* item 1 */}
            <div className="flex flex-col items-center gap-2 ">
              <p className="text-xs opacity-60">Repos</p>
              <p className=" text-sm font-bold sm:text-base">
                {data?.public_repos}
              </p>
            </div>
            {/* item 2 */}
            <div className="flex flex-col items-center gap-2 ">
              <p className="text-xs opacity-60">Followers</p>
              <p className=" text-sm font-bold sm:text-base">
                {data?.followers}
              </p>
            </div>
            {/* item 3 */}
            <div className="flex flex-col items-center gap-2 ">
              <p className="text-xs opacity-60">Following</p>
              <p className=" text-sm font-bold sm:text-base">
                {data?.following}
              </p>
            </div>
          </div>
          {/* address and extra links */}
          <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
            {/* item 1 */}
            <div className="flex items-center gap-2">
              {/* icon */}
              <IoLocationOutline className="text-xl" />
              <p>
                {data?.location ?? (
                  <span className="opacity-60">Not Available</span>
                )}{" "}
              </p>
            </div>
            {/* item 2 */}
            <div className="flex items-center gap-2">
              {/* icon */}
              <IoIosLink className="text-xl" />
              {data?.blog ? (
                <Link
                  title={data?.blog}
                  className="hover:underline opacity-60 max-w-[220px] overflow-hidden text-ellipsis "
                  href={data?.blog ?? "#"}
                >
                  {data?.blog}{" "}
                </Link>
              ) : (
                <span className="opacity-60">Not Available</span>
              )}{" "}
            </div>
            {/* item 3 */}
            <div className="flex items-center gap-2">
              {/* icon */}
              <FaTwitter className="text-xl" />
              <p>
                {data?.company ?? (
                  <span className="opacity-60">Not Available</span>
                )}
              </p>
            </div>
            {/* item 4 */}
            <div className="flex items-center gap-2">
              {/* icon */}
              <BsFillBuildingsFill className="text-xl" />

              <p>
                {data?.company ?? (
                  <span className="opacity-60">Not Available</span>
                )}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Data;
