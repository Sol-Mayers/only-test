export const datesCounterPrev = (
    a: number,
    b: number,
    setNumber: (item: number) => void
) => {
    let i = setInterval(() => {
        setNumber(a--);
        if (a < b) clearInterval(i);
    }, 50);
};
