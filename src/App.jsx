import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./utility/Navbar";
import { ThemeProvider } from "./theme/ThemeProvider.jsx";
import Footer from "./utility/Footer.jsx";
import Home from "./base/Home.jsx";
import Support from "./base/Support.jsx";
import Apps from "./base/Apps.jsx";
import Privacy from "./base/Privacy.jsx";
import Contact from "./base/Contact.jsx";
import Terms from "./base/Terms.jsx";

// Rupee Diary pages
import RupeeDiary from "./apps/rupee-diary/Home.jsx";
import RupeeDiaryPrivacy from "./apps/rupee-diary/Privacy.jsx";
import RupeeDiarySupport from "./apps/rupee-diary/Support.jsx";
import RupeeDiaryTerms from "./apps/rupee-diary/Terms.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/support" element={<Support />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />

              {/* Rupee Diary app routes */}
              <Route path="/app/rupee-diary" element={<RupeeDiary />} />
              <Route path="/app/rupee-diary/privacy-policy" element={<RupeeDiaryPrivacy />} />
              <Route path="/app/rupee-diary/support" element={<RupeeDiarySupport />} />
              <Route path="/app/rupee-diary/terms" element={<RupeeDiaryTerms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
