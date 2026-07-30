import Link from "next/link";
import { LayoutDashboard, LogOut, Briefcase, Settings } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0">
        <div className="p-6 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">Z</div>
            <span className="font-bold text-slate-900">Admin Panel</span>
          </Link>
        </div>
        <nav className="p-4 flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Portafolio
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Configuraciones
          </Link>
          <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 font-medium transition-colors mt-4">
            <LogOut className="w-5 h-5" />
            Volver a la Web
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
