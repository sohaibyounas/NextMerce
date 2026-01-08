import Header from "@/components/layout/Header/Header";
import ParallaxHero from "@/components/sections/Showcase/ParallaxHero";
import ScrollRevealedCards from "@/components/sections/Showcase/ScrollRevealedCards";
import HorizontalScrollGallery from "@/components/sections/Showcase/HorizontalScrollGallery";
import LineRevealText from "@/components/sections/Showcase/LineRevealText";
import ZoomSection from "@/components/sections/Showcase/ZoomSection";
import ThreeDSpiralCards from "@/components/sections/Showcase/ThreeDSpiralCards";
import ImagePopOut from "@/components/sections/Showcase/ImagePopOut";

export default function ShowcasePage() {
  return (
    <main className="bg-black">
      <Header />

      {/* 1. Basic Parallax (Mountain effect) */}
      <ParallaxHero />

      {/* 2. Text Reveal (Words appearing on scroll) */}
      <LineRevealText />

      {/* 3. Image Pop Out (Advanced Parallax) */}
      <ImagePopOut />

      {/* 4. Zoom In Effect (Immersive Scale) */}
      <ZoomSection />

      {/* 5. Fade In + Scale Cards */}
      <ScrollRevealedCards />

      {/* 6. Horizontal Scroll Gallery */}
      <HorizontalScrollGallery />

      {/* 7. 3D Rotation / Spiral Cards */}
      <ThreeDSpiralCards />

      {/* Footer Spacer */}
      <div className="h-screen bg-black flex items-center justify-center">
        <h2 className="text-white text-4xl font-light tracking-widest opacity-20">
          THE END
        </h2>
      </div>
    </main>
  );
}
