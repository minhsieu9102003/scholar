import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Flash from "./Flash";

export default function ApplyModal({ open, onClose, listingTitle }) {
    const [flash, setFlash] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        setFlash("Đã nộp thành công!");
        setTimeout(() => onClose(), 3000);
    };
    return (
        <Dialog open={open} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Panel className="bg-white p-6 rounded shadow max-w-md w-full">
                <Dialog.Title className="text-lg font-semibold mb-4">Apply – {listingTitle}</Dialog.Title>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input required placeholder="Mã SV" className="border rounded w-full p-2" />
                    <input required placeholder="Họ tên" className="border rounded w-full p-2" />
                    <input required placeholder="Email" type="email" className="border rounded w-full p-2" />
                    <textarea placeholder="Lý do / Ghi chú" className="border rounded w-full p-2" rows={3} />
                    <button type="submit" className="bg-indigo-600 text-white w-full py-2 rounded">Submit</button>
                </form>
                {flash && <Flash msg={flash} />}
            </Dialog.Panel>
        </Dialog>
    );
}