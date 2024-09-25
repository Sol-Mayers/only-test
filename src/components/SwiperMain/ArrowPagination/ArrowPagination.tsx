import React, { FC } from "react";
import { ArrowPaginationProps } from "./types";
import "./ArrowPagination.scss";
import { rotateTheRound } from "../helpers/rotateTheRound";

export const ArrowPagination: FC<ArrowPaginationProps> = ({
    current,
    total,
    activeIndex,
    data,
    onClickPrev,
    onClickNext,
}) => {
    return (
        <div className="arrow-pagination">
            <div className="arrow-pagination-label">
                0{current} / 0{total}
            </div>
            <button
                className="nav-button nav-prev"
                style={{
                    borderColor:
                        activeIndex === 0
                            ? "rgba(66, 86, 122, 0.3)"
                            : "#42567a80",
                }}
                disabled={activeIndex === 0 ? true : false}
                type="button"
                onClick={() => {
                    onClickPrev();
                }}
            ></button>
            <button
                className="nav-button nav-next"
                style={{
                    borderColor:
                        activeIndex === data.length - 1
                            ? "rgba(66, 86, 122, 0.3)"
                            : "#42567a80",
                }}
                disabled={activeIndex === data.length - 1 ? true : false}
                type="button"
                onClick={() => {
                    onClickNext();
                }}
            ></button>
        </div>
    );
};
