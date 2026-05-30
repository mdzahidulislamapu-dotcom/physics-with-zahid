'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { LayoutDashboard, Book, Calendar, Video, FileText, CheckSquare, BarChart, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUserData({
            name: session.user.user_metadata?.full_name || session.user.email,
            role: session.user.user_metadata?.role || 'student'
          });
          setLoading(false);
        } else {
          router.push('/login');
        }
      } catch(e) {
         router.push('/login');
      }
    };

    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
         router.push('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const sidebarLinks = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/courses', label: 'My Courses', icon: Book },
    { href: '/dashboard/live', label: 'Live Classes', icon: Calendar },
    { href: '/dashboard/recordings', label: 'Recordings', icon: Video },
    { href: '/dashboard/notes', label: 'Notes', icon: FileText },
    { href: '/dashboard/assignments', label: 'Assignments', icon: CheckSquare },
    { href: '/dashboard/exams', label: 'Exams', icon: BarChart },
    { href: '/dashboard/forum', label: 'Discussion Forum', icon: MessageSquare },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0">
         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-xl">
                 {userData?.name?.charAt(0)?.toUpperCase() || 'U'}
             </div>
             <div>
                 <h3 className="font-semibold text-gray-900 truncate max-w-[120px]">{userData?.name || 'Student'}</h3>
                 <p className="text-xs text-gray-500 capitalize">{userData?.role || 'student'}</p>
             </div>
         </div>
         <nav className="space-y-1">
          {sidebarLinks.map((link) => {
             const isActive = pathname === link.href;
             return (
               <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <link.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                {link.label}
              </Link>
             )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
