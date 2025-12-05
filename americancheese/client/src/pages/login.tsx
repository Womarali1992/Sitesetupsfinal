import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] p-4">
      <div className="w-full max-w-sm sm:max-w-md mb-10 text-center">
        <div className="inline-flex items-center justify-center space-x-2 mb-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M3 9L12 4.5L21 9L12 13.5L3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 14L12 18.5L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 tracking-tight">SiteSetups</h1>
        <p className="text-sm text-gray-500">Construction Management Platform</p>
      </div>
      
      <Card className="w-full max-w-sm sm:max-w-md shadow-md border border-gray-100 bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4 space-y-1 text-center">
          <CardTitle className="text-xl font-semibold text-gray-800">Welcome</CardTitle>
          <CardDescription className="text-sm text-gray-500">Sign in with your Replit account to continue</CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <a href="/api/login">
            <Button 
              className="w-full h-11 text-base bg-primary hover:bg-primary/90 transition-colors shadow-sm"
            >
              Sign in with Replit
            </Button>
          </a>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Supports Google, GitHub, Apple, X (Twitter), and email login
          </p>
        </CardContent>
      </Card>
      
      <div className="mt-10 text-center text-xs text-gray-500">
        <p>© 2025 SiteSetups. All rights reserved.</p>
      </div>
    </div>
  );
}
