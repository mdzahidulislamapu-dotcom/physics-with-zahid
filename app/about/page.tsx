import { BookOpen, MapPin, Mail, Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="h-48 bg-blue-600 relative">
                 <div className="absolute inset-0 bg-blue-500/20 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent)]" />
             </div>
             
             <div className="px-8 pb-12">
                 <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-end -mt-16 sm:-mt-24 mb-8">
                      <div className="w-32 h-32 sm:w-48 sm:h-48 bg-white p-2 rounded-2xl shadow-md flex-shrink-0">
                           <div className="w-full h-full bg-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                                 {/* Placeholder for actual image */}
                                 <span className="text-4xl font-heading font-bold text-blue-300">Z</span>
                           </div>
                      </div>
                      <div className="flex-1 pb-4">
                          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Zahidul Islam</h1>
                          <p className="text-lg text-gray-600 mb-4">Physics Instructor & Educator</p>
                          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
                               <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Dhaka, Bangladesh</div>
                               <div className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> B.Sc in Physics, DU</div>
                          </div>
                      </div>
                      <div className="pb-4">
                          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition w-full sm:w-auto">
                              Follow
                          </button>
                      </div>
                 </div>

                 <div className="space-y-12">
                     <section>
                         <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                             <BookOpen className="w-6 h-6 text-blue-600" /> My Teaching Philosophy
                         </h2>
                         <p className="text-gray-600 leading-relaxed">
                             Physics isn't about memorizing formulas; it's about understanding how the universe works. My goal is to break down complex phenomena into digestible, logical steps so that every student can feel confident approaching even the hardest problems. I believe in interactive learning, practical examples, and rigorous practice.
                         </p>
                     </section>
                     
                      <section>
                         <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                             <Award className="w-6 h-6 text-blue-600" /> Academic Achievements
                         </h2>
                         <ul className="space-y-4">
                             {[
                                "B.Sc (Honors) and M.Sc in Physics from University of Dhaka",
                                "Over 5+ years of teaching experience with HSC and Admission candidates.",
                                "Helped 1000+ students secure positions in top engineering universities.",
                                "Author of comprehensive physics study materials and formula sheets."
                             ].map((achievement, idx) => (
                                 <li key={idx} className="flex gap-3 text-gray-600">
                                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                     <span>{achievement}</span>
                                 </li>
                             ))}
                         </ul>
                     </section>
                 </div>
             </div>
        </div>
      </div>
    </main>
  );
}
