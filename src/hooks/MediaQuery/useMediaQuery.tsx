import { useState, useEffect } from "react"

const mq = (size: string) => {
    return window.matchMedia(size).matches;
}

export const useMediaQuery = (query: string) => {

    const [isMatched, setIsMatched] = useState<boolean>(mq(query));

    const resize = () => setIsMatched(mq(query));

    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    });

    return isMatched;
}