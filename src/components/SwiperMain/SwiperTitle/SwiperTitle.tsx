import React, { FC } from "react";
import "./SwiperTitle.scss";
import { SwiperTitleProps } from "./types";

export const SwiperTitle: FC<SwiperTitleProps> = ({ from, to, slides }) => {
    return (
        <>
            <h1 className="swiper-title">
                Исторические <br />
                даты
            </h1>
            <div className="slide-content-date-title">
                <div className="date-title-from">
                    {from || slides[0].dates[0]}
                </div>
                <div className="date-title-to">{to || slides[0].dates[1]}</div>
            </div>
        </>
    );
};
