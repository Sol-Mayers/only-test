import { SwiperClass } from "swiper/react";
import { ItemDataProps } from "../types";

export type CircleMenuProps = {
    menuRef: React.RefObject<HTMLUListElement>;
    slides: ItemDataProps[];
    controlledSwiper: SwiperClass | null;
    activeIndex: number;
};
