"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="mt-[40px] ml-[55px] text-[16px] sm:text-[22px] md:text-[27px]">
                <Link href="/" className="hover:text-[#3A5876]">
                    Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/about" className="hover:text-[#3A5876]">
                    About
                </Link>
                <span className="mx-2">/</span>
                <Link href="/project" className="hover:text-[#3A5876]">
                    Project
                </Link>
                <span className="mx-2">/</span>
                <Link href="/contact" className="hover:text-[#3A5876]">
                    Contact
                </Link>
            </div>
        </>
    );
}
