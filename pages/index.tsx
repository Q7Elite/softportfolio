// import Hero from "@/components/Hero";
// import Nav from "@/components/Nav";
// import NavMobile from "@/components/NavMobile";
// import React, { useEffect, useState } from "react";
// import AboutMe from "@/components/AboutMe";
// import Services from "@/components/Services";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Prices from "@/components/Prices";
// import Reviews from "@/components/Reviews";
// import Blog from "@/components/Blog";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Head from "next/head"; // Importing the Head component
// import Script from "next/script"; // Importing Script for JSON-LD

// const HomePage = () => {
//   const [showNav, setShowNav] = useState(false);
//   const showNavHandler = () => setShowNav(true);
//   const closeNavHandler = () => setShowNav(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease",
//       once: true,
//       anchorPlacement: "top-bottom",
//     });
//   }, []);

//   return (
//     <div className="overflow-hidden">
//       <Head>
//         <title>SoftSpace</title>
//         <meta
//           name="description"
//           content="Contact us to make your brand brilliant. Get in touch anytime."
//         />
//         <meta property="og:title" content="SoftSpace" />
//         <meta
//           property="og:description"
//           content="Contact us to make your brand brilliant. Get in touch anytime."
//         />
//         <meta property="og:image" content="/images/sp4.jpg" />
//         <meta property="og:url" content="https://www.softspace.co.ke/" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="SoftSpace" />
//         <meta
//           name="twitter:description"
//           content="Contact us to make your brand brilliant. Get in touch anytime."
//         />
//         <meta name="twitter:image" content="/images/twit.png" />
//         <link rel="icon" href="/sq.png" /> {/* Link to the favicon image */}
//         <link rel="canonical" href="https://www.softspace.co.ke/" />
//       </Head>
//       <Script  type="application/ld+json" strategy="afterInteractive">
//         {JSON.stringify({
//           "@context": "http://schema.org",
//           "@type": "Organization",
//           name: "SoftSpace",
//           url: "https://www.softspace.co.ke/",
//           logo: "https://www.softspace.co.ke/sq.png",
//           contactPoint: {
//             "@type": "ContactPoint",
//             telephone: "+254722367989",
//             contactType: "Customer Service",
//           },
//           sameAs: [
//             "https://www.facebook.com/bonface.karichu",
//             "https://www.twitter.com/BGathura37051",
//             "https://www.linkedin.com/in/karichu-gathura-624b644a/",
//           ],
//         })}
//       </Script>
//       <NavMobile showNav={showNav} closeNav={closeNavHandler} />
//       <Nav openNav={showNavHandler} />
//       <Hero />
//       <AboutMe />
//       <Services />
//       <Skills />
//       <Projects />
//       <Prices />
//       <Reviews />
//       <Blog />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import React, { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Prices from "@/components/Prices";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

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
          ],
        })}
      </Script>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Prices />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
