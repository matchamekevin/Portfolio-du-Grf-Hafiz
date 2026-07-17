import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { SiteDataProvider } from "./contexts/SiteDataContext";
import { AdminThemeProvider } from "./contexts/AdminThemeContext";
import { ToastProvider } from "./components/admin/Toast";
import { AdminTranslationsProvider } from "./hooks/useAdminTranslations.jsx";
import ScrollRestoration from "./components/ScrollRestoration.jsx";
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
      <ScrollRestoration />
    </>
  );
}

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteDataProvider><PublicLayout /></SiteDataProvider>} />
      <Route path="/login" element={<AdminThemeProvider><ToastProvider><Suspense fallback={null}><Login /></Suspense></ToastProvider></AdminThemeProvider>} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminTranslationsProvider>
              <AdminThemeProvider>
                <ToastProvider>
                  <Suspense fallback={null}>
                    <Admin />
                  </Suspense>
                </ToastProvider>
              </AdminThemeProvider>
            </AdminTranslationsProvider>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
