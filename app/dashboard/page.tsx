'use client';

import { Play, FileText, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Learning Progress</p>
                  <h3 className="text-3xl font-bold text-gray-900">45%</h3>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
          </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Attendance Rate</p>
                  <h3 className="text-3xl font-bold text-gray-900">92%</h3>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-4">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
          </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Average Exam Score</p>
                  <h3 className="text-3xl font-bold text-gray-900">88/100</h3>
              </div>
               <div className="flex items-center text-sm text-green-600 font-medium mt-4">
                  Top 15% of Batch
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Upcoming Classes */}
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                 <h2 className="font-heading font-semibold text-lg text-gray-900">Upcoming Classes</h2>
                 <Link href="/dashboard/live" className="text-sm text-blue-600 font-medium hover:underline">View All</Link>
             </div>
             <div className="p-6 space-y-4">
                 {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold uppercase">Oct</span>
                            <span className="text-base font-bold leading-none">1{i}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 truncate">Thermodynamics Part {i}</h4>
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                <Clock className="w-3.5 h-3.5" /> 8:00 PM - 10:00 PM
                            </p>
                        </div>
                        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700">Join</button>
                    </div>
                 ))}
             </div>
         </div>

          {/* Pending Assignments */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                 <h2 className="font-heading font-semibold text-lg text-gray-900">Pending Assignments</h2>
                 <Link href="/dashboard/assignments" className="text-sm text-blue-600 font-medium hover:underline">View All</Link>
             </div>
             <div className="p-6 space-y-4">
                 {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                        <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                             <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 truncate">Chapter {i} Math Problem Set</h4>
                            <p className="text-sm text-red-500 flex items-center gap-1 mt-1 font-medium">
                                Due in {i} days
                            </p>
                        </div>
                        <button className="border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-50">Upload</button>
                    </div>
                 ))}
             </div>
         </div>
      </div>
    </div>
  );
}
