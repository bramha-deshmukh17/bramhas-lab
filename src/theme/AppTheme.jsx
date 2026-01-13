import { useEffect } from "react";

export function useAppTheme(appName) {
    useEffect(() => {
        if (!appName) return;

        document.documentElement.setAttribute("data-app", appName);

        return () => {
            document.documentElement.removeAttribute("data-app");
        };
    }, [appName]);
}
