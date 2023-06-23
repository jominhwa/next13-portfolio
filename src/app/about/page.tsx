import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="flex flex-wrap justify-between mt-[100px] max-w-[1700px] mx-auto">
                <div className="mx-auto">
                    <p className="relative text-[50px] sm:text-[60px] md:text-[80px] lg:text-[80px] xl:text-[110px] 2xl:text-[110px] pr-[100px]">
                        JoMinhwa
                        <span className="absolute right-[-15px] top-[-75px] ">
                            <Image
                                src="/images/bluestar_eight2.png"
                                width={187}
                                height={228}
                                alt="bluestar_eight2"
                                className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[160px] 2xl:w-[160px]"
                            />
                        </span>
                    </p>

                    <p className="text-[15px] 2xl:text-[28px]">1999/09/16</p>
                    <p className="text-[15px] 2xl:text-[28px]">minhwa1224@naver.com</p>
                    <br />
                    <p className="">후회하는 과거는 바꿀 수 없지만,</p>
                    <p className="">후회없는 코딩을 하고싶은 개발자 조민화입니다.</p>
                </div>
                {/* <div className="sm:mx-[20px] md:mx-[67px] lg:mx-[65px] xl:mx-[80px] 2xl:mx-[200px]"></div> */}
                <div className="mx-auto">
                    <p className="text-[28px] mt-[40px] mb-[20px]">Skill</p>
                    <div className="flex flex-wrap justify-center mb-[30px]">
                        <Image src="/images/html5.png" width={60} height={60} alt="html5" className="w-[55px] h-[55px] mx-[10px]" />
                        <Image src="/images/css.png" width={60} height={60} alt="css" className="w-[55px] h-[55px] mx-[10px]" />
                        <Image
                            src="/images/javascript.png"
                            width={60}
                            height={60}
                            alt="javascript"
                            className="w-[55px] h-[55px] mx-[10px]"
                        />
                        <Image
                            src="/images/typescript.png"
                            width={60}
                            height={60}
                            alt="typescript"
                            className="w-[55px] h-[55px] mx-[10px]"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Image src="/images/react.png" width={60} height={60} alt="react" className="w-[55px] h-[55px] mx-[10px]" />
                        <Image src="/images/nextjs.png" width={60} height={60} alt="nextjs" className="w-[55px] h-[55px] mx-[10px]" />
                        <Image src="/images/tailwind.png" width={60} height={60} alt="tailwind" className="w-[55px] h-[55px] mx-[10px]" />
                        <Image src="/images/figma.png" width={60} height={60} alt="figma" className="w-[55px] h-[55px] mx-[10px]" />
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-[60px]"></div>
                        <div className="w-[60px]"></div>
                        <div className="w-[60px]"></div>
                        <div className="w-[60px]"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
