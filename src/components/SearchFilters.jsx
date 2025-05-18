import { useState } from "react";
const cohorts = ["K69", "K68", "K67", "K66", "K65", "K64"];
const departments = [
    "Trường CNTT và Truyền Thông",
    "Trường Hóa và Sự Sống",
    "Trường Sinh Học Sự Sống",
    "Trường Điện-Điện Tử",
    "Trường Cơ Khí",
    "Việc Dệt - May",
    "Ngành Vật lí Hạt Nhân",
    "Ngành Vật Liệu",
    "Ngành Kinh Tế",
    "Ngành Giáo dục",
];
export default function SearchFilters({ onFilter }) {
    const [kw, setKw] = useState("");
    const [co, setCo] = useState("all");
    const [dep, setDep] = useState("all");

    return (
        <div className="flex flex-wrap gap-4 mb-6">
            <input value={kw} onChange={e => setKw(e.target.value)} placeholder="Tìm kiếm..." className="flex-1 border rounded p-2" />
            <select value={co} onChange={e => setCo(e.target.value)} className="border rounded p-2">
                <option value="all">Khóa</option>{cohorts.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={dep} onChange={e => setDep(e.target.value)} className="border rounded p-2">
                <option value="all">Ngành / Trường</option>{departments.map(d => <option key={d}>{d}</option>)}
            </select>
            <button onClick={() => onFilter({ kw, co, dep })} className="bg-indigo-600 text-white px-4 py-2 rounded">Lọc</button>
        </div>
    );
}