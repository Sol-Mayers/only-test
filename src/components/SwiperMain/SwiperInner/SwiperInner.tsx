import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/free-mode";
import { FreeMode } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import { InnerDataProps } from "./types";
import "./SwiperInner.scss";

export const SwiperInner: FC<InnerDataProps> = ({ item }) => {
    return (
        <Swiper
            className="mySwiper2"
            modules={[FreeMode]}
            freeMode={true}
            slidesPerView={1.3}
            breakpoints={{
                1024: {
                    slidesPerView: 3.5,
                },
            }}
        >
            <div className="slide-content-inner-wrapper">
                {item.events.map((evItem) => (
                    <SwiperSlide key={uuidv4()}>
                        <div className="slide-content-description">
                            <h2 className="slide-content-date">
                                {evItem.date}
                            </h2>
                            <p className="slide-content-text">
                                {evItem.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
};
