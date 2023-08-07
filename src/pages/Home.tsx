import { FunctionComponent, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionHi from "../components/SectionHi";
import ProjectListItem from "../components/ProjectListItem";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.state?.scrollTo) {
			const anchor = document.querySelector(`#${location.state.scrollTo}`);
			if (anchor) {
				window.setTimeout(() => {
					anchor.scrollIntoView({ block: "start", behavior: "smooth" });
				}, 0);
			}
		}
	}, [location.state]);

	const onAboutMeClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='main']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onProjectsClick = useCallback(() => {
		const anchor = document.querySelector("#sectionProjects");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	const onContactMeClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='platformdesktop']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	return (
		<main className={styles.home} data-scroll-to="main" id="main">
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
			/>
			<main className={styles.main}>
        <SectionHi />
				<div
					className={styles.sectionProjects}
					data-scroll-to="sectionProjects"
					id="sectionProjects"
				>
					<div className={styles.wrapper1}>
						<div className={styles.content}>
							<div className={styles.heading}>Projects</div>
							<div className={styles.paragraph1}>MultiSport @Genius Sports</div>
						</div>
						{/* <ProjectListItem
              projectTitle="Close-Ups"
              projectSubtitle="Team MORE @Vinted"
              paragraph1="Our deep dive into our internal data revealed a concerning trend: our engagement and retention metrics were in jeopardy. With the emergence of new second-hand marketplaces each year, we recognized this as a looming threat to the sustainability and growth of our company. To address this, we conducted preliminary research to understand the strategies employed by our competitors. "
              paragraph2={`Armed with this knowledge, we resolved to explore and experiment with an innovative approach to content sharing. This led to the inception of the "Close-Ups" feature, aimed at providing a richer and more immersive experience for users. Through this project, our primary objectives were to bolster user engagement, enhance content quality, and ultimately fortify our position in the marketplace.`}
              iMG="/image-2@2x.png"
              to="/projectvinted"
            /> */}
						<ProjectListItem
							projectTitle="LiveStats"
							projectSubtitle="MultiSport @Genius Sports"
							paragraph1="In an era where data is king, sports statistics have taken center stage in various domains including media, betting markets, and fan engagement. Genius Sports, a titan in digital sports content, technology, and integrity services, aimed to revolutionize the way sports statistics are gathered and analyzed. "
							paragraph2="The MultiSport LiveStats project was born out of this vision, with a focus on American Football and Ice Hockey. The primary objective was to build applications that facilitated swift, accurate, and efficient data collection, which in turn would feed into betting data centers for real-time score updates. The stakes were high as every second and every data point had monetary implications."
							iMG="/1ncaalivestatsforfootballnovember7th-1@2x.png"
							to="/projectgeniussports"
						/>
					</div>
				</div>
			</main>
			<Footer />
		</main>
	);
};

export default Home;
