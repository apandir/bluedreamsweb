import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import WebsiteLayout from "@/components/website/WebsiteLayout";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import DiningPage from "./pages/DiningPage";
import SpaPage from "./pages/SpaPage";
import ContactPage from "./pages/ContactPage";
import MeetingsPage from "./pages/MeetingsPage";
import MeetingsConferencesPage from "./pages/MeetingsConferencesPage";
import MeetingsWeddingsPage from "./pages/MeetingsWeddingsPage";
import MeetingsEventsPage from "./pages/MeetingsEventsPage";
import FactsheetPage from "./pages/Index";
import GalleryPage from "./pages/GalleryPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<WebsiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/dining" element={<DiningPage />} />
              <Route path="/spa" element={<SpaPage />} />
              <Route path="/meetings" element={<MeetingsPage />} />
              <Route path="/meetings/conferences" element={<MeetingsConferencesPage />} />
              <Route path="/meetings/weddings" element={<MeetingsWeddingsPage />} />
              <Route path="/meetings/events" element={<MeetingsEventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
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
