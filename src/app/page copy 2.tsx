import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex justify-center">
                <p className="text-[65px] text-center sm:text-[84px] md:text-[103px] lg:text-[141px] xl:text-[178px] xl:leading-[215px] 2xl:text-[216px] 2xl:leading-[200px] bg-red-200 relative inline-block">
                    portfolio
                    <span className="absolute right-[-20px] top-[-50px]">
                        <Image src="/images/star_four.png" width={108} height={108} alt="star_four" />
                    </span>
                </p>
            </div>
            <div className="bg-red-200">
                {/* <div className="absolute w-[30px] mb-[60px] ml-[430px] sm:w-[40px] sm:mb-[70px] sm:ml-[560px] md:w-[48px] md:mb-[90px] md:ml-[690px] lg:w-[60px] lg:mb-[130px] lg:ml-[940px] xl:w-[70px] xl:mb-[150px] xl:ml-[1180px] 2xl:w-[88px] 2xl:mb-[175px] 2xl:ml-[1440px] ">
                    <Image src="/images/star_four.png" width={108} height={108} alt="star_four" />
                </div> */}
            </div>
            <p className="ml-[200px] text-[17px] text-center sm:ml-[255px] sm:text-[22px] md:ml-[300px] md:text-[27px] lg:ml-[438px] lg:text-[36px] xl:ml-[550px] xl:text-[45px] 2xl:ml-[658px] 2xl:text-[55px]">
                front-end developer
            </p>
            <Image src="/images/star_eight.png" width={245} height={249} alt="star_eight" />
            <Image src="/images/bluestar_eight.png" width={617} height={615} alt="bluestar_eight" />
        </>
    );
}
