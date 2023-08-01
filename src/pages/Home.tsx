import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import ProjectListItem from "../components/ProjectListItem";
import Footer from "../components/Footer";
import styles from "./Home.module.css";
const DesktopLanding: FunctionComponent = () => {
  const onAboutMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='header']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='sectionProjects']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.home}>
      <Header
        onAboutMeClick={onAboutMeClick}
        onProjectsClick={onProjectsClick}
        onContactMeClick={onContactMeClick}
      />
      <Hero
        topSubtitle="Hey, I’m Mantas"
        showTopSubtitle
        title="UX UI Designer"
        subTitle="based in Vilnius, Lithuania"
        heroColor="#222"
      />
      <main className={styles.main}>
        <div className={styles.sectionHi}>
          <div className={styles.wrapper}>
            <div className={styles.paragraph}>
              <h1 className={styles.hiThere} id="HeroTitle">
                Hi there!
              </h1>
              <p className={styles.imAProduct}>
                I'm a product designer focused on creating seamless user
                experiences that elevate brands.
              </p>
              <p className={styles.imAProduct}>
                With roots in front-end development, I'm really into taking
                products to the next level. My design process is all about
                digging into data-backed user research, making quick iterations,
                and crafting visually appealing UI that’s centered around the
                user.
              </p>
              <p className={styles.imAProduct}>
                Years in the design field have taught me what can trip up
                creative solutions from aligning with business objectives. I'm a
                firm believer in focusing on UX to tackle these issues, making
                sure the work is not just effective and good-looking, but truly
                enhances how people interact with it.
              </p>
              <p className={styles.ifYoureCuriousContainer}>
                {`If you're curious to know more or have a project you want to talk over, feel free to reach out at `}
                <a
                  className={styles.mantasmantasmilkacom}
                  href="mailto:mantas@mantasmilka.com"
                  target="_blank"
                >
                  <span className={styles.mantasmantasmilkacom1}>
                    mantas@mantasmilka.com
                  </span>
                </a>
                .
              </p>
            </div>
            <div className={styles.companies}>
              <h3 className={styles.companies1}>Companies</h3>
              <div className={styles.logoul}>
                <Logo image="/rectangle-5@2x.png" />
                <Logo image="/rectangle-51@2x.png" />
                <Logo image="/rectangle-52@2x.png" />
                <Logo image="/rectangle-53@2x.png" />
                <Logo image="/rectangle-54@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.sectionProjects}
          data-scroll-to="sectionProjects"
        >
          <div className={styles.wrapper1}>
            <div className={styles.content}>
              <div className={styles.heading}>Projects</div>
              <div className={styles.paragraph1}>MultiSport @Genius Sports</div>
            </div>
            <ProjectListItem
              projectTitle="Close-Ups"
              projectSubtitle="Team MORE @Vinted"
              paragraph1="Our deep dive into our internal data revealed a concerning trend: our engagement and retention metrics were in jeopardy. With the emergence of new second-hand marketplaces each year, we recognized this as a looming threat to the sustainability and growth of our company. To address this, we conducted preliminary research to understand the strategies employed by our competitors. "
              paragraph2={`Armed with this knowledge, we resolved to explore and experiment with an innovative approach to content sharing. This led to the inception of the "Close-Ups" feature, aimed at providing a richer and more immersive experience for users. Through this project, our primary objectives were to bolster user engagement, enhance content quality, and ultimately fortify our position in the marketplace.`}
              iMG="/image-2@2x.png"
            />
            <ProjectListItem
              projectTitle="LiveStats"
              projectSubtitle="MultiSport @Genius Sports"
              paragraph1="In an era where data is king, sports statistics have taken center stage in various domains including media, betting markets, and fan engagement. Genius Sports, a titan in digital sports content, technology, and integrity services, aimed to revolutionize the way sports statistics are gathered and analyzed. "
              paragraph2="The MultiSport LiveStats project was born out of this vision, with a focus on American Football and Ice Hockey. The primary objective was to build applications that facilitated swift, accurate, and efficient data collection, which in turn would feed into betting data centers for real-time score updates. The stakes were high as every second and every data point had monetary implications."
              iMG="/1ncaalivestatsforfootballnovember7th-1@2x.png"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesktopLanding;
