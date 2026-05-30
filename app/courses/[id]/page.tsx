'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, Users, ArrowRight, CheckCircle2, Calendar, BookOpen, Video } from 'lucide-react';

export default function CourseDetails() {
  const { id } = useParams();
  const courseId = (id as string) || "hsc-2026";

  // Mock data as requested
  const getCourse = (courseIdStr: string) => {
      const courses = [
        {
          id: "hsc-2026",
          title: "HSC Physics Master Batch 2026",
          description: "Full syllabus coverage with weekly exams, live interactive classes, and detailed PDF notes for HSC 2026 candidates.",
          instructor: "Zahidul Islam",
          duration: "12 Months",
          fee: "৳ 5,000",
          features: ["Live Classes via Zoom", "Recorded Lectures", "Weekly CQ & MCQ Exams", "PDF Lecture Notes"],
          schedule: "Sat, Mon, Wed (8:00 PM)"
        },
        // other courses...
      ];
      return courses.find(c => c.id === courseIdStr) || courses[0];
  }

  const course = getCourse(courseId);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
             {/* Main Content */}
             <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
                      <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                         Physics Master Batch
                      </div>
                      <h1 className="font-heading text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                         {course.title}
                      </h1>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                         {course.description}
                      </p>
                      
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-100 mb-8">
                          <div>
                              <p className="text-sm font-medium text-gray-500 mb-1">Duration</p>
                              <p className="font-semibold text-gray-900 flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-blue-600" /> {course.duration}
                              </p>
                          </div>
                          <div>
                              <p className="text-sm font-medium text-gray-500 mb-1">Schedule</p>
                              <p className="font-semibold text-gray-900 flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-blue-600" /> {course.schedule}
                              </p>
                          </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500 mb-1">Instructor</p>
                              <p className="font-semibold text-gray-900 flex items-center gap-2">
                                  <Users className="w-4 h-4 text-blue-600" /> Zahidul Islam
                              </p>
                          </div>
                           <div>
                              <p className="text-sm font-medium text-gray-500 mb-1">Format</p>
                              <p className="font-semibold text-gray-900 flex items-center gap-2">
                                  <Video className="w-4 h-4 text-blue-600" /> Live + Recorded
                              </p>
                          </div>
                      </div>

                      <div>
                          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">What you will learn</h3>
                          <div className="grid sm:grid-cols-2 gap-4">
                              {course.features.map((feature, idx) => (
                                 <div key={idx} className="flex gap-3 text-gray-700">
                                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                      <span>{feature}</span>
                                 </div>
                              ))}
                          </div>
                      </div>
                  </div>
             </div>

             {/* Sidebar */}
             <div className="lg:col-span-1">
                 <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
                     <div className="mb-6">
                         <p className="text-sm font-medium text-gray-500 mb-2">Course Fee</p>
                         <div className="flex items-end gap-2">
                             <h2 className="text-4xl font-bold text-gray-900">{course.fee}</h2>
                             <span className="text-gray-500 mb-1">BDT</span>
                         </div>
                     </div>
                     <div className="space-y-4">
                         <Link
                            href={`/register?course=${course.id}`}
                            className="bg-blue-600 text-white w-full py-4 rounded-xl text-center font-medium hover:bg-blue-700 transition block text-lg shadow-md"
                         >
                            Enroll Now
                         </Link>
                         <p className="text-center text-sm text-gray-500">
                            Secure payment via bKash, Nagad, or Cards.
                         </p>
                     </div>
                 </div>
             </div>
          </div>
      </div>
    </main>
  );
}
