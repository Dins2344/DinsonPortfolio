import "../styles/globals.css";

//head form next
import Head from "next/head";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

//router
import { useRouter } from "next/router";

//framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-color.webp" />
      </Head>
      <Layout>
        <AnimatePresence>
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
