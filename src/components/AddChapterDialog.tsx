import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, FileText, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddChapterDialogProps {
  trigger?: React.ReactNode;
}

export function AddChapterDialog({ trigger }: AddChapterDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Chapter Added",
      description: "New chapter has been successfully uploaded.",
    });
    
    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gradient-primary gap-2">
            <Plus className="h-4 w-4" />
            Add Chapter
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Add New Chapter
          </DialogTitle>
          <DialogDescription>
            Upload a new chapter to an existing manga series.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="manga">Manga Series *</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select manga series" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="attack-on-titan">Attack on Titan</SelectItem>
                <SelectItem value="one-piece">One Piece</SelectItem>
                <SelectItem value="demon-slayer">Demon Slayer</SelectItem>
                <SelectItem value="jujutsu-kaisen">Jujutsu Kaisen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="number">Chapter Number *</Label>
              <Input 
                id="number" 
                type="number" 
                placeholder="e.g. 123" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pages">Number of Pages</Label>
              <Input 
                id="pages" 
                type="number" 
                placeholder="e.g. 20" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Chapter Title</Label>
            <Input id="title" placeholder="Enter chapter title (optional)" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Chapter File *</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                Supported formats: PDF, ZIP, CBZ, CBR (Max 50MB)
              </p>
              <Input 
                id="file" 
                type="file" 
                accept=".pdf,.zip,.cbz,.cbr" 
                className="hidden" 
                required 
              />
              <Button 
                type="button" 
                variant="outline" 
                className="mt-2"
                onClick={() => document.getElementById('file')?.click()}
              >
                Choose File
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="draft">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Uploading..." : "Add Chapter"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}