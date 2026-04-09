import React from 'react';
import { FileText, Download, TrendingUp } from 'lucide-react';

const nirfData = [
  { year: "2026", academicYear: "2024-25", file: "/documents/nirf/2026.pdf" },
  { year: "2025", academicYear: "2023-24", file: "/documents/nirf/2025.pdf" },
  { year: "2024", academicYear: "2022-23", file: "/documents/nirf/2024.pdf" },
  { year: "2023", academicYear: "2021-22", file: "/documents/nirf/2023.pdf" },
];

const NIRFPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8 border-b pb-4">
          <TrendingUp className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">NIRF (National Institutional Ranking Framework)</h1>
        </div>

        <div className="space-y-4">
          {nirfData.map((item) => (
            <div key={item.year} className="bg-[#FFF8F0] border border-orange-100 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-orange-900">NIRF {item.year}</h3>
                <p className="text-gray-600">Academic Year: {item.academicYear}</p>
                <button 
                  onClick={() => window.open(item.file, '_blank')}
                  className="mt-4 flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium"
                >
                  <Download size={16} />
                  Download NIRF Data
                </button>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Available
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NIRFPage;
