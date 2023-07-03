import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/components/breadcrumbs/bradcrumbs";
import Services from "@/components/servicios/services";
import Footer from "@/components/Footer/footer";
import { useState } from "react";
import Admin from "@/components/admin/admin";
import ErrorSendEmail from "@/components/errors/errorSendEmail/errorSendEmail";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [breadcrumbs, setBreadcrumbs] = useState("servicios");
  const [session, setSession] = useState("user");
  const [OnError, SetOnError] = useState(false);

  return (
    <div className={styles.contain}>
      {OnError === true ? <ErrorSendEmail /> : ""}
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        setBreadcrumbs={setBreadcrumbs}
        setSession={setSession}
        session={session}
      />
      {session === "user" ? (
        <Services
          SetOnError={SetOnError}
          breadcrumbs={breadcrumbs}
          setBreadcrumbs={setBreadcrumbs}
        />
      ) : (
        <Admin />
      )}

      <Footer />
    </div>
  );
}
