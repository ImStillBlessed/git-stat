import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
    return(
        <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-s-zinc-300 py-2">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl"
            >
                <Link href={"./"} className="flex items-center gap-2">
                    <p className="rounded-lg border-2 border-b-4 border-r-4 border-black text-xl font-bold text-s-zinc-900 dark:text-s-zinc-100 transition-all hover:-translate-y-[2px] md:block dark:border-white px-3">Git-stat</p>
                </Link>
                <ThemeToggle />
            </div>
        </div>
    )
};

export default Navbar;
