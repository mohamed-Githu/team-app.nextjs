import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import LogoLoadingAnimation from "../components/animations/logo-loading.animation";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleStart = () => setIsLoading(true);
  const handleStop = () => setIsLoading(false);

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);

    return () => {
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleStop);
    };
  }, [router]);

  useEffect(() => handleStop(), []);

  return isLoading ? <LogoLoadingAnimation /> : <Component {...pageProps} />;
}

export default MyApp;
