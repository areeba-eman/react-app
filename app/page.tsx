'use client';
import Features from "./components/Features";
import MuiNavbar from "./components/MuiNavbar";
import Collections from "./components/Collections";
import Hero from "./components/hero";
import './globals.css';
import Community from "./components/Community";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="page mx-auto max-w-[1440px] overflow-x-hidden" >
      <MuiNavbar />
      <Hero />
      <Features />
      <Collections />
      <Community />
      <Collaboration />
      <Footer />
    </div>
  );
}
