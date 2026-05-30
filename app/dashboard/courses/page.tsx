'use client';

import { Book, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MyCourses() {
  const courses = [
    {
      id: "hsc-2026",
      title: "HSC Physics Master Batch 2026",
      instructor: "Zahidul Islam",
      progress: 45,
      nextClass: "Thermodynamics Part 1 - Today 8:00 PM"
    },
    {
      id: "admission-2025",
      title: "Engineering Admission Physics",
      instructor: "Zahidul Islam",
      progress: 60,
      nextClass: "Mechanics - Tomorrow 7:00 PM"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center sm:hidden">
          <h1 className="text-2xl font-heading font-bold text-gray-900">My Courses</h1>
      </div>
      <div className="grid gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 bg-blue-50 p-6 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-gray-100">
                <Book className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                   <Users className="w-4 h-4" /> Instructor: {course.instructor}
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">{course.progress}% Completed</p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Next Upcoming Class</h4>
                    <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-3 border border-gray-100 mb-6">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                             <Clock className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-medium text-gray-900">{course.nextClass}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link
                       href={`/dashboard/courses/${course.id}`}
                       className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
                    >
                        Go to Classroom
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
