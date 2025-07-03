
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import Culture from "./pages/Culture";
import GreenwilleHeadquarters from "./pages/GreenwilleHeadquarters";
import CincinnatiLocation from "./pages/CincinnatiLocation";
import Careers from "./pages/Careers";
import IntroToDebtCredit from "./pages/IntroToDebtCredit";
import CreditReporting from "./pages/CreditReporting";
import DebtCollection from "./pages/DebtCollection";
import ScamsAndFrauds from "./pages/ScamsAndFrauds";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import EMICalculator from "./pages/EMICalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/greenville-headquarters" element={<GreenwilleHeadquarters />} />
          <Route path="/cincinnati-location" element={<CincinnatiLocation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/intro-to-debt-credit" element={<IntroToDebtCredit />} />
          <Route path="/credit-reporting" element={<CreditReporting />} />
          <Route path="/debt-collection" element={<DebtCollection />} />
          <Route path="/scams-and-frauds" element={<ScamsAndFrauds />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
