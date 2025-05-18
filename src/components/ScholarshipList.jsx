import { useEffect, useState } from "react";
import SearchFilters from "./SearchFilters";
import ScholarshipCard from "./ScholarshipCard";
import { listings } from "../data/listings";

export default function ScholarshipList() {
    const [filtered, setFiltered] = useState(listings);

    const handleFilter = ({ kw, co, dep }) => {
        const kwLower = kw.toLowerCase();
        setFiltered(listings.filter(l => {
            const matchKw = kwLower === "" || (
                l.title.toLowerCase().includes(kwLower) ||
                l.description.toLowerCase().includes(kwLower)
            );
            const matchCo = co === "all" || l.cohorts.includes(co);
            const matchDep = dep === "all" || l.departments.includes(dep);
            return matchKw && matchCo && matchDep;
        }));
    };

    useEffect(() => handleFilter({ kw: "", co: "all", dep: "all" }), []);

    return (
        <div>
            <SearchFilters onFilter={handleFilter} />
            {filtered.length === 0 && <p className="text-center text-gray-500">Không tìm thấy kết quả.</p>}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(item => <ScholarshipCard key={item.id} item={item} />)}
            </div>
        </div>
    );
}