import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import WebsiteLayout from "@/components/website/WebsiteLayout";
import HomePage from "./pages/HomePage";
import FactsheetPage from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<WebsiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms" element={<div className="pt-24 min-h-screen flex items-center justify-center"><p className="font-body text-lg text-muted-foreground">Rooms page coming soon...</p></div>} />
              <Route path="/dining" element={<div className="pt-24 min-h-screen flex items-center justify-center"><p className="font-body text-lg text-muted-foreground">Dining page coming soon...</p></div>} />
              <Route path="/spa" element={<div className="pt-24 min-h-screen flex items-center justify-center"><p className="font-body text-lg text-muted-foreground">Spa page coming soon...</p></div>} />
              <Route path="/contact" element={<div className="pt-24 min-h-screen flex items-center justify-center"><p className="font-body text-lg text-muted-foreground">Contact page coming soon...</p></div>} />
            </Route>
            <Route path="/factsheet" element={<FactsheetPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
