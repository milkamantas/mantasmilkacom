import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionFluidImage from "../components/Section/SectionFluidImage";
import SectionGradientQuote from "../components/Section/SectionGradientQuote";
import SectionFluidImageTwice from "../components/Section/SectionFluidImageTwice";
import SectionGradientImage from "../components/Section/SectionGradientImage";
import Section from "../components/Section";
import Footer from "../components/Footer";

import styles from "./VintedCloseUps.module.css";

const ProjectGeniusSports: FunctionComponent = () => {
	const navigate = useNavigate();

	const onAboutMeClick = useCallback(() => {
		navigate("/");
	}, [navigate]);
  
	const onProjectsClick = () => {
		navigate("/", { state: { scrollTo: "Projects" } });
	};

	const onContactMeClick = useCallback(() => {
		const anchor = document.querySelector("[data-scroll-to='Footer']");
		if (anchor) {
			anchor.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	}, []);

	return (
		<main className={styles.projectGeniussports}>
			<Header
				onAboutMeClick={onAboutMeClick}
				onProjectsClick={onProjectsClick}
				onContactMeClick={onContactMeClick}
			/>
			<Hero
				topSubtitle=" "
				showTopSubtitle={false}
				title="LiveStats"
				subTitle="Genius Sports"
				heroColor="#ffffff"
				heroBackgroundImage="/hero2@3x.png"
			/>
			<div className={styles.main}>
				<Section name="gsIntro" type="wrapper" flexDirection="row">
					<div className={styles.content}>
						<h1>LiveStats</h1>
						<h4>
							Empowering the Sports World with Cutting-Edge Data Solutions.
						</h4>
					</div>
					<div className={styles.content}>
						<p>
							LiveStats is a market-leading suite of applications that
							revolutionizes sports data collection and analysis through its
							unparalleled real-time precision and speed. Catering to a diverse
							range of sports including American Football, Ice Hockey, Football,
							Volleyball, and Basketball, LiveStats empowers statisticians and
							users to swiftly capture critical game events and statistics with
							utmost accuracy. This trailblazing technology not only forms the
							backbone of sports data collection but also plays a pivotal role
							in fueling the live betting market.
						</p>
					</div>
				</Section>
				<SectionFluidImage
					iMG="/img-full@2x.png"
					caption="LiveStats Basketball in action at NCAA game Duke vs Kansas"
				/>
				<Section name="gsOverview" type="wrapper" flexDirection="column">
					<div className={`${styles.content} ${styles.inside} ${styles.left}`}>
						<h2>Overview</h2>
						<p>
							LiveStats, developed by Genius Sports, stands as a colossus in the
							domain of sports data collection and analysis. Renowned for its
							real-time precision and speed, LiveStats has carved a niche for
							itself as the go-to solution for sport leagues.
						</p>
						<p>
							A defining hallmark of LiveStats is its prestigious partnerships
							with the giants of the sports world, including FIFA, NBA, NHL,
							Euroleague, NCAA, FIBA, NFL, MLB, and the Premier League. These
							collaborations reflect the unparalleled trust and reliability that
							LiveStats has cultivated within the industry.
						</p>
						<p>
							Catering to a diverse array of sports such as American Football,
							Ice Hockey, Football, Volleyball, and Basketball, LiveStats is
							meticulously designed to empower users to capture critical game
							events and statistics with utmost accuracy. This is particularly
							vital in the high-stakes, fast-paced world of betting.
						</p>
					</div>
					<div className={`${styles.content} ${styles.inside} ${styles.right}`}>
						<p>
							Moreover, LiveStats boasts a user-centric design that ensures a
							seamless and intuitive experience for statisticians. The
							harmonization of core principles across different sports under the
							LiveStats umbrella is a testament to its ingenuity and innovation.
						</p>
						<p>
							As a flagship product of Genius Sports, LiveStats continues to set
							the gold standard in sports data collection through its
							innovation, accuracy, and illustrious partnerships, making it an
							indispensable asset in the ever-evolving world of sports and
							betting.
						</p>
					</div>
				</Section>
				<SectionGradientQuote />
				<Section name="gsChallenges" type="wrapper" flexDirection="column">
					<div className={`${styles.content} ${styles.inside}`}>
						<h2>Challenges</h2>
						<p>
							Designing applications for LiveStats presented a unique set of
							challenges that required an intricate understanding of various
							sports and the nuances of their gameplay. The stakes were high, as
							the data collected was not only critical for performance analysis
							but also pivotal for the live betting market, where accuracy and
							timeliness are paramount.
						</p>
					</div>
					<div className={`${styles.content} ${styles.wrapped}`}>
						<div className={styles.wrappedSection}>
							<h4>Diverse Game Dynamics</h4>
							<p>
								Each sport has its own set of rules, actions, court sizes, and
								team roster sizes, which necessitated different approaches to
								user flows and components. For instance, while a live clock was
								not critical for American Football LiveStats, it was
								indispensable for Basketball due to the nature of the game.
								Similarly, tracking the puck was not required for Ice Hockey,
								but it was crucial for Basketball.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Statisticians' Muscle Memory</h4>
							<p>
								Statisticians heavily rely on muscle memory, and even minor
								changes in the application could significantly impact their
								workflow. This made introducing changes a delicate process. Some
								statisticians were so accustomed to traditional methods that
								they preferred DOS-style applications for data entry.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>
								Balancing between User Needs, Game Requirements and Usability
								Patterns
							</h4>
							<p>
								Understanding the perspective of Sports Information Directors
								(SIDs) was vital. The challenge was to design applications that
								not only catered to the unique requirements of each sport but
								also aligned with the preferences and workflows of the SIDs.
								Usability patterns played a pivotal role in ensuring data
								accuracy. In the high-stakes world of betting, where payouts can
								emerge instantly, there was no room for error. Every click
								mattered. We had to design the applications in a way that
								prevented missclicks and ensured that the data sent to the
								betting department was accurate.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Varying Team Roster Sizes</h4>
							<p>
								The sheer size of team rosters, especially in American Football
								college games where a team could have 250+ members, posed a
								challenge in creating a consistent user interface for
								statisticians.
							</p>
						</div>
						<div>
						<h4 className={styles.wrappedSection}>My Role</h4>
						<p className={styles.left}>
							Addressing these challenges required a deep dive into the
							intricacies of each sport, coupled with a user-centric approach to
							design that balanced the diverse needs of statisticians with the
							dynamic nature of the games.
						</p>
						<p className={styles.left}>
							As a UX designer, my responsibilities included creating user
							flows, wireframes, and designs for the applications and match
							reports. My approach was user-centered, focusing on usability and
							accessibility. I also collaborated with various stakeholders to
							ensure the applications met user and business requirements.
						</p>
					</div>
					</div>
				</Section>
				<SectionFluidImageTwice
					iMGLeft="/img-left@2x.png"
					iMGRight="/img-right@2x.png"
					caption="IceHockey LiveStats workshop"
				/>
				<Section name="gsProcess" type="wrapper" flexDirection="column">
					<div className={styles.content}>
						<h2>Process</h2>
					</div>
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>Research and Discovery</h3>
						<p>
							The research and discovery phase was an essential and multifaceted
							process. We conducted extensive research into American football,
							ice hockey, and other sports to gain a deep understanding of the
							game dynamics.
						</p>
					</div>
					<div className={`${styles.content} ${styles.wrapped}`}>
						<div className={styles.wrappedSection}>
							<h4>Streamlining the Discovery Process</h4>
							<p>
								We streamlined the process of LiveStats discovery to ensure
								efficiency and thoroughness. Our first step was to acquire
								near-perfect knowledge of the game rules. While we aimed for
								perfection, we acknowledged that sports can have grey areas and
								nuances that are challenging to fully grasp.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Engaging Stakeholders through Workshops</h4>
							<p>
								To cover all necessary aspects, we held a comprehensive workshop
								with statisticians, sports experts, and betting stakeholders.
								This collaborative approach ensured that we considered various
								perspectives, particularly from statistics and betting
								viewpoints.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Concept Development and Team Collaboration</h4>
							<p>
								With our concepts of game flows in place, we facilitated another
								workshop within our development team. This workshop allowed team
								members to raise questions, voice concerns, and share ideas,
								fostering a collaborative environment.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Wireframes and Design Development</h4>
							<p>
								Once the initial concept was approved by the betting department,
								we proceeded to develop wireframes and designs for the apps. We
								consulted our statisticians periodically during this phase to
								ensure accuracy and alignment with user needs. This was crucial
								as we had to get everything right for the set launch date.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>User Interviews and Live Game Attendance</h4>
							<p>
								In addition to workshops, we conducted user interviews,
								usability testing sessions, and surveys to gather qualitative
								data. Attending live games was also an integral part of our
								research, as it provided us with firsthand experience and
								insights into the real-world dynamics of the sports.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Stakeholders Involved</h4>
							<ul>
								<li>Betting department</li>
								<li>Sports Information Directors (SIDs)</li>
								<li>Internal business stakeholders</li>
							</ul>
							<p>
								Through this structured and collaborative approach, we were able
								to develop LiveStats with a deep understanding of the sports and
								the needs of the users and stakeholders involved.
							</p>
						</div>
					</div>
				</Section>
				<SectionFluidImage
					iMG="/img@2x.png"
					caption="IceHockey LiveStats workshop in progress"
				/>
				<Section name="gsDesign" type="wrapper" flexDirection="column">
					<div className={styles.content}>
						<div className={`${styles.content} ${styles.inside}`}>
							<h2>Design</h2>
							<p>
								Each sport has its own set of rules, actions, court sizes, and
								team roster sizes, which necessitated different approaches to user
								flows and components. For instance, while a live clock was not
								critical for American Football LiveStats, it was indispensable for
								Basketball due to the nature of the game. Similarly, tracking the
								puck was not required for Ice Hockey, but it was crucial for
								Basketball.
							</p>
						</div>
						<div className={`${styles.content} ${styles.inside}`}>
							<h3>Design Approach</h3>
							<p>
								The LiveStats applications required a unique design approach. For
								AFLS, one of the challenges was creating new patterns for entering
								and selecting player numbers. For IHLS, tracking the number of
								players on the pitch was a unique challenge. Usability was
								prioritized over aesthetics. Feedback from SIDs was incorporated
								to ensure the applications were user-friendly.
							</p>
						</div>
						<div className={`${styles.content} ${styles.wrapped}`}>
							<div className={styles.wrappedSection}>
								<h4>Concept Development and Team Collaboration</h4>
								<p>
									With our concepts of game flows in place, we facilitated another
									workshop within our development team. This workshop allowed team
									members to raise questions, voice concerns, and share ideas,
									fostering a collaborative environment.
								</p>
							</div>
							<div className={styles.wrappedSection}>
								<h4>Wireframes and Design Development</h4>
								<p>
									Once the initial concept was approved by the betting department,
									we proceeded to develop wireframes and designs for the apps. We
									consulted our statisticians periodically during this phase to
									ensure accuracy and alignment with user needs. This was crucial
									as we had to get everything right for the set launch date.
								</p>
							</div>
							<div className={styles.wrappedSection}>
								<h4>Tools and Skills Used</h4>
								<ul>
									<li>Balsamiq for wireframes and sketching</li>
									<li>Sketch App for creating designs</li>
									<li>Axure 9 for layout and extensive prototypes</li>
									<li>InVision for prototyping and presenting designs</li>
								</ul>
							</div>
							<div className={styles.wrappedSection}>
								<h4>Main Activities</h4>
								<div>
									<ul>
										<li>UX Design</li>
										<li>User Research</li>
										<li>Usability Testing</li>
										<li>Stakeholder Management</li>
										<li>Project Management</li>
										<li>Documentation</li>
										<li>Collaboration</li>
										<li>Wireframing</li>
										<li>Prototyping</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Section>
				<SectionFluidImageTwice
					iMGLeft="/img-left1@2x.png"
					iMGRight="/img-right1@2x.png"
					caption="Stickies on the left and stickies on the right. Stickies were posted everywhere"
				/>
				<Section name="gsAFLS" type="wrapper" flexDirection="column">
					<div className={styles.content}>
						<h2>Solutions</h2>
					</div>
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>American Football LiveStats</h3>
						<p>
							The AFLS project was a complex endeavor that required us to
							navigate numerous challenges. We were tasked with understanding a
							completely new sport, meeting tight deadlines, and satisfying
							various stakeholders, all with a team of just ten people. The
							project required us to balance the needs of the client, the
							betting division, and our target users - the statisticians. This
							was no easy task, as multiple stakeholders had their own personal
							agendas that could potentially pull the project in different
							directions.
						</p>
						<p>
							One of the unique solutions we developed for AFLS was a calculator
							concept for entering player numbers. This feature was based on
							user feedback and was well-received by the statisticians. However,
							it was just one of many innovative solutions we developed to meet
							the unique challenges of this project.
						</p>
					</div>
				</Section>
				<SectionFluidImage
					iMG="/img1@2x.png"
					caption="One of the concepts born in IceHockey LiveStats workshop"
				/>
				<Section name="gsIHLS" type="wrapper" flexDirection="column">
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>Ice Hockey LiveStats</h3>
						<p>
							Ice hockey, while not entirely new to our team, presented its own
							unique set of challenges. We had to thoroughly comprehend the
							intricate details of the sport's rules and exceptions.
							Fortunately, our Project Leader's professional ice hockey
							experience greatly aided our understanding and navigation of these
							complexities.
						</p>
						<p>
							Our approach to the IHLS project mirrored our previous efforts,
							involving the conduct of workshops, research, and ideation phases
							for different user flows. We identified various risk touch-points
							that required careful review and continuously worked on improving
							existing user flows.
						</p>
						<p>
							The game itself posed several challenges, such as accurately
							maintaining the time clock and tracking player numbers on the
							pitch. Despite these hurdles, our team was able to devise
							effective solutions that proved beneficial in live games,
							demonstrating our ability to adapt and innovate in the face of
							challenges.
						</p>
					</div>
				</Section>
				<SectionFluidImageTwice
					iMGLeft="/img-left2@2x.png"
					iMGRight="/img-right2@2x.png"
					caption="Axure prototypes were used heavily for usability testing and helped immensely to empathise with users"
					// sectionFluidImageHeight="31.25rem"
				/>
        		<Section name="gsResults" type="wrapper" flexDirection="column">
          <div className={`${styles.content} ${styles.inside}`}>
            <h2>LiveStats Family</h2>
            <p>
              In my previous role, I was entrusted with the responsibility of
              overseeing the User Experience and Strategy for the entire
              LiveStats family, which encompassed apps for Football,
              Volleyball, and Basketball. This role involved tasks such as
              mapping out user journeys, defining components, and implementing
              accessibility patterns, all aimed at ensuring a consistent user
              experience across all applications.
            </p>
            <p>
              One of the significant challenges I encountered was ensuring
              alignment of various elements, such as the game clock and roster
              building, tailored to each specific sport. To overcome this, we
              devised a design system and meticulously mapped experiences
              across applications. This strategic approach guaranteed maximum
              consistency in user flows across all applications.
            </p>
            <p>
              A notable accomplishment was the successful launch and
              streamlining of this process for future projects, which
              demonstrated our efficiency in meeting deadlines and designing
              effective apps. In my role, I also had to think creatively when
              introducing users to new concepts and collaborate with other
              teams to avoid conflicts during development.
            </p>
            <p>
              As a result of our efforts, the LiveStats family underwent a
              noticeable improvement in its user interface, enhancing
              readability and usability. This work on the LiveStats family was
              in line with the overall goals and objectives of Genius Sports,
              as LiveStats serves as the core of the company, providing data
              for the betting department and generating significant revenue.
            </p>
          </div>
				</Section>
        		<SectionFluidImage
					iMG="/img2@2x.png"
					caption="One of the concepts born in IceHockey LiveStats workshop"
					// sectionFluidImageHeight="51.25rem"
				/>
        		<Section name="gsConclusion" type="wrapper" flexDirection="column">
          <div className={`${styles.content} ${styles.inside}`}>
            <h2>Results and Conclusion</h2>
            <p>
              The projects resulted in the creation of high-fidelity
              prototypes using Axure 9, which allowed for thorough testing and
              valuable user feedback. These prototypes were almost as
              functional as the final applications, providing us with a robust
              platform for user testing.
            </p>
            <p>
              The LiveStats projects showcase my ability to design and
              implement user-centered features in a fast-paced, data-driven
              environment. My skills in user research, iterative design, and
              project management were critical to the success of these
              projects. The experience also highlighted my ability to navigate
              complex stakeholder landscapes and balance diverse needs to
              deliver solutions that satisfy all parties involved.
            </p>
          </div>
		</Section>
		<SectionGradientImage />
	</div>
	<Footer />
</main>
	);
};

export default ProjectGeniusSports;
