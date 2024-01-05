import Image from "next/image";
import { Noto_Sans } from "next/font/google";

const goblin_One = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default function About() {
    return (
        <>
            <div className="flex flex-wrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-between mt-[100px] max-w-[1700px] mx-auto">
                <div className="mx-auto px-[40px]">
                    <p className="relative text-[50px] sm:text-[60px] md:text-[80px] lg:text-[80px] xl:text-[110px] 2xl:text-[110px]">
                        JoMinhwa
                        <span className="absolute right-[-58px] top-[-55px] sm:right-[-70px] sm:top-[-55px] md:right-[-82px] md:top-[-60px] lg:right-[-82px] lg:top-[-60px] xl:right-[-115px] xl:top-[-75px] 2xl:right-[-115px] 2xl:top-[-75px]">
                            <Image
                                src="/images/bluestar_eight2.png"
                                width={187}
                                height={228}
                                alt="bluestar_eight2"
                                className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[160px] 2xl:w-[160px]"
                            />
                        </span>
                    </p>

                    <p className="text-[15px] md:text-[21px] lg:text-[21px] xl:text-[28px] 2xl:text-[28px]">1999/09/16</p>
                    <p className="text-[15px] md:text-[21px] lg:text-[21px] xl:text-[28px] 2xl:text-[28px]">minhwa1224@naver.com</p>
                    <br />
                    <p className="">후회하는 과거는 바꿀 수 없지만,</p>
                    <p className="mb-[40px] 2xl:mb-[0px]">후회없는 코딩을 하고싶은 개발자 조민화입니다.</p>
                </div>
                {/* <div className="sm:mx-[20px] md:mx-[67px] lg:mx-[65px] xl:mx-[80px] 2xl:mx-[200px]"></div> */}
                <div className="mx-auto px-[19px]">
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
                        <div className="w-[60px] h-[60px]"></div>
                        <div className="w-[60px] h-[60px]"></div>
                        <div className="w-[60px] h-[60px]"></div>
                        <div className="w-[60px] h-[60px]"></div>
                    </div>
                </div>
            </div>
            <div className="2xl:h-[120px]"></div>
            <div className="flex justify-center">
                <div className="border-[2px] border-black my-5 w-[80%] sm:w-[80%] md:w-[90%] 2xl:w-[1410px]"></div>
            </div>
            <div className="flex justify-center ">
                <div className="flex flex-wrap justify-center lg:justify-between xl:justify-between 2xl:justify-between">
                    <div className="ml-[80px] mb-4 mr-[105px] sm:mr-[180px] md:mr-[180px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[90px] ">
                        <div className="flex items-center">
                            <Image src="/images/star_eight2.png" width={35} height={35} alt="figma" className="mr-[5px]" />
                            <p className="text-[20px]">EDUCATION</p>
                        </div>
                        <span className={goblin_One.className}>
                            <p className="mt-[10px]">2018.03 한성대학교 컴퓨터공학부 입학</p>
                            <p className="mt-[10px]">2023.02 한성대학교 컴퓨터공학부 졸업</p>
                        </span>
                    </div>
                    <div className="ml-[80px] sm:mx-[115px] md:mx-[115px] mb-4 lg:mx-[80px] xl:mx-[100px] 2xl:mx-[109px]">
                        <div className="flex items-center">
                            <Image src="/images/star_eight2.png" width={35} height={35} alt="figma" className="mr-[5px]" />
                            <p className="text-[20px]">AWARDS</p>
                        </div>
                        <span className={goblin_One.className}>
                            <p className="mt-[10px]">2022.06 한성대학교 캡스톤디자인 작품 발표회 우수상</p>
                            <p className="mt-[10px]">2020.12 이브와 여성ICT 멘토링 입선</p>
                            <p className="mt-[10px]">2020.02 한성대학교 High Success Project 대상</p>
                            <p className="mt-[10px]">2019.07 한성대학교 High Success Project 우수상</p>
                        </span>
                    </div>
                    <div className="ml-[80px] mb-4 mr-[105px] sm:mr-[180px] md:mr-[180px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[90px]">
                        <div className="flex items-center">
                            <Image src="/images/star_eight2.png" width={35} height={35} alt="figma" className="mr-[5px]" />
                            <p className="text-[20px]">EXPERIENCE</p>
                        </div>
                        <span className={goblin_One.className}>
                            <p className="mt-[10px]">2023.03~ 엔스마트솔루션 연구원</p>
                            <p className="mt-[10px]">2022.09~2022.12 펄어비스 QA 인턴</p>
                            <p className="mt-[10px]">2021.05~2021.12 엔스마트솔루션 인턴</p>
                        </span>
                    </div>
                </div>
            </div>

            <></>
        </>
    );
}
