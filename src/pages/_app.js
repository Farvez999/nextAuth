import '@/styles/globals.css'
import Navbar from "@/components/Layout/Navbar";
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.ession}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
