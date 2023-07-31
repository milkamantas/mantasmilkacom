import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header1";
import Hero from "../components/Hero";
import Paragraphs1DesktopAlignLe from "../components/Paragraphs1DesktopAlignLe";
import SectionFluidImage from "../components/SectionFluidImage";
import Paragraphs2DesktopAlignRi from "../components/Paragraphs2DesktopAlignRi";
import SectionGradientQuote from "../components/SectionGradientQuote";
import Paragraphs2DesktopAlignLe from "../components/Paragraphs2DesktopAlignLe";
import SectionFluidImageTwice from "../components/SectionFluidImageTwice";
import SectionGradientImage from "../components/SectionGradientImage";
import Footer from "../components/Footer";
import styles from "./ProjectGeniusSports1.module.css";
const ProjectGeniusSports1: FunctionComponent = () => {
  const onAboutMeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='main']");
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

  return (
    <div className={styles.projectgeniussports}>
      <Header
        onAboutMeClick={onAboutMeClick}
        onProjectsClick={onProjectsClick}
      />
      <Hero
        topSubtitle="Hey, I’m Mantas"
        showTopSubtitle={false}
        title="LiveStats"
        subTitle="Genius Sports"
        heroColor="unset"
        heroBackgroundImage={`url("/hero2@3x.png")`}
      />
      <div className={styles.main}>
        <div className={styles.sectionIntro}>
          <div className={styles.wrapper}>
            <Paragraphs1DesktopAlignLe
              sectionTitle="LiveStats"
              gameDescription="Empowering the Sports World with Cutting-Edge Data Solutions."
              paragraphs1DesktopAlignLePosition="unset"
              paragraphs1DesktopAlignLeWidth="unset"
              paragraphs1DesktopAlignLeMaxWidth="29.25rem"
              paragraphs1DesktopAlignLeFlex="1"
              paragraphs1DesktopAlignLeAlignSelf="stretch"
              paragraphs1DesktopAlignLeMinWidth="unset"
              headingFontSize="80px"
              headingLineHeight="5.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.88rem"
              paragraphFontSize="20px"
              paragraphFontWeight="300"
            />
            <div className={styles.content}>
              <div className={styles.heading}>Overview</div>
              <div className={styles.paragraph}>
                LiveStats is a market-leading suite of applications that
                revolutionizes sports data collection and analysis through its
                unparalleled real-time precision and speed. Catering to a
                diverse range of sports including American Football, Ice Hockey,
                Football, Volleyball, and Basketball, LiveStats empowers
                statisticians and users to swiftly capture critical game events
                and statistics with utmost accuracy. This trailblazing
                technology not only forms the backbone of sports data collection
                but also plays a pivotal role in fueling the live betting
                market.
              </div>
            </div>
          </div>
        </div>
        <SectionFluidImage
          iMG="/img3@2x.png"
          caption="LiveStats Basketball in action at NCAA game Duke vs Kansas"
        />
        <div className={styles.sectionProjectOverview}>
          <div className={styles.wrapper1}>
            <div className={styles.content1}>
              <div className={styles.heading1}>Overview</div>
              <div className={styles.paragraph1}>
                LiveStats, developed by Genius Sports, stands as a colossus in
                the domain of sports data collection and analysis. Renowned for
                its real-time precision and speed, LiveStats has carved a niche
                for itself as the go-to solution for sport leagues.
              </div>
              <div className={styles.paragraph1}>
                A defining hallmark of LiveStats is its prestigious partnerships
                with the giants of the sports world, including FIFA, NBA, NHL,
                Euroleague, NCAA, FIBA, NFL, MLB, and the Premier League. These
                collaborations reflect the unparalleled trust and reliability
                that LiveStats has cultivated within the industry.
              </div>
              <div className={styles.paragraph1}>
                Catering to a diverse array of sports such as American Football,
                Ice Hockey, Football, Volleyball, and Basketball, LiveStats is
                meticulously designed to empower users to capture critical game
                events and statistics with utmost accuracy. This is particularly
                vital in the high-stakes, fast-paced world of betting.
              </div>
            </div>
            <Paragraphs2DesktopAlignRi
              sectionTitle="Overview"
              gameDescription="Moreover, LiveStats boasts a user-centric design that ensures a seamless and intuitive experience for statisticians. The harmonization of core principles across different sports under the LiveStats umbrella is a testament to its ingenuity and innovation."
              gameRulesAndSizes="As a flagship product of Genius Sports, LiveStats continues to set the gold standard in sports data collection through its innovation, accuracy, and illustrious partnerships, making it an indispensable asset in the ever-evolving world of sports and betting."
              showHeading={false}
              paragraphs2DesktopAlignRiPosition="unset"
              paragraphs2DesktopAlignRiWidth="unset"
              paragraphs2DesktopAlignRiMaxWidth="60rem"
              paragraphs2DesktopAlignRiAlignSelf="stretch"
              containerMaxWidth="29.25rem"
              headingFontSize="48px"
              headingLineHeight="4rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphLineHeight1="1.44rem"
            />
          </div>
        </div>
        <SectionGradientQuote />
        <div className={styles.sectionChallenges}>
          <div className={styles.wrapper1}>
            <Paragraphs1DesktopAlignLe
              sectionTitle="Challenges"
              gameDescription="Designing applications for LiveStats presented a unique set of challenges that required an intricate understanding of various sports and the nuances of their gameplay. The stakes were high, as the data collected was not only critical for performance analysis but also pivotal for the live betting market, where accuracy and timeliness are paramount."
              paragraphs1DesktopAlignLePosition="unset"
              paragraphs1DesktopAlignLeWidth="unset"
              paragraphs1DesktopAlignLeMaxWidth="29.25rem"
              paragraphs1DesktopAlignLeFlex="unset"
              paragraphs1DesktopAlignLeAlignSelf="stretch"
              paragraphs1DesktopAlignLeMinWidth="unset"
              headingFontSize="48px"
              headingLineHeight="4rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphFontSize="15px"
              paragraphFontWeight="unset"
            />
            <div className={styles.wrapper3}>
              <Paragraphs1DesktopAlignLe
                sectionTitle="Diverse Game Dynamics"
                gameDescription="Each sport has its own set of rules, actions, court sizes, and team roster sizes, which necessitated different approaches to user flows and components. For instance, while a live clock was not critical for American Football LiveStats, it was indispensable for Basketball due to the nature of the game. Similarly, tracking the puck was not required for Ice Hockey, but it was crucial for Basketball."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="1"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="29.25rem"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="Statisticians' Muscle Memory"
                gameDescription="Statisticians heavily rely on muscle memory, and even minor changes in the application could significantly impact their workflow. This made introducing changes a delicate process. Some statisticians were so accustomed to traditional methods that they preferred DOS-style applications for data entry."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="1"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="29.25rem"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="Balancing between User Needs, Game Requirements and Usability Patterns"
                gameDescription="Understanding the perspective of Sports Information Directors (SIDs) was vital. The challenge was to design applications that not only catered to the unique requirements of each sport but also aligned with the preferences and workflows of the SIDs. Usability patterns played a pivotal role in ensuring data accuracy. In the high-stakes world of betting, where payouts can emerge instantly, there was no room for error. Every click mattered. We had to design the applications in a way that prevented missclicks and ensured that the data sent to the betting department was accurate."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="1"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="29.25rem"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="Varying Team Roster Sizes"
                gameDescription="The sheer size of team rosters, especially in American Football college games where a team could have 250+ members, posed a challenge in creating a consistent user interface for statisticians."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="1"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="29.25rem"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
            </div>
            <Paragraphs2DesktopAlignLe
              heading="My Role"
              paragraph="Addressing these challenges required a deep dive into the intricacies of each sport, coupled with a user-centric approach to design that balanced the diverse needs of statisticians with the dynamic nature of the games."
              paragraph1="As a UX designer, my responsibilities included creating user flows, wireframes, and designs for the applications and match reports. My approach was user-centered, focusing on usability and accessibility. I also collaborated with various stakeholders to ensure the applications met user and business requirements."
              paragraphs2DesktopAlignLePosition="unset"
              paragraphs2DesktopAlignLeWidth="unset"
              paragraphs2DesktopAlignLeMaxWidth="29.25rem"
              paragraphs2DesktopAlignLeAlignSelf="stretch"
              headingFontSize="32px"
              headingLineHeight="2.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphLineHeight1="1.44rem"
            />
          </div>
        </div>
        <SectionFluidImageTwice
          iMGLeft="/img-left@2x.png"
          iMGRight="/img-right@2x.png"
          caption="IceHockey LiveStats workshop"
        />
        <div className={styles.sectionTheProcess}>
          <div className={styles.wrapper1}>
            <div className={styles.content1}>
              <div className={styles.heading2}>Process</div>
              <div className={styles.paragraph4}>
                Designing applications for LiveStats presented a unique set of
                challenges that required an intricate understanding of various
                sports and the nuances of their gameplay. The stakes were high,
                as the data collected was not only critical for performance
                analysis but also pivotal for the live betting market, where
                accuracy and timeliness are paramount.
              </div>
            </div>
            <Paragraphs1DesktopAlignLe
              sectionTitle="Research and Discovery"
              gameDescription="The research and discovery phase was an essential and multifaceted process. We conducted extensive research into American football, ice hockey, and other sports to gain a deep understanding of the game dynamics."
              paragraphs1DesktopAlignLePosition="unset"
              paragraphs1DesktopAlignLeWidth="unset"
              paragraphs1DesktopAlignLeMaxWidth="29.25rem"
              paragraphs1DesktopAlignLeFlex="unset"
              paragraphs1DesktopAlignLeAlignSelf="stretch"
              paragraphs1DesktopAlignLeMinWidth="unset"
              headingFontSize="32px"
              headingLineHeight="2.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphFontSize="15px"
              paragraphFontWeight="unset"
            />
            <div className={styles.wrapper5}>
              <Paragraphs1DesktopAlignLe
                sectionTitle="Streamlining the Discovery Process"
                gameDescription="We streamlined the process of LiveStats discovery to ensure efficiency and thoroughness. Our first step was to acquire near-perfect knowledge of the game rules. While we aimed for perfection, we acknowledged that sports can have grey areas and nuances that are challenging to fully grasp."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="unset"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="unset"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="Engaging Stakeholders through Workshops"
                gameDescription="To cover all necessary aspects, we held a comprehensive workshop with statisticians, sports experts, and betting stakeholders. This collaborative approach ensured that we considered various perspectives, particularly from statistics and betting viewpoints."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="unset"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="unset"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="Concept Development and Team Collaboration"
                gameDescription="With our concepts of game flows in place, we facilitated another workshop within our development team. This workshop allowed team members to raise questions, voice concerns, and share ideas, fostering a collaborative environment."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="unset"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="unset"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="Wireframes and Design Development"
                gameDescription="Once the initial concept was approved by the betting department, we proceeded to develop wireframes and designs for the apps. We consulted our statisticians periodically during this phase to ensure accuracy and alignment with user needs. This was crucial as we had to get everything right for the set launch date."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="unset"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="unset"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="User Interviews and Live Game Attendance"
                gameDescription="In addition to workshops, we conducted user interviews, usability testing sessions, and surveys to gather qualitative data. Attending live games was also an integral part of our research, as it provided us with firsthand experience and insights into the real-world dynamics of the sports."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="unset"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="unset"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
            </div>
            <Paragraphs1DesktopAlignLe
              sectionTitle="Stakeholders Involved"
              paragraphs1DesktopAlignLePosition="unset"
              paragraphs1DesktopAlignLeWidth="unset"
              paragraphs1DesktopAlignLeMaxWidth="29.25rem"
              paragraphs1DesktopAlignLeFlex="unset"
              paragraphs1DesktopAlignLeAlignSelf="stretch"
              paragraphs1DesktopAlignLeMinWidth="unset"
              headingFontSize="20px"
              headingLineHeight="1.75rem"
              headingFontWeight="unset"
              paragraphLineHeight="1.44rem"
              paragraphFontSize="15px"
              paragraphFontWeight="unset"
            />
            <div className={styles.content3}>
              <div className={styles.heading3}>Stakeholders Involved</div>
              <div className={styles.paragraph}>
                Through this structured and collaborative approach, we were able
                to develop LiveStats with a deep understanding of the sports and
                the needs of the users and stakeholders involved.
              </div>
            </div>
          </div>
        </div>
        <SectionFluidImage
          iMG="/img4@2x.png"
          caption="IceHockey LiveStats workshop in progress"
          sectionFluidImageHeight="42.06rem"
        />
        <div className={styles.sectionDesign}>
          <div className={styles.wrapper6}>
            <div className={styles.content4}>
              <div className={styles.heading2}>Design</div>
              <div className={styles.paragraph4}>
                Each sport has its own set of rules, actions, court sizes, and
                team roster sizes, which necessitated different approaches to
                user flows and components. For instance, while a live clock was
                not critical for American Football LiveStats, it was
                indispensable for Basketball due to the nature of the game.
                Similarly, tracking the puck was not required for Ice Hockey,
                but it was crucial for Basketball.
              </div>
            </div>
            <Paragraphs1DesktopAlignLe
              sectionTitle="Design Approach"
              gameDescription="The LiveStats applications required a unique design approach. For AFLS, one of the challenges was creating new patterns for entering and selecting player numbers. For IHLS, tracking the number of players on the pitch was a unique challenge. Usability was prioritized over aesthetics. Feedback from SIDs was incorporated to ensure the applications were user-friendly."
              paragraphs1DesktopAlignLePosition="unset"
              paragraphs1DesktopAlignLeWidth="29.25rem"
              paragraphs1DesktopAlignLeMaxWidth="29.25rem"
              paragraphs1DesktopAlignLeFlex="unset"
              paragraphs1DesktopAlignLeAlignSelf="unset"
              paragraphs1DesktopAlignLeMinWidth="unset"
              headingFontSize="32px"
              headingLineHeight="2.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphFontSize="15px"
              paragraphFontWeight="unset"
            />
            <div className={styles.wrapper7}>
              <Paragraphs1DesktopAlignLe
                sectionTitle="Concept Development and Team Collaboration"
                gameDescription="With our concepts of game flows in place, we facilitated another workshop within our development team. This workshop allowed team members to raise questions, voice concerns, and share ideas, fostering a collaborative environment."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="1"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="unset"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
              <Paragraphs1DesktopAlignLe
                sectionTitle="Wireframes and Design Development"
                gameDescription="Once the initial concept was approved by the betting department, we proceeded to develop wireframes and designs for the apps. We consulted our statisticians periodically during this phase to ensure accuracy and alignment with user needs. This was crucial as we had to get everything right for the set launch date."
                paragraphs1DesktopAlignLePosition="unset"
                paragraphs1DesktopAlignLeWidth="unset"
                paragraphs1DesktopAlignLeMaxWidth="29.25rem"
                paragraphs1DesktopAlignLeFlex="1"
                paragraphs1DesktopAlignLeAlignSelf="unset"
                paragraphs1DesktopAlignLeMinWidth="unset"
                headingFontSize="20px"
                headingLineHeight="1.75rem"
                headingFontWeight="unset"
                paragraphLineHeight="1.44rem"
                paragraphFontSize="15px"
                paragraphFontWeight="unset"
              />
            </div>
            <Paragraphs1DesktopAlignLe
              sectionTitle="Tools and Skills Used"
              paragraphs1DesktopAlignLePosition="unset"
              paragraphs1DesktopAlignLeWidth="29.25rem"
              paragraphs1DesktopAlignLeMaxWidth="29.25rem"
              paragraphs1DesktopAlignLeFlex="unset"
              paragraphs1DesktopAlignLeAlignSelf="unset"
              paragraphs1DesktopAlignLeMinWidth="unset"
              headingFontSize="32px"
              headingLineHeight="2.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphFontSize="15px"
              paragraphFontWeight="unset"
            />
            <Paragraphs1DesktopAlignLe
              sectionTitle="Main Activities"
              paragraphs1DesktopAlignLePosition="unset"
              paragraphs1DesktopAlignLeWidth="29.25rem"
              paragraphs1DesktopAlignLeMaxWidth="29.25rem"
              paragraphs1DesktopAlignLeFlex="unset"
              paragraphs1DesktopAlignLeAlignSelf="unset"
              paragraphs1DesktopAlignLeMinWidth="unset"
              headingFontSize="32px"
              headingLineHeight="2.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphFontSize="15px"
              paragraphFontWeight="unset"
            />
          </div>
        </div>
        <SectionFluidImageTwice
          iMGLeft="/img-left1@2x.png"
          iMGRight="/img-right1@2x.png"
          caption="Stickies on the left and stickies on the right. Stickies were posted everywhere"
          sectionFluidImageHeight="42.06rem"
        />
        <div className={styles.sectionTheProcess}>
          <div className={styles.wrapper1}>
            <div className={styles.content4}>
              <div className={styles.heading2}>Solutions</div>
              <div className={styles.paragraph7}>
                <ul className={styles.uxDesignUserResearchUsabil}>
                  <li className={styles.uxDesign}>UX Design</li>
                  <li className={styles.uxDesign}>User Research</li>
                  <li className={styles.uxDesign}>Usability Testing</li>
                  <li className={styles.uxDesign}>Stakeholder Management</li>
                  <li className={styles.uxDesign}>Project Management</li>
                  <li className={styles.uxDesign}>Documentation</li>
                  <li className={styles.uxDesign}>Collaboration</li>
                  <li className={styles.uxDesign}>Wireframing</li>
                  <li>Prototyping</li>
                </ul>
              </div>
            </div>
            <Paragraphs2DesktopAlignLe
              heading="American Football LiveStats"
              paragraph="The AFLS project was a complex endeavor that required us to navigate numerous challenges. We were tasked with understanding a completely new sport, meeting tight deadlines, and satisfying various stakeholders, all with a team of just ten people. The project required us to balance the needs of the client, the betting division, and our target users - the statisticians. This was no easy task, as multiple stakeholders had their own personal agendas that could potentially pull the project in different directions."
              paragraph1="One of the unique solutions we developed for AFLS was a calculator concept for entering player numbers. This feature was based on user feedback and was well-received by the statisticians. However, it was just one of many innovative solutions we developed to meet the unique challenges of this project."
              paragraphs2DesktopAlignLePosition="unset"
              paragraphs2DesktopAlignLeWidth="29.25rem"
              paragraphs2DesktopAlignLeMaxWidth="29.25rem"
              paragraphs2DesktopAlignLeAlignSelf="unset"
              headingFontSize="32px"
              headingLineHeight="2.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphLineHeight1="1.44rem"
            />
          </div>
        </div>
        <SectionFluidImage
          iMG="/img5@2x.png"
          caption="One of the concepts born in IceHockey LiveStats workshop"
          sectionFluidImageHeight="42.06rem"
        />
        <div className={styles.sectionProjectOverview}>
          <div className={styles.wrapper9}>
            <div className={styles.content6}>
              <div className={styles.heading6}>Ice Hockey LiveStats</div>
              <div className={styles.paragraph1}>
                Ice hockey, while not entirely new to our team, presented its
                own unique set of challenges. We had to thoroughly comprehend
                the intricate details of the sport's rules and exceptions.
                Fortunately, our Project Leader's professional ice hockey
                experience greatly aided our understanding and navigation of
                these complexities.
              </div>
              <div className={styles.paragraph1}>
                Our approach to the IHLS project mirrored our previous efforts,
                involving the conduct of workshops, research, and ideation
                phases for different user flows. We identified various risk
                touch-points that required careful review and continuously
                worked on improving existing user flows.
              </div>
              <div className={styles.paragraph1}>
                The game itself posed several challenges, such as accurately
                maintaining the time clock and tracking player numbers on the
                pitch. Despite these hurdles, our team was able to devise
                effective solutions that proved beneficial in live games,
                demonstrating our ability to adapt and innovate in the face of
                challenges.
              </div>
            </div>
          </div>
        </div>
        <SectionFluidImageTwice
          iMGLeft="/img-left2@2x.png"
          iMGRight="/img-right2@2x.png"
          caption="Axure prototypes were used heavily for usability testing and helped immensely to empathise with users"
          sectionFluidImageHeight="31.25rem"
        />
        <div className={styles.sectionProjectOverview}>
          <div className={styles.wrapper10}>
            <div className={styles.content4}>
              <div className={styles.heading6}>LiveStats Family</div>
              <div className={styles.paragraph1}>
                In my previous role, I was entrusted with the responsibility of
                overseeing the User Experience and Strategy for the entire
                LiveStats family, which encompassed apps for Football,
                Volleyball, and Basketball. This role involved tasks such as
                mapping out user journeys, defining components, and implementing
                accessibility patterns, all aimed at ensuring a consistent user
                experience across all applications.
              </div>
              <div className={styles.paragraph1}>
                One of the significant challenges I encountered was ensuring
                alignment of various elements, such as the game clock and roster
                building, tailored to each specific sport. To overcome this, we
                devised a design system and meticulously mapped experiences
                across applications. This strategic approach guaranteed maximum
                consistency in user flows across all applications.
              </div>
              <div className={styles.paragraph1}>
                A notable accomplishment was the successful launch and
                streamlining of this process for future projects, which
                demonstrated our efficiency in meeting deadlines and designing
                effective apps. In my role, I also had to think creatively when
                introducing users to new concepts and collaborate with other
                teams to avoid conflicts during development.
              </div>
              <div className={styles.paragraph1}>
                As a result of our efforts, the LiveStats family underwent a
                noticeable improvement in its user interface, enhancing
                readability and usability. This work on the LiveStats family was
                in line with the overall goals and objectives of Genius Sports,
                as LiveStats serves as the core of the company, providing data
                for the betting department and generating significant revenue.
              </div>
            </div>
          </div>
        </div>
        <SectionFluidImage
          iMG="/img@2x.png"
          caption="One of the concepts born in IceHockey LiveStats workshop"
          sectionFluidImageHeight="51.25rem"
        />
        <div className={styles.sectionTheProcess}>
          <div className={styles.wrapper11}>
            <Paragraphs2DesktopAlignLe
              heading="Results and Conclusion"
              paragraph="The projects resulted in the creation of high-fidelity prototypes using Axure 9, which allowed for thorough testing and valuable user feedback. These prototypes were almost as functional as the final applications, providing us with a robust platform for user testing."
              paragraph1="The LiveStats projects showcase my ability to design and implement user-centered features in a fast-paced, data-driven environment. My skills in user research, iterative design, and project management were critical to the success of these projects. The experience also highlighted my ability to navigate complex stakeholder landscapes and balance diverse needs to deliver solutions that satisfy all parties involved."
              paragraphs2DesktopAlignLePosition="unset"
              paragraphs2DesktopAlignLeWidth="unset"
              paragraphs2DesktopAlignLeMaxWidth="29.25rem"
              paragraphs2DesktopAlignLeAlignSelf="stretch"
              headingFontSize="32px"
              headingLineHeight="2.5rem"
              headingFontWeight="300"
              paragraphLineHeight="1.44rem"
              paragraphLineHeight1="1.44rem"
            />
          </div>
        </div>
        <SectionGradientImage />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectGeniusSports1;
