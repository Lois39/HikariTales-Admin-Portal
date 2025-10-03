import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  Settings,
  BarChart3,
  Menu,
  X,
  Library,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Manga", url: "/admin/manga", icon: BookOpen },
  { title: "Chapters", url: "/admin/chapters", icon: FileText },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Library", url: "/admin/library", icon: Library },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

interface AdminSidebarProps {
  className?: string;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export function AdminSidebar({ className, isCollapsed = false, onToggle }: AdminSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <>
      {/* Mobile Menu Button */}
     <Button
  variant="ghost"
  size="icon"
  onClick={() => setIsMobileOpen(true)}
  className={cn("fixed top-1/2 left-4 z-40 md:hidden bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-sm border border-border/50 shadow-lg -translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.4)]", isMobileOpen && "hidden")}
>
  <Menu className="h-5 w-5" />
</Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300",
          // Mobile: slide in from left
          "md:translate-x-0 md:z-30",
          isMobileOpen ? "translate-x-0 z-50 w-52" : "-translate-x-full z-50",
          // Desktop: collapsible width
          isCollapsed ? "md:w-16" : "md:w-64",
          className
        )}
      >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className={cn("flex items-center gap-2", isCollapsed && "md:justify-center")}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src="/mangalogo.png"
                alt="HikariTales Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            {!isCollapsed && (
              <div className="hidden md:block">
                <h2 className="font-bold text-foreground">HikariTales</h2>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="p-2 hidden md:flex"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileOpen(false)}
              className="p-2 md:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
           const isItemActive = isActive(item.url);

           return (
             <NavLink
               key={item.title}
               to={item.url}
               onClick={() => setIsMobileOpen(false)}
               className={cn(
                 "nav-item group",
                 isItemActive && "active"
               )}
             >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className={cn("flex-1 transition-opacity", isCollapsed && "md:hidden")}>
                {item.title}
              </span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform opacity-0 group-hover:opacity-100",
                  isItemActive && "opacity-100",
                  isCollapsed && "md:hidden"
                )}
              />
            </NavLink>
          );
        })}
      </nav>

      {/* User Info */}
      <div className={cn("absolute bottom-4 left-4 right-4", isCollapsed && "md:hidden")}>
        <div className="admin-card p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-accent rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-accent-foreground">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">admin@manga.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}