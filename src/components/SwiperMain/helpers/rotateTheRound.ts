export const rotateTheRound = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>,
    menuRef: React.RefObject<HTMLUListElement>
) => {
    const target = event.target as HTMLElement;
    const styles = getComputedStyle(target.parentNode as HTMLElement);
    const transform = styles.getPropertyValue("transform");

    const values = transform.split("(")[1].split(")")[0].split(",");
    const a = Number(values[0]);
    const b = Number(values[1]);

    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    switch (angle) {
        case 0:
            menuRef.current!.style.transform = "scale(1.6) rotate(85deg)";
            break;
        case 60:
            menuRef.current!.style.transform = "scale(1.6) rotate(25deg)";
            break;
        case 120:
            menuRef.current!.style.transform = "scale(1.6) rotate(-35deg)";
            break;
        case 180:
            menuRef.current!.style.transform = "scale(1.6) rotate(-95deg)";
            break;
        case -120:
            menuRef.current!.style.transform = "scale(1.6) rotate(205deg)";
            break;
        case -60:
            menuRef.current!.style.transform = "scale(1.6) rotate(145deg)";
            break;
        default:
            break;
    }
};
