import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div className="flex justify-center">
                <Image
                    src="/images/circle.png"
                    width={580}
                    height={540}
                    alt="circle"
                    className="blur-[100px] xl:ml-[300px] 2xl:ml-[500px] z-[-1]"
                />
                <Image
                    src="/images/twostar.png"
                    width={50}
                    height={165}
                    alt="twostar"
                    className="absolute -rotate-10 left-2/3 ml-[100px] mt-[500px]"
                />
                <div className="absolute text-[42px] -rotate-90 left-1/2 transform translate-x-[-50%]  xl:ml-[-100px] 2xl:ml-[-200px]">
                    <p className="mb-[20px] ml-[-200px]">
                        <a href="/files/resume.pdf" download className="hover:text-[#3A5876]">
                            Resume
                        </a>
                    </p>
                    <p className="mb-[20px] ml-[-300px]">
                        <a
                            href="https://vladek.notion.site/vladek/b5d236988bff498b9a227aa867872dee?v=758022a0c38841148c8830414c0d8d65"
                            className="hover:text-[#3A5876]"
                        >
                            Notion
                        </a>
                    </p>
                    <p className="mb-[20px] ml-[-400px]">
                        {" "}
                        <a href="https://github.com/nsmarts-jmh" className="hover:text-[#3A5876]">
                            Github
                        </a>
                    </p>
                    <p className="mb-[20px] ml-[-500px]">
                        <a href="mailto:minhwa1224@naver.com" className="hover:text-[#3A5876]">
                            Email
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
