import { useParams, Link } from "react-router-dom";
import { listings } from "../data/listings";
import { feedbacks } from "../data/feedbacks";
import Slider from "./Slider";
import { useState } from "react";
import ApplyModal from "./ApplyModal";
import FeedbackBox from "./FeedbackBox";

export default function ScholarshipDetail() {
    const { id } = useParams();
    const item = listings.find((l) => l.id === Number(id));
    const [open, setOpen] = useState(false);
    const [fbList, setFbList] = useState(feedbacks[id] ? [...feedbacks[id]] : []);

    const handleAddFeedback = (fb) => setFbList((prev) => [fb, ...prev]);

    if (!item) return <p>Không tìm thấy!</p>;

    return (
        <div className="space-y-4">
            <Slider imgs={item.images} />
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p>
                <strong>{item.type === "scholarship" ? "Giá trị" : "Lương"}:</strong>{" "}
                {item.amount.toLocaleString()} {item.unit}
            </p>
            <p>
                <strong>Khóa:</strong> {item.cohorts.join(", ")}
            </p>
            <p>
                <strong>Ngành:</strong> {item.departments.join(", ")}
            </p>
            <p className="whitespace-pre-line">{item.description}</p>
            <button onClick={() => setOpen(true)} className="bg-indigo-600 text-white px-6 py-2 rounded">
                Apply
            </button>
            <Link to={`/listing/${item.id}/students`} className="ml-4 text-indigo-600 underline">
                Xem sinh viên đã nhận
            </Link>

            <ApplyModal open={open} onClose={() => setOpen(false)} listingTitle={item.title} />

            {/* Form gửi feedback */}
            <FeedbackBox onAdd={handleAddFeedback} />

            {/* Danh sách feedback */}
            {fbList.length > 0 && (
                <div className="space-y-2">
                    <h4 className="font-semibold">Feedback đã gửi</h4>
                    {fbList.map((fb) => (
                        <div key={fb.id} className="border rounded p-3 bg-gray-50">
                            <p className="text-sm text-gray-700">{fb.message}</p>
                            <p className="text-xs text-gray-500 mt-1">
                                — {fb.name} • {fb.date}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}