import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Goblin_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const goblin_One = Goblin_One({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: "조민화 포트폴리오",
    description: "웹 개발자 조민화 포트폴리오입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={goblin_One.className}>
                <header>
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
