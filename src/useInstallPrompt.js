import { useState, useEffect } from "react";

const useInstallPrompt = () => {
    const [promptEvent, setPromptEvent] = useState(null);

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    useEffect(() => {
        const onPrompt = (e) => {
            e.preventDefault();
            setPromptEvent(e);
        }
        const onInstalled = () => setPromptEvent(null);

        window.addEventListener('beforeinstallprompt', onPrompt);
        window.addEventListener("appinstalled", onInstalled);
        return () => {
            window.removeEventListener('beforeinstallprompt', onPrompt);
            window.removeEventListener("appinstalled", onInstalled);
        }
    }, [])

    const install = async () => {
        if (!promptEvent) return;
        promptEvent.prompt();
        await promptEvent.userChoice; 
        setPromptEvent(null);
    };

    return { canInstall: !!promptEvent && !isStandalone, install }
};

export default useInstallPrompt;