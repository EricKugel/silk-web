import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import styles from "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
