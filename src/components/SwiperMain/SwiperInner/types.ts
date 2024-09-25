import { ItemDataProps } from "../types";

export type InnerDataProps = {
    item: Pick<ItemDataProps, "events">;
};
