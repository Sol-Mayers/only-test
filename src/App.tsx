import { hot } from "react-hot-loader";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import "swiper/scss/free-mode";
import { Controller, EffectFade, FreeMode, Pagination } from "swiper/modules";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import { slides } from "./components/SwiperMain/data/slides";
import { SwiperMain } from "./components/SwiperMain/SwiperMain";

const App = () => {
    return <SwiperMain />;
};

export default hot(module)(App);
