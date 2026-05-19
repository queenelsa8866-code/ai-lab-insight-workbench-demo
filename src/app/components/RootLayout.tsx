import { Outlet, Link, useLocation } from "react-router";
import { Zap, Menu, FileText, Brain, Target, Package, Database, Link as LinkIcon, RotateCcw, MessageSquare } from "lucide-react";

const navItems = [
  { path: "/featured", icon: Zap, label: "精选情报" },
  { path: "/stream", icon: Menu, label: "全部信息动态" },
  { path: "/daily", icon: FileText, label: "日报" },
  { path: "/insight-workbench", icon: Brain, label: "需求洞察工作台" },
  { path: "/insights", icon: Target, label: "洞察结果" },
  { path: "/strategies", icon: Package, label: "策略输出" },
  { path: "/sources", icon: Database, label: "信息源管理" },
];

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="font-bold text-lg">AI Lab 调研台</h1>
          <p className="text-sm text-gray-600 mt-1">信息搜集与需求洞察</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || (location.pathname === "/" && item.path === "/featured");
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-1">
          <Link
            to="/source-submit"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LinkIcon className="w-5 h-5" />
            <span>信源提报</span>
          </Link>
          <Link
            to="/changelog"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            <span>更新日志</span>
          </Link>
          <Link
            to="/feedback"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span>反馈</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
