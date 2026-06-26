import "@/styles/globals.css";
import "@/styles/student-banking.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiAgentWidget from "@/components/AiAgentWidget";
import { LanguageProvider } from "@/context/LanguageContext";
import { ChatProvider } from "@/context/ChatContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ChatProvider>
        <Navbar />
        <Component {...pageProps} />
        <AiAgentWidget />
        <Footer />
      </ChatProvider>
    </LanguageProvider>
  );
}