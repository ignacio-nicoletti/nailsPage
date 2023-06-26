import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/components/breadcrumbs/bradcrumbs";
import Services from "@/components/servicios/services";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.contain}>
      <Breadcrumbs />
      <Services />
      <Footer />
    </div>
  );
}
