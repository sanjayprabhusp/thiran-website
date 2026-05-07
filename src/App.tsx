/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import AmbientBackground from "./components/AmbientBackground";
import EntryAnimation from "./components/EntryAnimation";
import { usePageSwipe } from "./hooks/usePageSwipe";

function AnimatedRoutes() {
  const location = useLocation();
  usePageSwipe();

  return (
    <div className="flex-1 w-full relative">
      <AnimatePresence mode="wait">
        {/* @ts-expect-error type missing key */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/service" element={<PageTransition><Service /></PageTransition>} />
          <Route path="/product" element={<PageTransition><Product /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [showEntryAnim, setShowEntryAnim] = useState(true);

  return (
    <>
      {showEntryAnim && <EntryAnimation onComplete={() => setShowEntryAnim(false)} />}
      <Router>
        <div className="flex min-h-screen flex-col">
          <AmbientBackground />
          <Navigation />
          <main className="flex-1 flex flex-col pt-16">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}
