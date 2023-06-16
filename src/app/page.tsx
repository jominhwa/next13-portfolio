import Image from "next/image";

export default function Home() {
    return (
        <>
            <p className="text-[65px] text-center sm:text-[84px] md:text-[103px] lg:text-[141px] xl:text-[178px] xl:leading-[215px] 2xl:text-[216px] 2xl:leading-[200px] bg-red-200 ">
                portfolio
            </p>
            <p className="ml-[200px] text-[17px] text-center sm:ml-[255px] sm:text-[22px] md:ml-[300px] md:text-[27px] lg:ml-[438px] lg:text-[36px] xl:ml-[550px] xl:text-[45px] 2xl:ml-[658px] 2xl:text-[55px]">
                front-end developer
            </p>
            <div className="mb-[110px]">
                <Image src="/images/star_eight.png" width={245} height={249} alt="star_eight" />
            </div>
            <div className="flex flex-wrap justify-center">
                <span className="inline mt-[20px] xl:mt-[50px] 2xl:mt-[60px] ml-[5px]">
                    <div className="border-[2px] border-black my-5"></div>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[21px]">
                        ©2023 JoMinhwa.All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </span>
                <span className="mx-[20px]"></span>
                <p className="inline mr-[5px] text-[68px] xl:text-[80px] 2xl:text-[110px]">JoMinhwa</p>
            </div>

            {/* <div className="relative">
                <div className="absolute">
                    <Image src="/images/star_four.png" width={108} height={108} alt="star_four" />
                </div>
                <div className="absolute">
                    <Image src="/images/star_eight.png" width={245} height={249} alt="star_eight" />
                </div>
                <div className="absolute">
                    <Image src="/images/bluestar_eight.png" width={617} height={615} alt="bluestar_eight" />
                </div>
            </div> */}
        </>
    );
}
