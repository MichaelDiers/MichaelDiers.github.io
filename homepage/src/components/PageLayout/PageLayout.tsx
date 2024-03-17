import { useEffect } from "react";
import { Outlet, useMatches } from "react-router"
import IPageHandle from "../../types/IPageHandle";

export function PageLayout() {
    let matches = useMatches();
    useEffect(() => {
        const title = (matches.find((match) => match.handle)?.handle as IPageHandle)?.title;
        document.title = title;
    }, [matches]);
    return (
        <>
            <header></header>
            <nav></nav>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
}