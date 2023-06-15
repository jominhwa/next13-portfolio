import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Goblin_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const goblin_One = Goblin_One({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
