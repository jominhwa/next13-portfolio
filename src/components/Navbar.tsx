"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="mt-[40px] ml-[55px] text-[16px] sm:text-[22px] md:text-[27px]">
                <Link href="/">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/about">About</Link>
                <span className="mx-2">/</span>
                <Link href="/project">Project</Link>
                <span className="mx-2">/</span>
                <Link href="/contact">Contact</Link>
            </div>
        </>
    );
}
