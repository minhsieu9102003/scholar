import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScholarshipList from "./components/ScholarshipList";
import ScholarshipDetail from "./components/ScholarshipDetail";
import StudentTable from "./components/StudentTable";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ScholarshipList />} />
          <Route path="/listing/:id" element={<ScholarshipDetail />} />
          <Route path="/listing/:id/students" element={<StudentTable />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </div>
  );
}