import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Shared/Navbar";
import GridFeatureSection from "../components/Home/GridFeatureSection";
const Home = () => {
  const dreamDestinations = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rajasthan",
      description: "2000+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kerala",
      description: "1000+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhJTIwdHJhdmVsfGVufDB8fDB8fHww",
      title: "Assam",
      description: "700+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rishikesh",
      description: "300+ Destinations",
    },
  ];
  const autoSuggestedDestinations = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rajasthan",
      description: "2000+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kerala",
      description: "1000+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhJTIwdHJhdmVsfGVufDB8fDB8fHww",
      title: "Assam",
      description: "700+ Destinations",
    },
  ];

  const popularDestinations = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rajasthan",
      description: "2000+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kerala",
      description: "1000+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhJTIwdHJhdmVsfGVufDB8fDB8fHww",
      title: "Assam",
      description: "700+ Destinations",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rishikesh",
      description: "300+ Destinations",
    },
  ];
  return (
    <main className="flex w-full max-w-[1240px] flex-col items-center justify-center px-2">
      <Navbar />
      <GridFeatureSection
        destinations={dreamDestinations}
        heading={"Enjoy your dream vacation"}
        subHeading={`Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us`}
      />
      <GridFeatureSection
        destinations={autoSuggestedDestinations}
        heading={"Get inspired for your next trip"}
        margintop="mt-4"
      />
      <GridFeatureSection
        destinations={popularDestinations}
        heading={"Popular Destinations to visit"}
        margintop="mt-4"
      />
    </main>
  );
};

export default Home;
