import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { SiteDataProvider, useSiteData } from "./contexts/SiteDataContext";
import { AdminThemeProvider } from "./contexts/AdminThemeContext";
import { ToastProvider } from "./components/admin/Toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";

const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));

function PublicLayout() {
  const { loading } = useSiteData();
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Experiences />
        <Gallery />
        <Skills />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  useEffect(() => {
    let done = false;
    const mark = () => {
      if (done) return;
      done = true;
      document.documentElement.classList.add("icons-ready");
    };
    if (document.fonts && document.fonts.load) {
      document.fonts.load("1em 'Material Symbols Outlined'").then(mark).catch(mark);
      document.fonts.ready.then(mark);
    } else {
      mark();
    }
    const t = setTimeout(mark, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SiteDataProvider><PublicLayout /></SiteDataProvider>} />
      <Route path="/login" element={<AdminThemeProvider><ToastProvider><Suspense fallback={null}><Login /></Suspense></ToastProvider></AdminThemeProvider>} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminThemeProvider>
              <ToastProvider>
                <Suspense fallback={null}>
                  <Admin />
                </Suspense>
              </ToastProvider>
            </AdminThemeProvider>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
