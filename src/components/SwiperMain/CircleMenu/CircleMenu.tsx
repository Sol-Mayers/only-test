import React, { FC } from "react";
import { rotateTheRound } from "../helpers/rotateTheRound";
import "./CircleMenu.scss";
import { CircleMenuProps } from "./types";

export const CircleMenu: FC<CircleMenuProps> = ({
    menuRef,
    slides,
    controlledSwiper,
    activeIndex,
}) => {
    return (
        <nav className="circle-menu">
            <ul
                id="menu"
                ref={menuRef}
                onClick={(e) => rotateTheRound(e, menuRef)}
            >
                {slides.map((item) => (
                    <li key={item.id} className="circle-item">
                        <div
                            onClick={() => {
                                controlledSwiper?.slideTo(item.id - 1);
                            }}
                        >
                            <span
                                className={
                                    item.id - 1 === activeIndex
                                        ? "circle active-item"
                                        : "circle"
                                }
                            >
                                {item.id}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
