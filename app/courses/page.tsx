import Link from 'next/link';
import { Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CoursesCatalog() {
  const courses = [
    {
      id: "hsc-2026",
      title: "HSC Physics Master Batch 2026",
      description: "Full syllabus coverage with weekly exams, live interactive classes, and detailed PDF notes for HSC 2026 candidates.",
      instructor: "Zahidul Islam",
      duration: "12 Months",
      fee: "৳ 5,000",
      features: ["Live Classes via Zoom", "Recorded Lectures", "Weekly CQ & MCQ Exams", "PDF Lecture Notes"]
    },
    {
      id: "admission-2025",
      title: "Engineering Admission Physics",
      description: "Targeted preparation for BUET, RUET, KUET, CUET, and other engineering universities. Intensive problem-solving focus.",
      instructor: "Zahidul Islam",
      duration: "5 Months",
      fee: "৳ 4,000",
      features: ["Advanced Problem Solving", "Previous Year Question Banks", "Mock Tests", "Shortcut Techniques"]
    },
    {
      id: "ssc-2025",
      title: "SSC Physics Foundation Batch",
      description: "Build a strong foundation in physics for SSC 2025. Clear concepts and board question solving.",
      instructor: "Zahidul Islam",
      duration: "8 Months",
      fee: "৳ 3,000",
      features: ["Basic Concept Building", "Chapter-wise CQ Practice", "Board Question Analysis", "Special Care for Weak Students"]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right batch to achieve your academic goals. Learn from the best and master physics concepts easily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
               <div className="p-8 border-b border-gray-100 flex-1">
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">{course.title}</h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" /> By {course.instructor}
                      </div>
                  </div>

                  <ul className="space-y-3">
                      {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                              {feature}
                          </li>
                      ))}
                  </ul>
               </div>
               <div className="p-8 bg-gray-50 flex items-center justify-between mt-auto">
                  <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Course Fee</p>
                      <p className="text-2xl font-bold text-gray-900">{course.fee}</p>
                  </div>
                  <Link
                      href={`/register?course=${course.id}`}
                      className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                  >
                      Enroll Now
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
