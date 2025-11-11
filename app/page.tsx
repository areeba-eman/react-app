'use client';
import Features from "./components/Features";
import MuiNavbar from "./components/MuiNavbar";
import Collections from "./components/Collections";
import Hero from "./components/hero";
import './globals.css';
import Community from "./components/Community";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import { LayoutContainer } from "./components/LayoutContainer";
import DiscountBar from "./components/DiscountBar";
import theme from './theme/theme'
import { ThemeProvider } from "@mui/material";


export default function Home() {
  return (
    <div className="page overflow-x-hidden" >
      <ThemeProvider theme={theme}>
      <LayoutContainer>
      <MuiNavbar />
      <Hero />
      </LayoutContainer>
      <DiscountBar />
      <LayoutContainer>
      <Features />
      <Collections />
      <Community />
      </LayoutContainer>
      <DiscountBar />
      <LayoutContainer>
      <Collaboration />
      </LayoutContainer>
      <Footer />
      </ThemeProvider>
      
    </div>
  );
}
