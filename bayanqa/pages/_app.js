import "@/styles/globals.css";
import "@/styles/student-banking.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiAgentWidget from "@/components/AiAgentWidget";
import { ChatProvider } from "@/context/ChatContext";

export default function App({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Navbar />
      <Component {...pageProps} />
      <AiAgentWidget />
      <Footer />
    </ChatProvider>
  );
}