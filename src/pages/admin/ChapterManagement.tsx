import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Upload,
  Download,
  MoreVertical,
  Calendar,
  User,
  Clock
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddChapterDialog } from "@/components/AddChapterDialog";
import { BulkUploadDialog } from "@/components/BulkUploadDialog";

const chaptersData = [
  {
    id: 1,
    number: 139,
    title: "Final Chapter: Toward the Tree on That Hill",
    manga: "Attack on Titan",
    pages: 45,
    status: "Published",
    publishedAt: "2021-04-09",
    views: "1.2M",
    uploadedBy: "Admin",
    fileSize: "15.2 MB"
  },
  {
    id: 2,
    number: 1095,
    title: "The Celestial Dragon's Pet",
    manga: "One Piece",
    pages: 17,
    status: "Published",
    publishedAt: "2023-11-27",
    views: "890K",
    uploadedBy: "Editor",
    fileSize: "8.9 MB"
  },
  {
    id: 3,
    number: 246,
    title: "Cursed Technique Reversal",
    manga: "Jujutsu Kaisen",
    pages: 19,
    status: "Draft",
    publishedAt: null,
    views: "0",
    uploadedBy: "Admin",
    fileSize: "12.4 MB"
  },
  {
    id: 4,
    number: 205,
    title: "Life Shining Across the Years",
    manga: "Demon Slayer",
    pages: 23,
    status: "Published",
    publishedAt: "2020-05-18",
    views: "2.1M",
    uploadedBy: "Admin",
    fileSize: "18.7 MB"
  }
];

export function ChapterManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredChapters = chaptersData.filter(chapter => {
    const matchesSearch = chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chapter.manga.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || chapter.status.toLowerCase() === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not published";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Chapter Management</h1>
          <p className="text-muted-foreground">Manage chapters across all manga series.</p>
        </div>
        <div className="flex gap-3">
          <BulkUploadDialog />
          <AddChapterDialog />
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="admin-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search chapters or manga..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    <FileText className="h-4 w-4" />
                    <span className="hidden xs:inline">Status:</span> {selectedStatus === "all" ? "All" : selectedStatus}
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedStatus("all")}>
                  All Status
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("published")}>
                  Published
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("draft")}>
                  Draft
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Chapters List */}
      <div className="chapter-list">
        {filteredChapters.map((chapter, index) => (
          <div key={chapter.id} className="chapter-item animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-start gap-4 flex-1">
              {/* Chapter Number */}
              <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">#{chapter.number}</span>
              </div>

              {/* Chapter Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground line-clamp-1">{chapter.title}</h3>
                    <p className="text-sm text-muted-foreground">{chapter.manga}</p>
                  </div>
                  <Badge variant={chapter.status === "Published" ? "default" : "secondary"}>
                    {chapter.status}
                  </Badge>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>{chapter.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>{chapter.views}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(chapter.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{chapter.uploadedBy}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span>Size: {chapter.fileSize}</span>
                  {chapter.publishedAt && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Published {formatDate(chapter.publishedAt)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-4 sm:mt-0">
              <Button variant="secondary" size="sm" className="gap-1 w-full sm:w-auto">
                <Eye className="h-3 w-3" />
                <span className="hidden xs:inline">Preview</span>
                <span className="xs:hidden">View</span>
              </Button>
              <Button variant="secondary" size="sm" className="gap-1 w-full sm:w-auto">
                <Download className="h-3 w-3" />
                <span className="hidden xs:inline">Download</span>
                <span className="xs:hidden">Get</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Chapter
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Upload className="h-4 w-4" />
                    Replace File
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 text-destructive">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredChapters.length === 0 && (
        <Card className="admin-card">
          <CardContent className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No chapters found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search criteria" : "Start by uploading your first chapter"}
            </p>
            <AddChapterDialog />
          </CardContent>
        </Card>
      )}
    </div>
  );
}