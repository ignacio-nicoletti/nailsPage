import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/components/breadcrumbs/bradcrumbs";
import Services from "@/components/servicios/services";
import Footer from "@/components/Footer/footer";
import { useState } from "react";
import Admin from "@/components/admin/admin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [breadcrumbs, setBreadcrumbs] = useState("servicios");

  const [session, setSession] = useState("user");

  return (
    <div className={styles.contain}>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        setBreadcrumbs={setBreadcrumbs}
        setSession={setSession}
        session={session}
      />
      {session === "user" ? (
        <Services breadcrumbs={breadcrumbs} setBreadcrumbs={setBreadcrumbs} />
      ) : (
        <Admin />
      )}
      <Footer />
    </div>
  );
}
