import React from 'react';
import { Download, Info } from 'lucide-react';

const nirfDocuments = [
  { year: "2026", academic: "2024-25", file: "/documents/nirf/2026.pdf" }, // [cite: 3, 6]
  { year: "2025", academic: "2023-24", file: "/documents/nirf/2025.pdf" }, // [cite: 254, 256]
  { year: "2024", academic: "2022-23", file: "/documents/nirf/2024.pdf" }, // [cite: 192, 194]
  { year: "2023", academic: "2021-22", file: "/documents/nirf/2023.pdf" }, // [cite: 78, 80]
];

const NirfPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8 border-b pb-4">
        <Info className="text-blue-600 w-6 h-6" />
        <h1 className="text-3xl font-bold text-gray-900">NIRF Disclosures</h1>
      </div>

      <div className="grid gap-6">
        {nirfDocuments.map((doc) => (
          <div key={doc.year} className="bg-orange-50 border border-orange-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-xl font-bold text-orange-900">NIRF {doc.year}</h2>
              <p className="text-orange-700">Academic Year: {doc.academic}</p>
              <a 
                href={doc.file} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-shadow shadow-sm"
              >
                <Download size={16} />
                Download NIRF Data
              </a>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Available
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-semibold text-blue-900 mb-2">Institutional Highlights</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Valid NAAC Accreditation (CGPA 2.91) until April 2028. [cite: 57, 310]</li>
          <li>• Infrastructure equipped with Ramps and specialized facilities for physically challenged students. [cite: 50, 51, 180]</li>
        </ul>
      </div>
    </div>
  );
};

export default NirfPage;
