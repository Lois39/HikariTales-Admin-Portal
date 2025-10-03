import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  FileText,
  TrendingUp,
  Eye,
  Star,
  Download,
  Activity
} from "lucide-react";
import { AddMangaDialog } from "@/components/AddMangaDialog";
import { AddChapterDialog } from "@/components/AddChapterDialog";
import { AddUserDialog } from "@/components/AddUserDialog";
import { useNavigate } from "react-router-dom";

const statsData = [
  {
    title: "Total Manga",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: BookOpen,
    color: "text-primary"
  },
  {
    title: "Active Users",
    value: "89,234",
    change: "+18%",
    trend: "up",
    icon: Users,
    color: "text-accent"
  },
  {
    title: "Chapters",
    value: "45,678",
    change: "+24%",
    trend: "up",
    icon: FileText,
    color: "text-primary-glow"
  },
  {
    title: "Monthly Views",
    value: "2.1M",
    change: "+8%",
    trend: "up",
    icon: Eye,
    color: "text-accent"
  }
];

const recentManga = [
  {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    chapters: 139,
    rating: 4.9,
    status: "Completed"
  },
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    chapters: 1095,
    rating: 4.8,
    status: "Ongoing"
  },
  {
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    chapters: 205,
    rating: 4.7,
    status: "Completed"
  },
  {
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    chapters: 245,
    rating: 4.6,
    status: "Ongoing"
  }
];

export function Dashboard() {
  const navigate = useNavigate();

  const handleExportData = () => {
    // Create CSV export
    const csvData = [
      ['Metric', 'Value', 'Change'],
      ['Total Manga', '1,247', '+12%'],
      ['Active Users', '89,234', '+18%'],
      ['Chapters', '45,678', '+24%'],
      ['Monthly Views', '2.1M', '+8%']
    ];
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dashboard-export.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your manga platform.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2" onClick={handleExportData}>
            <Download className="h-4 w-4" />
            Export Data
          </Button>
          <Button className="gradient-primary gap-2" onClick={() => navigate('/admin/analytics')}>
            <Activity className="h-4 w-4" />
            View Analytics
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div key={stat.title} className="stat-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-secondary/50 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Manga */}
        <div className="lg:col-span-2">
          <Card className="admin-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Recent Manga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentManga.map((manga, index) => (
                  <div key={manga.title} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{manga.title}</h4>
                      <p className="text-sm text-muted-foreground">by {manga.author}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{manga.chapters} chapters</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-foreground">{manga.rating}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        manga.status === 'Ongoing' 
                          ? 'bg-green-400/10 text-green-400' 
                          : 'bg-blue-400/10 text-blue-400'
                      }`}>
                        {manga.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card className="admin-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <AddMangaDialog 
                trigger={
                  <Button className="w-full justify-start gap-2" variant="secondary">
                    <BookOpen className="h-4 w-4" />
                    Add New Manga
                  </Button>
                }
              />
              <AddChapterDialog 
                trigger={
                  <Button className="w-full justify-start gap-2" variant="secondary">
                    <FileText className="h-4 w-4" />
                    Upload Chapter
                  </Button>
                }
              />
              <Button 
                className="w-full justify-start gap-2" 
                variant="secondary"
                onClick={() => navigate('/admin/users')}
              >
                <Users className="h-4 w-4" />
                Manage Users
              </Button>
              <Button 
                className="w-full justify-start gap-2" 
                variant="secondary"
                onClick={() => navigate('/admin/analytics')}
              >
                <TrendingUp className="h-4 w-4" />
                View Reports
              </Button>
            </CardContent>
          </Card>

          <Card className="admin-card">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Server Status</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Database</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">CDN</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Storage</span>
                <span className="text-sm text-foreground">78% used</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}