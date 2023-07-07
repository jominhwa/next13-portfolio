"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Project() {
    const [activeDiv, setActiveDiv] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDiv((prevDiv) => (prevDiv + 1) % 3);
        }, 5000); // 3초마다 div를 전환

        return () => {
            clearInterval(interval);
        };
    }, []);

    const divContents: any = [
        {
            id: 1,
            img: "/images/project_iroun_farm.png",
            title: "이로운농장",
            subtitle: "재배사 기후 데이터 분석, 모니터링, 경보 시스템",
            summary:
                "이로운 농장은 녹각영지버섯을 인공재배 하는데 있어 센서를 통해 기후 데이터 수집, 실시간 기후 상태를 모니터링하고 임계값에 따라 알림을 보내주는 시스템이다.",
            skill: "#Next.js #NestJs #MongoDB #tailwind #Figma #Git #AWS",
        },
        {
            id: 2,
            img: "/images/project_iroun_farm.png",
            title: "ProdyTalk",
            subtitle: "WebRTC 기반 화상채팅 프로젝트/스터디 플랫폼",
            summary:
                "화상채팅과 동시에 프로젝트, 스터디를 진행하며 팀원들과 진행 상황과 일정을 공유할 수 있고 플래너, 캘린더 등을 통한 자기개발을 가능하게 함으로써 기존 화상회의와 차별성을 둔 플랫폼이다.",
            skill: "#React #SpringBoot #MySQL #WebRTC #OpenVidu #Docker #Git #AWS",
        },
        {
            id: 3,
            img: "/images/project_iroun_farm.png",
            title: "Kurento",
            subtitle: "재배사 기후 데이터 분석, 모니터링, 경보 시스템",
            summary:
                "이로운 농장은 녹각영지버섯을 인공재배 하는데 있어 센서를 통해 기후 데이터 수집, 실시간 기후 상태를 모니터링하고 임계값에 따라 알림을 보내주는 시스템이다.",
            skill: "#React #SpringBoot #MySQL #WebRTC #OpenVidu #Docker #Git #AWS",
        },
    ];

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <div>
                <Slider {...sliderSettings}>
                    {divContents.map((item: any) => (
                        <div key={item.id}>
                            <div className="flex justify-center flex-wrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap">
                                <div className="flex items-center mt-[40px] lg:my-[60px] lg:h-[650px] xl:my-[60px] xl:h-[650px] 2xl:my-[60px] 2xl:h-[650px]">
                                    <Image src={item.img} width={1000} height={740} alt="project" className="w-[850px]" />
                                </div>
                                <div className="min-w-[480px] max-w-[480px]  mx-[5%] mt-[50px] lg:mt-[140px] xl:mt-[140px] 2xl:mt-[140px]">
                                    <p className="font-bold text-[54px] text-right mb-[10px]">{item.title}</p>
                                    <p className="text-right mb-[20px]">{item.subtitle}</p>
                                    <p className="text-right">{item.summary}</p>
                                    <p className="text-right mt-[30px]">{item.skill}</p>
                                    <div className="relative">
                                        <Image
                                            src="/images/circle2.png"
                                            width={233}
                                            height={70}
                                            alt="circle"
                                            className="mt-[40px] lg:mt-[150px] xl:mt-[150px] 2xl:mt-[150px] ml-[250px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
