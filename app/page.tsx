import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle, Presentation, Users, Video } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-blue-50/50 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Master Physics with <span className="text-blue-600">Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Live Classes, Recorded Lessons, Smart Exams, Structured Learning. Join thousands of students achieving their dream scores in HSC and University Admissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/register"
                className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                Join a Batch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses"
                className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium shadow-sm hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Physics With Zahid
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A complete ecosystem designed to make physics intuitive, engaging, and score-boosting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Presentation, title: "Live Interactive Classes", desc: "Ask questions in real-time. Classes are conducted via Google Meet/Zoom for ultimate interactivity." },
              { icon: Video, title: "Recorded Lessons", desc: "Missed a class? Watch high-quality recordings anytime, anywhere with playback speed control." },
              { icon: BookOpen, title: "Structured Notes", desc: "Get access to comprehensive PDF notes, formula sheets, and chapter-wise suggestions." },
              { icon: CheckCircle, title: "Smart Exams", desc: "Take timed MCQ and CQ exams with instant result generation and performance tracking." },
              { icon: Users, title: "Direct Support", desc: "Dedicated discussion forums and direct teacher support to clear your doubts instantly." },
              { icon: ArrowRight, title: "Performance Tracking", desc: "Detailed analytics of your exam scores, assignment submissions, and attendance." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 overflow-hidden text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
           <div>
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading font-bold text-xl text-white">
                  Physics With Zahid
                </span>
              </div>
              <p className="text-sm max-w-xs">Connecting dots in Physics for SSC, HSC, and Admission candidates in Bangladesh.</p>
           </div>
           <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Instructor</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Student Login</Link></li>
              </ul>
           </div>
           <div>
             <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: support@physicswithzahid.com</li>
                <li>WhatsApp: +880 1XXX XXXXXX</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
           </div>
        </div>
      </footer>
    </main>
  );
}
