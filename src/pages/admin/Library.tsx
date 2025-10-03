import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Library as LibraryIcon,
  Search,
  Filter,
  Grid3X3,
  List,
  BookOpen,
  Star,
  Eye,
  Calendar,
  Download,
  Archive
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const libraryData = [
  {
    id: 1,
    title: "Attack on Titan",
    author: "Hajime Isayama",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    status: "Completed",
    rating: 4.9,
    totalChapters: 139,
    totalViews: "2.1M",
    lastUpdated: "2021-04-09",
    genre: ["Action", "Drama", "Fantasy"],
    fileSize: "2.1 GB",
    downloads: "456K"
  },
  {
    id: 2,
    title: "One Piece",
    author: "Eiichiro Oda",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    status: "Ongoing",
    rating: 4.8,
    totalChapters: 1095,
    totalViews: "5.2M",
    lastUpdated: "2024-01-15",
    genre: ["Adventure", "Comedy", "Action"],
    fileSize: "8.9 GB",
    downloads: "1.2M"
  },
  {
    id: 3,
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    status: "Completed",
    rating: 4.7,
    totalChapters: 205,
    totalViews: "3.8M",
    lastUpdated: "2020-05-18",
    genre: ["Action", "Supernatural", "Historical"],
    fileSize: "3.2 GB",
    downloads: "892K"
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    status: "Ongoing",
    rating: 4.6,
    totalChapters: 245,
    totalViews: "2.9M",
    lastUpdated: "2024-01-10",
    genre: ["Action", "Supernatural", "School"],
    fileSize: "4.1 GB",
    downloads: "623K"
  }
];

export function Library() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredLibrary = libraryData.filter(manga => {
    const matchesSearch = manga.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manga.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || manga.status.toLowerCase() === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Digital Library</h1>
          <p className="text-muted-foreground">Browse and manage your complete manga collection.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Archive className="h-4 w-4" />
            Archive
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Backup Library
          </Button>
        </div>
      </div>

      {/* Library Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">1,247</p>
          <p className="text-sm text-muted-foreground">Total Manga</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-accent/20 text-accent">
              <LibraryIcon className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">45,678</p>
          <p className="text-sm text-muted-foreground">Total Chapters</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
              <Download className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">156.7 GB</p>
          <p className="text-sm text-muted-foreground">Storage Used</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Eye className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">12.5M</p>
          <p className="text-sm text-muted-foreground">Total Views</p>
        </div>
      </div>

      {/* Filters and Controls */}
      <Card className="admin-card">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search library..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Status: {selectedStatus === "all" ? "All" : selectedStatus}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedStatus("all")}>
                    All Status
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedStatus("ongoing")}>
                    Ongoing
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedStatus("completed")}>
                    Completed
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Library Content */}
      {viewMode === "grid" ? (
        <div className="manga-grid">
          {filteredLibrary.map((manga, index) => (
            <Card key={manga.id} className="admin-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="relative h-48 bg-secondary/30 overflow-hidden">
                  <img
                    src={manga.cover}
                    alt={manga.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={manga.status === "Ongoing" ? "default" : "secondary"}>
                      {manga.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{manga.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {manga.author}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{manga.totalChapters} chapters</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{manga.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{manga.totalViews}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      <span>{manga.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>Size: {manga.fileSize}</span>
                    <span>Updated: {formatDate(manga.lastUpdated)}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {manga.genre.slice(0, 2).map((genre) => (
                      <Badge key={genre} variant="outline" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="admin-card">
          <CardHeader>
            <CardTitle>Library Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredLibrary.map((manga, index) => (
                <div key={manga.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center gap-4">
                    <img
                      src={manga.cover}
                      alt={manga.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium text-foreground">{manga.title}</h4>
                      <p className="text-sm text-muted-foreground">by {manga.author}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{manga.totalChapters} chapters</span>
                        <span>{manga.totalViews} views</span>
                        <span>{manga.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{manga.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Updated {formatDate(manga.lastUpdated)}
                      </p>
                    </div>
                    <Badge variant={manga.status === "Ongoing" ? "default" : "secondary"}>
                      {manga.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}