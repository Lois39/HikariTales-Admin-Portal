import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Download,
  Calendar,
  BookOpen,
  Clock,
  Star,
  Activity
} from "lucide-react";

const analyticsData = {
  overview: [
    {
      title: "Total Views",
      value: "12.5M",
      change: "+23%",
      trend: "up",
      icon: Eye,
      color: "text-blue-400"
    },
    {
      title: "Active Readers",
      value: "89.2K",
      change: "+18%",
      trend: "up", 
      icon: Users,
      color: "text-green-400"
    },
    {
      title: "Reading Time",
      value: "4.2hrs",
      change: "+12%",
      trend: "up",
      icon: Clock,
      color: "text-purple-400"
    },
    {
      title: "Avg Rating",
      value: "4.6/5",
      change: "+0.2",
      trend: "up",
      icon: Star,
      color: "text-yellow-400"
    }
  ],
  topManga: [
    { title: "One Piece", views: "2.1M", rating: 4.8, chapters: 1095 },
    { title: "Attack on Titan", views: "1.8M", rating: 4.9, chapters: 139 },
    { title: "Demon Slayer", views: "1.5M", rating: 4.7, chapters: 205 },
    { title: "Jujutsu Kaisen", views: "1.2M", rating: 4.6, chapters: 245 },
    { title: "My Hero Academia", views: "1.0M", rating: 4.5, chapters: 403 }
  ],
  readerStats: [
    { metric: "Daily Active Users", value: "34,567", change: "+12%" },
    { metric: "Weekly Active Users", value: "156,890", change: "+8%" },
    { metric: "Monthly Active Users", value: "489,234", change: "+15%" },
    { metric: "Average Session Duration", value: "28 mins", change: "+5%" },
    { metric: "Pages per Session", value: "45", change: "+7%" },
    { metric: "Return Rate", value: "68%", change: "+3%" }
  ]
};

export function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track performance and user engagement across your manga platform.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.overview.map((stat, index) => (
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

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performing Manga */}
        <div className="lg:col-span-2">
          <Card className="admin-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Top Performing Manga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topManga.map((manga, index) => (
                  <div key={manga.title} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{manga.title}</h4>
                        <p className="text-sm text-muted-foreground">{manga.chapters} chapters</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <p className="font-medium text-foreground">{manga.views}</p>
                        <p className="text-muted-foreground">views</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-foreground">{manga.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reader Statistics */}
        <div>
          <Card className="admin-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-accent" />
                Reader Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analyticsData.readerStats.map((stat, index) => (
                <div key={stat.metric} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.metric}</p>
                  </div>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <Card className="admin-card">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Direct</span>
                <span className="text-sm font-medium text-foreground">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Search</span>
                <span className="text-sm font-medium text-foreground">32%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Social</span>
                <span className="text-sm font-medium text-foreground">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Referral</span>
                <span className="text-sm font-medium text-foreground">8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Device Usage */}
        <Card className="admin-card">
          <CardHeader>
            <CardTitle>Device Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Mobile</span>
                <span className="text-sm font-medium text-foreground">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Desktop</span>
                <span className="text-sm font-medium text-foreground">24%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tablet</span>
                <span className="text-sm font-medium text-foreground">8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Performance */}
        <Card className="admin-card">
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Chapters</span>
                <span className="text-sm font-medium text-foreground">45,678</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg. Rating</span>
                <span className="text-sm font-medium text-foreground">4.6/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Completion Rate</span>
                <span className="text-sm font-medium text-foreground">73%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Bookmarks</span>
                <span className="text-sm font-medium text-foreground">234K</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}