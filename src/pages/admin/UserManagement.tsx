import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Plus,
  Search,
  Edit,
  Trash2,
  Shield,
  Mail,
  Calendar,
  MoreVertical,
  UserCheck,
  UserX,
  Crown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddUserDialog } from "@/components/AddUserDialog";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "/src/assets/user2.png",
    role: "Admin",
    status: "Active",
    joinedAt: "2023-01-15",
    lastSeen: "2024-01-15",
    mangaUploaded: 45,
    chaptersUploaded: 234
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/src/assets/user3.png",
    role: "Editor",
    status: "Active",
    joinedAt: "2023-03-20",
    lastSeen: "2024-01-14",
    mangaUploaded: 12,
    chaptersUploaded: 89
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "/src/assets/user1.png",
    role: "Moderator",
    status: "Active",
    joinedAt: "2023-06-10",
    lastSeen: "2024-01-13",
    mangaUploaded: 3,
    chaptersUploaded: 28
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "/src/assets/user4.png",
    role: "User",
    status: "Suspended",
    joinedAt: "2023-09-05",
    lastSeen: "2024-01-10",
    mangaUploaded: 0,
    chaptersUploaded: 0
  }
];

const roleColors = {
  Admin: "bg-red-500/10 text-red-400 border-red-500/20",
  Editor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Moderator: "bg-green-500/10 text-green-400 border-green-500/20",
  User: "bg-gray-500/10 text-gray-400 border-gray-500/20"
};

const statusColors = {
  Active: "bg-green-500/10 text-green-400",
  Suspended: "bg-red-500/10 text-red-400",
  Inactive: "bg-gray-500/10 text-gray-400"
};

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role.toLowerCase() === selectedRole;
    return matchesSearch && matchesRole;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">User Management</h1>
          <p className="text-muted-foreground">Manage users, roles, and permissions.</p>
        </div>
        <AddUserDialog />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">1,247</p>
          <p className="text-sm text-muted-foreground">Total Users</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">1,189</p>
          <p className="text-sm text-muted-foreground">Active Users</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
              <UserX className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">58</p>
          <p className="text-sm text-muted-foreground">Suspended</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-accent/20 text-accent">
              <Crown className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">12</p>
          <p className="text-sm text-muted-foreground">Admins</p>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="admin-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    <Shield className="h-4 w-4" />
                    <span className="hidden xs:inline">Role:</span> {selectedRole === "all" ? "All" : selectedRole}
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedRole("all")}>
                  All Roles
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("admin")}>
                  Admin
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("editor")}>
                  Editor
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("moderator")}>
                  Moderator
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("user")}>
                  User
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="admin-card">
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user, index) => (
              <div key={user.id} className="user-item animate-slide-up p-4 border border-border rounded-lg flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4 flex-1">
                  {/* Avatar */}
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground">{user.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3 w-3 flex-shrink-0" />
                      <span className="break-all">{user.email}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span>Joined {formatDate(user.joinedAt)}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <span className="block sm:inline">Last seen {formatDate(user.lastSeen)}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm sm:order-2">
                  <div className="text-center">
                    <p className="font-medium text-foreground">{user.mangaUploaded}</p>
                    <p className="text-muted-foreground">Manga</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-foreground">{user.chaptersUploaded}</p>
                    <p className="text-muted-foreground">Chapters</p>
                  </div>
                </div>

                {/* Badges and Actions */}
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap sm:order-3">
                  <Badge className={roleColors[user.role as keyof typeof roleColors]}>
                    {user.role}
                  </Badge>
                  <Badge variant="outline" className={statusColors[user.status as keyof typeof statusColors]}>
                    {user.status}
                  </Badge>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" />
                        Edit User
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Shield className="h-4 w-4" />
                        Change Role
                      </DropdownMenuItem>
                      {user.status === "Active" ? (
                        <DropdownMenuItem className="gap-2 text-orange-400">
                          <UserX className="h-4 w-4" />
                          Suspend
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem className="gap-2 text-green-400">
                          <UserCheck className="h-4 w-4" />
                          Activate
                        </DropdownMenuItem>
                      )}
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
        </CardContent>
      </Card>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <Card className="admin-card">
          <CardContent className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No users found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Try adjusting your search criteria" : "Start by adding your first user"}
            </p>
            <AddUserDialog />
          </CardContent>
        </Card>
      )}
    </div>
  );
}