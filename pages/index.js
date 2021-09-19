import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../components/layout";
import FullScreenIntro from "../components/panels/fullscreenIntro";
import MobileBanner from "../components/elements/mobileBanner";
import ProjectsPanel from "../components/panels/projectsPanel";

export default function Home() {
  return (
    <Layout>
      <FullScreenIntro />
      <MobileBanner />
      <ProjectsPanel />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon <a href="https://nextjs.org">Next.js!</a> OVERHAUL
        </h1>
      </main>
    </Layout>
  );
}