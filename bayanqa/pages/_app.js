import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiAgentWidget from "@/components/AiAgentWidget";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <AiAgentWidget />
      <Footer />
    </>
  );
}
