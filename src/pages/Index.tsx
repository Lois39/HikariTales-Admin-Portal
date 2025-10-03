import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Shield, Users, BarChart3, ArrowRight, Library, Settings, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 dark:from-purple-950 dark:via-purple-900 dark:to-purple-800 relative overflow-hidden">
  {/* Floating shapes */}
  <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/10 dark:bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <img
                  src="/mangalogo.png"
                  alt="HikariTales Logo"
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-950 animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              HikariTales
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Where manga dreams come to life. Your professional content management system for the modern digital library.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Streamline your manga collection, engage with readers, and unlock powerful insights—all from one elegant dashboard.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/admin" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 gap-3 text-lg px-8 py-6 rounded-2xl border-0"
              >
                <Shield className="h-5 w-5" />
                Enter Admin Portal
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
           <Button 
  variant="outline" 
  size="lg"
  className="w-full sm:w-auto border-2 border-slate-300 dark:border-slate-600 text-white hover:bg-slate-100 dark:hover:bg-slate-800 gap-3 text-lg px-8 py-6 rounded-2xl transition-all duration-300"
>
  <Eye className="h-5 w-5 text-white" />
  View Live Site
</Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16 md:mb-24">
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center relative z-10">
              <div className="mb-6">
                <div className="relative inline-flex">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Library className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute -inset-2 bg-blue-500/5 rounded-2xl group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Curated Library
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Organize thousands of titles with intelligent tagging, advanced search, and seamless metadata management.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center relative z-10">
              <div className="mb-6">
                <div className="relative inline-flex">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="absolute -inset-2 bg-green-500/5 rounded-2xl group-hover:bg-green-500/10 transition-colors duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Community Hub
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Foster engagement with reader communities, manage subscriptions, and build loyal fanbases.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center relative z-10">
              <div className="mb-6">
                <div className="relative inline-flex">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="absolute -inset-2 bg-purple-500/5 rounded-2xl group-hover:bg-purple-500/10 transition-colors duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Smart Insights
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Uncover reading patterns, track popular content, and make data-driven decisions with real-time analytics.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">10K+</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Manga Titles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">500K+</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Active Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">99.9%</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">24/7</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide">Support</div>
          </div>
        </div>

        {/* Demo Note */}
        <div className="text-center">
          <Card className="inline-block border-0 shadow-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm max-w-2xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Demo Environment</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Explore the full capabilities of our admin panel. This demo showcases real management features in a sandbox environment.
              </p>
              <div className="mt-4 text-sm text-slate-500 dark:text-slate-500">
                Visit <Link to="/admin" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">/admin</Link> to start exploring
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;