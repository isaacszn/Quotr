import { useState } from "react";
import { Copy } from "lucide-react";

const ScriptureCard = (props) => {
    const [copied, setCopied] = useState(false);

    const scriptureReference = props.reference;
    const preview = props.preview;
    const fullScripture = props.full_scripture;

    // function to copy Scripture reference
    const handleCopy = () => {
        if (scriptureReference) {
            navigator.clipboard.writeText(scriptureReference);
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 1000 * 3);
        }
    }

    return (
        <section className="plus-jakarta-sans text-gray-900 border border-gray-300 mx-auto px-6 py-5 bg-yellow-100 transition w-[90%] lg:text-lg">
            <div className="flex justify-between items-center mb-2">
                <div className="cormorant-garamond-bold text-3xl font-bold">{ scriptureReference }</div>
                <button className="flex justify-center items-center gap-1 cursor-pointer hover:text-gray-800/95">
                    <Copy />
                    <span className="transition" onClick={handleCopy}>{ copied ? 'Copied!' : 'Copy' }</span>
                </button>
            </div>

            <div className="cormorant-garamond-medium text-lg mb-3">
                { preview }
            </div>

            <div className="plus-jakarta-sans-medium text-red-800">
                <button className="cursor-pointer underline hover:text-red-800/95">Read full Scripture</button>
            </div>
        </section>
    );
};

export default ScriptureCard;
