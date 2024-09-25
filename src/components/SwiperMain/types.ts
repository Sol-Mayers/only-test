export type ItemDataProps = {
    dates: [number, number];
    id: number;
    title: string;
    events: EventDataProps[];
};

export type EventDataProps = { date: number; description: string };
