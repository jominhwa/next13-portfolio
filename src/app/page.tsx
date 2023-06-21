import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex justify-center">
                <p className="relative inline-block text-[65px] text-center sm:text-[84px] md:text-[103px] lg:text-[141px] xl:text-[178px] xl:leading-[215px] 2xl:text-[216px] 2xl:leading-[200px] pointer-events-none">
                    portfolio
                    <span className="absolute right-[-30px] top-[5px] lg:top-[10px] xl:top-[-10px] 2xl:top-[-30px]">
                        <Image
                            src="/images/star_four.png"
                            width={108}
                            height={108}
                            alt="star_four"
                            className="w-[40px] sm:w-[45px] md:w-[55px] lg:w-[70px] xl:w-[80px] 2xl:w-[85px]"
                        />
                    </span>
                    <span className="absolute left-[-30px] top-[100px] sm:top-[150px] md:top-[200px] lg:top-[230px] xl:top-[240px] 2xl:top-[250px]">
                        <Image src="/images/star_eight.png" width={245} height={249} alt="star_eight" />
                    </span>
                    <span className="absolute right-[-30px] top-[305px]">
                        <Image src="/images/bluestar_eight.png" width={500} height={500} alt="bluestar_eight" />
                    </span>
                </p>
            </div>
            <p className="ml-[200px] text-[17px] text-center sm:ml-[255px] sm:text-[22px] md:ml-[300px] md:text-[27px] lg:ml-[438px] lg:text-[36px] xl:ml-[550px] xl:text-[45px] 2xl:ml-[658px] 2xl:text-[55px]">
                front-end developer
            </p>
            <div className="mb-[565px] sm:mb-[520px] md:mb-[520px] lg:mb-[426px] xl:mb-[400px] 2xl:mb-[380px]"></div>
            <div className="flex flex-wrap justify-center relative">
                <span className="ml-[5px] mt-[20px] md:mt-[8px] lg:mt-[30px] xl:mt-[40px] 2xl:mt-[60px]">
                    <div className="border-[2px] border-black my-5"></div>
                    <p className="text-[13px] xl:text-[17px] 2xl:text-[21px]">
                        ©2023 JoMinhwa.All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </span>
                <span className="md:mx-[20px] lg:mx-[20px] xl:mx-[20px] 2xl:mx-[20px]"></span>

                <p className="mr-[5px] text-[49px] md:text-[42px] lg:text-[75px] xl:text-[88px] 2xl:text-[110px]">JoMinhwa</p>
            </div>
        </>
    );
}
