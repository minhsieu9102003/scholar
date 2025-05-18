import { useState } from "react";
import Flash from "./Flash";

export default function FeedbackBox({ onAdd }) {
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const [flash, setFlash] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!msg.trim()) return;
        const fb = {
            id: Date.now(),
            name: name || "Ẩn danh",
            message: msg,
            date: new Date().toISOString().slice(0, 10),
        };
        onAdd(fb);
        setMsg("");
        setFlash("Đã gửi phản hồi!");
    };

    return (
        <div className="my-6">
            <h4 className="font-semibold mb-2">Gửi feedback</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên (tuỳ chọn)"
                    className="border rounded w-full p-2"
                />
                <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Nhập nhận xét…"
                    className="border rounded w-full p-3"
                    rows={4}
                />
                <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded">
                    Gửi
                </button>
            </form>
            {flash && <Flash msg={flash} />}
        </div>
    );
}