'use client';

import { useParams } from 'next/navigation';
import { Video, FileText, CheckSquare, MessageSquare, Play } from 'lucide-react';
import Link from 'next/link';

export default function Classroom() {
  const { id } = useParams();

  const tabs = [
    { name: 'Live Classes', icon: Video, active: true },
    { name: 'Recordings', icon: Play, active: false },
    { name: 'Notes & Materials', icon: FileText, active: false },
    { name: 'Assignments', icon: CheckSquare, active: false },
    { name: 'Discussion Forum', icon: MessageSquare, active: false },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
               Active Batch
            </div>
            <h1 className="text-2xl font-heading font-bold text-gray-900">HSC Physics Master Batch 2026</h1>
            <p className="text-gray-500 mt-1">Instructor: Zahidul Islam</p>
         </div>
      </div>

       <div className="flex overflow-x-auto pb-2 border-b border-gray-200">
         <div className="flex space-x-8 px-2">
            {tabs.map((tab) => (
                <button
                   key={tab.name}
                   className={`flex items-center gap-2 pb-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                      tab.active ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                   }`}
                >
                   <tab.icon className="w-4 h-4" />
                   {tab.name}
                </button>
            ))}
         </div>
      </div>

       <div className="grid gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
             <h2 className="font-heading font-semibold text-lg text-gray-900 mb-6">Upcoming Classes</h2>
             
             <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 justify-between items-center">
                 <div className="flex gap-4 items-start w-full md:w-auto">
                    <div className="w-14 h-14 bg-white text-blue-600 shadow-sm rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold uppercase text-gray-500">Today</span>
                        <span className="text-lg font-bold leading-none mt-1">8:00</span>
                    </div>
                     <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Thermodynamics Part 1</h4>
                        <p className="text-gray-500 text-sm mt-1">Chapter 1: Heat and Temperature</p>
                    </div>
                 </div>
                 <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-sm animate-pulse">
                     Join via Google Meet
                 </button>
             </div>
          </div>
       </div>

    </div>
  );
}
