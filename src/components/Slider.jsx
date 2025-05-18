import { useState } from "react";
export default function Slider({ imgs }) {
    const [idx, setIdx] = useState(0);
    if (!imgs.length) return null;
    return (
        <div className="relative">
            <img src={imgs[idx]} className="w-full aspect-video object-cover rounded" />
            <button onClick={() => setIdx((idx - 1 + imgs.length) % imgs.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded">‹</button>
            <button onClick={() => setIdx((idx + 1) % imgs.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded">›</button>
        </div>
    );
}