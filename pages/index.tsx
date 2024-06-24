import React, { useEffect, useState, useCallback, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Footer from "@/components/Footer";

// Lazy load components
const AboutMe = lazy(() => import("@/components/AboutMe"));
const Services = lazy(() => import("@/components/Services"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Prices = lazy(() => import("@/components/Prices"));
const Reviews = lazy(() => import("@/components/Reviews"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => (
  <div className="youtube-embed">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);

const HomePage: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = useCallback(() => setShowNav(true), []);
  const closeNavHandler = useCallback(() => setShowNav(false), []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>SoftSpace</title>
        <meta
          name="description"
          content="Contact us to make your brand brilliant. Get in touch anytime."
        />
        <meta property="og:title" content="SoftSpace" />
        <meta
          property="og:description"
          content="Contact us to make your brand brilliant. Get in touch anytime."
        />
        <meta property="og:image" content="/images/sp4.jpg" />
        <meta property="og:url" content="https://www.softspace.co.ke/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoftSpace" />
        <meta
          name="twitter:description"
          content="Contact us to make your brand brilliant. Get in touch anytime."
        />
        <meta name="twitter:image" content="/images/twit.png" />
        <link rel="icon" href="/sq.png" />
        <link rel="canonical" href="https://www.softspace.co.ke/" />
      </Head>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "SoftSpace",
          url: "https://www.softspace.co.ke/",
          logo: "https://www.softspace.co.ke/sq.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+254722367989",
            contactType: "Customer Service",
          },
          sameAs: [
            "https://www.facebook.com/bonface.karichu",
            "https://www.twitter.com/BGathura37051",
            "https://www.linkedin.com/in/karichu-gathura-624b644a/",
            "https://www.youtube.com/channel/@bonfacegathura9282",
            "https://www.instagram.com/karichu_gathura/?hl=en",
            "https://www.tiktok.com/@karichubonface?lang=en",
          ],
        })}
      </Script>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
        <Prices />
        <Reviews />
        <Blog />
        <YouTubeEmbed videoId="xopvkx6CpNs?si=ZlcmJ8wacjhDbbCO" />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default HomePage;
