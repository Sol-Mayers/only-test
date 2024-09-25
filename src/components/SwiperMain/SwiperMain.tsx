import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import {
    Controller,
    EffectFade,
    Pagination,
    EffectCreative,
} from "swiper/modules";
import { slides } from "./data/slides";
import { ArrowPagination } from "./ArrowPagination/ArrowPagination";
import { SwiperInner } from "./SwiperInner/SwiperInner";
import { datesCounterNext } from "./helpers/datesCounterNext";
import { datesCounterPrev } from "./helpers/datesCounterPrev";
import "./SwiperMain.scss";
import { CircleMenu } from "./CircleMenu/CircleMenu";
import { SwiperTitle } from "./SwiperTitle/SwiperTitle";

export const SwiperMain = () => {
    const [controlledSwiper, setControlledSwiper] =
        useState<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [fromToDate, setFromToDate] = useState<[number, number]>([0, 0]);
    const [from, setFrom] = useState<number>(slides[0].dates[0]);
    const [to, setTo] = useState<number>(slides[0].dates[1]);

    const handleClickPrev = () => controlledSwiper!.slidePrev();
    const handleClickNext = () => controlledSwiper!.slideNext();

    const handleSlideChange = () => {
        setActiveIndex(controlledSwiper?.activeIndex || 0);
    };

    useEffect(() => {
        setFromToDate(slides[activeIndex].dates);
        if (controlledSwiper?.activeIndex! > controlledSwiper?.previousIndex!) {
            datesCounterNext(
                slides[controlledSwiper?.previousIndex!].dates[0] + 1,
                slides[activeIndex].dates[0],
                setFrom
            );
            datesCounterNext(
                fromToDate[1] + 1,
                slides[activeIndex].dates[1],
                setTo
            );
        } else if (
            controlledSwiper?.activeIndex! < controlledSwiper?.previousIndex!
        ) {
            datesCounterPrev(
                fromToDate[0] - 1,
                slides[activeIndex].dates[0],
                setFrom
            );
            datesCounterPrev(
                fromToDate[1] - 1,
                slides[activeIndex].dates[1],
                setTo
            );
        }
    }, [activeIndex]);

    let menuRef = useRef<HTMLUListElement>(null);

    return (
        <div className="main-wrapper">
            <SwiperTitle from={from} to={to} slides={slides} />
            <Swiper
                modules={[Controller, Pagination, EffectFade, EffectCreative]}
                controller={{ control: controlledSwiper }}
                onSwiper={setControlledSwiper}
                onSlideChange={handleSlideChange}
                pagination={{
                    el: ".swiper-pagination-custom",
                    type: "bullets",
                    clickable: true,
                }}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        translate: [0, "100%", 0],
                        opacity: 0,
                    },
                    next: {
                        translate: [0, "100%", 0],
                        opacity: 0,
                    },
                }}
                speed={300}
                allowTouchMove={false}
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="slide-content-wrapper">
                            <div className="slide-content-date-wrapper">
                                <h2 className="slide-content-date-text-title">
                                    {item.title}
                                </h2>
                                <div className="date-title-linethrough"></div>
                            </div>
                            <SwiperInner item={item} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="pagination-wrapper">
                <div className="swiper-pagination-custom"></div>
            </div>
            <ArrowPagination
                current={activeIndex + 1}
                total={slides.length}
                onClickPrev={handleClickPrev}
                onClickNext={handleClickNext}
                activeIndex={activeIndex}
                data={slides}
            />
            <CircleMenu
                menuRef={menuRef}
                slides={slides}
                controlledSwiper={controlledSwiper}
                activeIndex={activeIndex}
            />
            <div className="circle-text">{slides[activeIndex].title}</div>
        </div>
    );
};
