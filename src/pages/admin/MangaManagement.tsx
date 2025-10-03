import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Star,
  Filter,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AddMangaDialog } from "@/components/AddMangaDialog";
import { EditMangaDialog } from "@/components/EditMangaDialog";
import { useToast } from "@/hooks/use-toast";

const mangaData = [
  {
    id: 1,
    title: "Attack on Titan",
    author: "Hajime Isayama",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    chapters: 139,
    rating: 4.9,
    views: "2.1M",
    status: "Completed",
    genre: ["Action", "Drama", "Fantasy"],
    publishedAt: "2023-04-09"
  },
  {
    id: 2,
    title: "One Piece",
    author: "Eiichiro Oda",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    chapters: 1095,
    rating: 4.8,
    views: "5.2M",
    status: "Ongoing",
    genre: ["Adventure", "Comedy", "Action"],
    publishedAt: "1997-07-22"
  },
  {
    id: 3,
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    chapters: 205,
    rating: 4.7,
    views: "3.8M",
    status: "Completed",
    genre: ["Action", "Supernatural", "Historical"],
    publishedAt: "2020-05-18"
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    chapters: 245,
    rating: 4.6,
    views: "2.9M",
    status: "Ongoing",
    genre: ["Action", "Supernatural", "School"],
    publishedAt: "2018-03-05"
  }
];

export function MangaManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDelete = (manga: any) => {
    toast({
      title: "Manga Deleted",
      description: `"${manga.title}" has been deleted successfully.`,
      variant: "destructive",
    });
  };

  const handleViewDetails = (manga: any) => {
    toast({
      title: "View Details",
      description: `Opening details for "${manga.title}".`,
    });
  };

  const handleManageChapters = (manga: any) => {
    navigate(`/admin/chapters?manga=${manga.id}`);
  };

  const filteredManga = mangaData.filter(manga => {
    const matchesSearch = manga.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manga.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || manga.status.toLowerCase() === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Manga Management</h1>
          <p className="text-muted-foreground">Manage your manga collection and content.</p>
        </div>
        <AddMangaDialog />
      </div>

      {/* Filters and Search */}
      <Card className="admin-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search manga or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Filter className="h-4 w-4" />
                  <span className="hidden xs:inline">Status:</span> {selectedStatus === "all" ? "All" : selectedStatus}
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
        </CardContent>
      </Card>

      {/* Manga Grid */}
      <div className="manga-grid">
        {filteredManga.map((manga, index) => (
          <Card key={manga.id} className="admin-card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-0">
              {/* Cover Image */}
              <div className="relative h-48 bg-secondary/30 overflow-hidden">
                <img
                  src={manga.cover}
                  alt={manga.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="gap-2" onClick={() => handleViewDetails(manga)}>
                        <Eye className="h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <EditMangaDialog 
                        manga={manga}
                        trigger={
                          <DropdownMenuItem className="gap-2" onSelect={(e) => e.preventDefault()}>
                            <Edit className="h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                        }
                      />
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem className="gap-2 text-destructive" onSelect={(e) => e.preventDefault()}>
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Manga</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{manga.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(manga)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant={manga.status === "Ongoing" ? "default" : "secondary"}>
                    {manga.status}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{manga.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">by {manga.author}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{manga.rating}</span>
                  </div>
                  <span className="text-muted-foreground">{manga.chapters} chapters</span>
                  <span className="text-muted-foreground">{manga.views}</span>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {manga.genre.slice(0, 2).map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                  {manga.genre.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{manga.genre.length - 2}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <EditMangaDialog 
                    manga={manga}
                    trigger={
                      <Button variant="secondary" size="sm" className="flex-1 gap-1">
                        <Edit className="h-3 w-3" />
                        Edit
                      </Button>
                    }
                  />
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex-1 gap-1"
                    onClick={() => handleManageChapters(manga)}
                  >
                    <BookOpen className="h-3 w-3" />
                    Chapters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredManga.length === 0 && (
        <Card className="admin-card">
          <CardContent className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No manga found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search criteria" : "Get started by adding your first manga"}
            </p>
            <AddMangaDialog />
          </CardContent>
        </Card>
      )}
    </div>
  );
}