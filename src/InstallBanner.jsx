import { useState, useEffect } from "react";
import useInstallPrompt from "./useInstallPrompt";
import { X } from "lucide-react";

const InstallBanner = () => {
    const { canInstall, install } = useInstallPrompt();
    const [waited, setWaited] = useState(false);
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setWaited(true), 10000);
        return () => clearTimeout(timer);
    }, [])

    if (!canInstall || !waited || closed) return null;

    return (
        <div className="fixed inset-x-3 top-3 z-50 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-black/5">
            <img src="/pwa-192x192.png" alt="icon" className="h-12 w-12 rounded-xl" />
            <div className="flex-1">
                <p className="plus-jakarta-sans-medium text-md">Install Quotr</p>
                <p className="plus-jakarta-sans text-sm text-slate-500">usequotr.vercel.app</p>
            </div>
            <button onClick={install} className="plus-jakarta-sans-extrabold text-red-900">Install</button>
            <button onClick={() => setClosed(true)} aria-label="Dismiss" className="px-1 text-slate-400"><X className="h-5 w-5" strokeWidth={2.5} /></button>
        </div>
    )
};

export default InstallBanner;