export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const el = document.getElementById(id);

    if (el) {
        const targetPosition = el.offsetTop - 64; // Adjust for navbar height
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
};
