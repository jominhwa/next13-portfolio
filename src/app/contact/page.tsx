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
                    <p className="mb-[20px] ml-[-200px]">Resume</p>
                    <p className="mb-[20px] ml-[-300px]">Notion</p>
                    <p className="mb-[20px] ml-[-400px]">Github</p>
                    <p className="mb-[20px] ml-[-500px]">Email</p>
                </div>
            </div>

            {/* <div className="w-96 h-96 transform rotate-45 flex-shrink-0 rounded-full bg-blue-800 blur-[150px] shadow-black"></div> */}
        </>
    );
}
