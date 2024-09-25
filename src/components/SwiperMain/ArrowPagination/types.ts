import { ItemDataProps } from "../types";

export type ArrowPaginationProps = {
    current: number;
    total: number;
    onClickPrev: () => void;
    onClickNext: () => void;
    activeIndex: number;
    data: ItemDataProps[];
};
