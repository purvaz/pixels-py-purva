// Landing page

import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-serif">
      {/* Navbar containing title, subtitle and tabs */}
      <main className="font-serif">
        <Navbar
          title="Purva Zinjarde"
          subtitle="An Amateur Photographer Based in San Francisco"
        />
      </main>

      {/* The photo gallery component */}
      <PhotoGallery />

      {/* Footer containing logo and copyright */}
      <Footer></Footer>
      <Analytics/>
    </div>
  );
}
