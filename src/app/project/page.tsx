"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Project() {
    const [activeDiv, setActiveDiv] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

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
            img: "/images/project_buildingtalks.png",
            title: "building talks",
            subtitle: "건물 관리를 위한 회의 솔루션",
            summary: "건물 관리 회의에 필요한 문서 보관과 실시간 판서 및 투표 솔루션이다.",
            skill: "#Angular #TypeScript #SCSS #Node.js #MongoDB #AWS #Ngnix #Git #Figma",
        },
        {
            id: 2,
            img: "/images/project_ghrkservice.png",
            title: "GHRK Service",
            subtitle: "블록체인 기반 비대면 업무 플랫폼",
            summary: "글로벌 협업을 위한 비대면 업무 및 보안 서류 관리 하이퍼레저 블록체인 기반 플랫폼이다.",
            skill: "#Angular #TypeScript #SCSS #Node.js #MongoDB #AWS #Linux #Git",
        },
        {
            id: 3,
            img: "/images/project_potatocs.png",
            title: "potatocs",
            subtitle: "다양한 기능으로 원활한 팀 소통을 도와주는 협업툴",
            summary: "작업 솔루션, 근태 관리 솔루션, 보안 솔루션을 합쳐 업무 생산성을 극대화해주는 협업툴이다.",
            skill: "#Angular #SCSS #Git #Figma",
        },
        {
            id: 4,
            img: "/images/project_irounfarm.png",
            title: "이로운농장",
            subtitle: "농장 기후 상태 실시간 모니터링과 데이터 수집 시스템",
            summary:
                "이로운 농장은 녹각영지버섯을 인공재배 하는데 있어 센서를 통해 기후 데이터 수집, 실시간 기후 상태를 모니터링하고 임계값에 따라 알림을 보내주는 시스템이다.",
            skill: "#Next.js #tailwind #Git #Figma",
        },
        {
            id: 5,
            img: "/images/project_prodytalk.png",
            title: "ProdyTalk",
            subtitle: "WebRTC 기반 화상채팅 프로젝트/스터디 플랫폼",
            summary:
                "화상채팅과 동시에 프로젝트, 스터디를 진행하며 팀원들과 진행 상황과 일정을 공유할 수 있고 플래너, 캘린더 등을 통한 자기개발을 가능하게 함으로써 기존 화상회의와 차별성을 둔 플랫폼이다.",
            skill: "#React #CSS #SpringBoot #MySQL #WebRTC #OpenVidu #Docker #AWS #Git",
        },
        {
            id: 6,
            img: "/images/project_kurento.png",
            title: "Kurento",
            subtitle: "Kurento를 이용한 화상회의 콘텐츠",
            summary: "방 별로 여러 사람들과 화상회의를 할 수 있는 콘텐츠이다.",
            skill: "#Javascrip #CSS #Node.js #WebRTC #Kurento #AWS #Git",
        },
        {
            id: 7,
            img: "/images/project_noshinestar.png",
            title: "빛나지 않는 별",
            subtitle: "한국항행학회 논문게재",
            summary: "어린 입원 환자들을 위한 증강현실 체험 동화 콘텐츠를 연구 및 개발했다.",
            skill: "#Unity3D #C# #Vuforia #MagicaVoxel",
        },
        {
            id: 8,
            img: "/images/project_chemistryadventure.png",
            title: "Chemistry Adventure",
            subtitle: "슈팅 게임과 화학을 접목시킨 융합체험형 VR게임 콘텐츠",
            summary:
                "화학반응 과정을 배우는 융합체험형 VR 게임을 통해 일상 속에서 발생하는 화학 반응과 실제로 실험하기에는 위험한 화학 반응을 안전하게 체험할 수 있는 콘텐츠이다.",
            skill: "#Unity3D #C# #Oculus rift S #3D MAX",
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
                                    <Image src={item.img} alt="project" width={850} height={630} quality={100} className="w-[900px]" />
                                </div>
                                <div className="min-w-[480px] max-w-[480px]  mx-[5%] mt-[50px] lg:mt-[140px] xl:mt-[140px] 2xl:mt-[140px]">
                                    <p className="font-bold text-[54px] text-right mb-[10px]">{item.title}</p>
                                    <p className="text-right mb-[20px]">{item.subtitle}</p>
                                    <p className="text-right">{item.summary}</p>
                                    <p className="text-right mt-[30px]">{item.skill}</p>
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <Image
                                            src={isHovered ? "/images/circle2_hover.png" : "/images/circle2.png"}
                                            width={240}
                                            height={70}
                                            alt="circle"
                                            className="mt-[40px] lg:mt-[150px] xl:mt-[150px] 2xl:mt-[150px] ml-[250px] cursor-pointer"
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
