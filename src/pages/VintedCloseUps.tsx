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

const ProjectVintedCloseUps: FunctionComponent = () => {
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
				title="Close-Ups"
				subTitle="Vinted"
				heroColor="#ffffff"
				heroBackgroundImage="/Vinted-Hero2.png"
				fullHeight={true}
			/>
			<div className={styles.main}>
				<Section name="gsIntro" type="wrapper" flexDirection="row">
					<div className={styles.content}>
						<h1>Close-Ups</h1>
						<h4>
							Elevating Online Shopping with Immersive Visual Experiences.
						</h4>
					</div>
					<div className={styles.content}>
						<p>
							Close-Ups is a feature introduced in Vinted’s app to enhance users’ shopping experience by offering a closer view of listed items through a story-like video format. This feature was developed to boost user engagement and provide a more immersive shopping experience. By allowing users to showcase their items through short videos, Close-Ups elevates the visual appeal of listings and fosters interaction between buyers and sellers on the platform.
						</p>
					</div>
				</Section>
				<SectionFluidImage
					iMG="/close-ups_in-action.png"
					caption=" "
				/>
				<Section name="gsOverview" type="wrapper" flexDirection="column">
					<div className={`${styles.content} ${styles.inside} ${styles.left}`}>
						<h2>Overview</h2>
						<p>
							The Close-Ups feature was introduced as an innovative way to enhance user engagement on our platform by allowing users to upload short videos of their listings. This video-centric approach aimed to provide a more immersive and detailed view of items, bridging the gap between online shopping and the tactile experience of traditional shopping.
						</p>
						<p>
							After the initial launch, we recognized the potential of Close-Ups to drive both buying and selling activity. While the first iteration primarily focused on the buyer side, the second iteration, Close-Ups V2, shifted its emphasis towards lister engagement. This pivot was informed by our research, which indicated that seller success and engagement were intrinsically linked, with successful sales leading to more engaged listers.
						</p>
						<p>
							To address the challenges and pain points identified in the first iteration, we embarked on a collaborative approach, partnering with third-party tools such as Img.ly for video creation, Soundstripe for royalty-free music, and Hive for AI-driven content moderation. These collaborations were pivotal in enhancing the user experience, simplifying the video creation process, and ensuring content quality.
						</p>
					</div>
					<div className={`${styles.content} ${styles.inside} ${styles.right}`}>
						<p>
							Furthermore, the scale of the Close-Ups V2 test was significantly expanded, targeting approximately 9 million users in the French market. This ambitious scale aimed to gather a more comprehensive set of data, with the goal of collecting over 65k videos.
						</p>
						<p>
							Another notable challenge was ensuring that each video was linked to a specific item within the selected categories. This requirement influenced our decision to maintain the video upload process from the item page, ensuring accuracy and relevance.
						</p>
						<p>
							Lastly, to ensure the content's relevance to users, we devised a logic for personalized video feed distribution. This approach was designed to enhance user engagement by presenting videos that matched their preferences and interests.

						</p>
						<p>
							Through these iterative improvements and a user-centric approach, Close-Ups V2 aimed to redefine the online shopping experience, making it more interactive, engaging, and tailored to user needs.
						</p>
					</div>
				</Section>
				<SectionGradientQuote gradientType="vinted" quote="Close-Ups transforms the online shopping experience, bringing listings to life with dynamic visuals. In the digital age of e-commerce, it sets the benchmark for immersive and authentic product showcases." />
				<Section name="gsChallenges" type="wrapper" flexDirection="column">
					<div className={`${styles.content} ${styles.inside}`}>
						<h2>Challenges</h2>
						<p>
							The development of the Close-Ups feature was filled with challenges, both anticipated and unforeseen. These challenges spanned across user engagement, technical intricacies, content quality, and localization.
						</p>
					</div>
					<div className={`${styles.content} ${styles.wrapped}`}>
						<div className={styles.wrappedSection}>
							<h4>User Engagement and Expectations</h4>
							<p>
								The initial launch of Close-Ups was met with enthusiasm, but the challenge lay in consistently meeting and exceeding user expectations. Many users hoped that the Close-Ups would amplify their sales and profile's visibility, but not everyone observed a noticeable change.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Technical and Content Quality Challenges</h4>
							<p>
								The initial moderation of videos was manual, relying heavily on the content quality team. Recognizing the importance of swift moderation for a seamless user experience, plans were set in motion to incorporate AI moderation tools in the MVP v2.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>
								Localization and Cultural Nuances
							</h4>
							<p>
								With the MVP v2 targeting the French market, localization became a paramount concern. The name "Close-Ups" was localized to "Aperçus" for the French audience, ensuring that the feature's essence was effectively communicated across different languages.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Iterative Development and User Feedback</h4>
							<p>
								The transition from the first iteration to Close-Ups V2 was informed by user feedback and the challenges encountered. The MVP v2 aimed to address key pain points, such as the video submission process, content relevance, and user understanding of the feature's benefits. The goal was not only to enhance the user experience but also to gather actionable insights that would shape the feature's future direction.
							</p>
						</div>
						<p className={styles.left}>
							By addressing these challenges head-on and continuously iterating based on feedback and insights, the Close-Ups feature aimed to redefine the online shopping experience, making it more interactive, engaging, and tailored to user needs.
						</p>
						<div>
							<h3 className={styles.wrappedSection}>My Role</h3>
							<p className={styles.left}>
								As a Product Designer at Vinted, I was deeply involved in the conceptualization, design, and iterative development of the Close-Ups feature. My responsibilities spanned from initial ideation, user research, prototyping, to analyzing user feedback and iterating on the design. Collaborating closely with various stakeholders, I ensured that the feature not only aligned with user needs but also met business objectives.
							</p>
						</div>
					</div>
				</Section>
				<SectionFluidImage
					videoSrc="/prototype_1.mp4"
					caption="Very first prototype done to test with stakeholders"
				/>
				<Section name="gsProcess" type="wrapper" flexDirection="column">
					<div className={styles.content}>
						<h2>Process</h2>
					</div>
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>Research and Iteration</h3>
						<p>
							After the initial launch of Close-Ups, we conducted a thorough post-test analysis, combining both quantitative and qualitative data. This research phase was crucial in understanding the potential of the Close-Ups feature and identifying areas for improvement.
						</p>
					</div>
					<div className={`${styles.content} ${styles.wrapped}`}>
						<div className={styles.wrappedSection}>
							<h4>Addressing Pain Points</h4>
							<p>
								The first iteration of Close-Ups provided us with valuable insights, but also highlighted several pain points. In the second iteration, we focused on addressing these issues, such as extending the video length, simplifying the video creation process, and introducing music options.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Collaboration with Third-Party Tools</h4>
							<p>
								To enhance the user experience and streamline the video submission process, we collaborated with third-party tools like Img.ly for video making & editing, Soundstripe for royalty-free music, and Hive for AI content moderation.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>User Education and Guidance</h4>
							<p>
								Recognizing the importance of user understanding, we introduced educational videos to explain the Close-Ups feature, guide users through the creation process, and offer tips for engaging content. This was supplemented with a dedicated Help Center entry to provide comprehensive support.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Personalization and User Relevance</h4>
							<p>
								To make the Close-Ups feed more relevant to users, we devised a logic to distribute videos based on user preferences. This ensured that users were exposed to content that matched their interests, enhancing engagement.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>User Feedback and Surveys</h4>
							<p>
								Post-test surveys were planned to target different user groups, allowing us to gather qualitative data. This feedback would be crucial in understanding user behavior, preferences, and areas of improvement.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Stakeholders Involved</h4>
							<ul>
								<li>Product and Development Teams</li>
								<li>Legal team</li>
								<li>Strategic team</li>
								<li>Third-party tool providers (Img.ly, Soundstripe, Hive)</li>
								<li>User Feedback and Survey participants</li>
							</ul>
							<p>
								Through this iterative and user-centric approach, we aimed to refine the Close-Ups feature, ensuring it met user needs and drove engagement on the platform.
							</p>
						</div>
					</div>
				</Section>
				<SectionFluidImage
					iMG="/close-ups_flow.png"
					caption="Workflows developed for buyer, seller sides as well as content moderation and launch processes"
				/>
				<Section name="gsDesign" type="wrapper" flexDirection="column">
					<div className={`${styles.content} ${styles.inside}`}>
						<h2>Design</h2>
						<p>
							The Close-Ups feature presented unique design challenges. Unlike static images, videos offer dynamic content, requiring a different approach to user interface and experience. The main objective with this feature was to let users showcase their items in a different medium, showing material and item properties.
						</p>
					</div>
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>Approach</h3>
						<p>
							The design had to cater to both listers, who would upload videos showcasing their items, and buyers, who would view these videos to make informed purchasing decisions. Addressing pain points from the initial test, the design for Close-Ups V2 incorporated tools like Img.ly for simplified video creation and Soundstripe for adding royalty-free music.
						</p>
					</div>
					<div className={`${styles.content} ${styles.wrapped}`}>
						<div className={styles.wrappedSection}>
							<h4>Concept Development and Team Collaboration</h4>
							<p>
								To get the most out of our quick iterations, ideas were brought to company-wide designers to get feedback and improve on that. Besides that, we openly explored which 3rd party tools could help us launch our product better, faster, and stronger.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>MVP v1 & v2</h4>
							<p>
								The iterative development of Close-Ups, starting with MVP v1 and progressing to MVP v2, was a testament to Vinted's commitment to continuous improvement. Each iteration was developed based on user feedback, ensuring the feature was aligned with user needs. From introducing a calculator concept for entering player numbers in MVP v1 to refining the user interface in MVP v2, each iteration brought enhancements that elevated the user experience.
							</p>
						</div>
						<div className={styles.wrappedSection}>
							<h4>Tools and Skills Used</h4>
							<ul>
								<li>Origami Studio for initial prototyping</li>
								<li>Whimsical for flowcharting</li>
								<li>Figma for design and prototyping</li>
								<li>Google documents for documentation</li>
							</ul>
						</div>
					</div>
				</Section>
				<SectionFluidImage
					iMG="/seller-flow-v2.png"
					caption="Updated and improved upload flow"
				/>
				<Section name="gsAFLS" type="wrapper" flexDirection="column">
					<div className={styles.content}>
						<h2>Hypotheses</h2>
						<p>
							The Close-Ups V2 test was centered around four hypotheses, with the seller side being the primary focus. These hypotheses were based on the main drivers of user engagement: selling success & buying activity. Our research showed that members who have more sessions, list more items, make more purchases, and achieve more sales are more likely to maintain higher levels of engagement. Seller's success is strongly linked with their likelihood of continuing to list items in the long term. Likewise, engagement as a buyer, in terms of items bought or favored, is also associated with long-term engagement as a lister.
						</p>
					</div>
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>Primary Hypothesis</h3>
						<p>
							<b>H1 (seller side)</b>: Close-Ups increases listers engagement by increasing buyer engagement, because more success in selling (engaging and boosted content) leads to more engaged listers. Also, new functionality might attract different segments of listers.
						</p>
					</div>
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>Secondary Hypotheses</h3>
						<p>
							<b>H2 (buyer side)</b>: Video content increases engagement in buying activity, so we could have more buyers and increase pGMV.
						</p>
						<p>
							<b>H3 (buyer side)</b>: Video content increases engagement in buying activity, so buyers could buy more. Close-Ups boost buyer purchase behavior thus increasing purchases.
						</p>
						<p>
							<b>H4 (seller side)</b>: Video content helps to sell items.
						</p>
					</div>
				</Section>
				<SectionFluidImage
					videoSrc="/onboarding.mp4"
					caption="Onboarding video showing off various features for members"
				/>
				<Section name="gsIHLS" type="wrapper" flexDirection="column">
					<div className={`${styles.content} ${styles.inside}`}>
						<h3>Results and Conclusion</h3>
						<p>
							The introduction of Close-Ups was a significant step in Vinted's journey to enhance the online shopping experience. The A/B test results provided valuable insights into the feature's impact on user engagement and retention. While the STR (Sell Through Rate) for videos showed a substantial increase, indicating the potential of video content in enhancing sales, other crucial metrics, such as the Combined Lister Retention in the third week, experienced a significant decrease.
						</p>
						<p>
							These results indicated that the Close-Ups feature, in its current format, might not be the optimal solution to improve engagement and retention as initially aimed. The data suggested that while users appreciated the video format, the specific implementation of Close-Ups might not have resonated as effectively as anticipated.
						</p>
						<p>
							However, the positive impact observed from the use of video content cannot be overlooked. This suggests that there's potential in retaining the video format on the platform, albeit in a different format or implementation. The challenge moving forward would be to harness the evident appeal of video content while ensuring it aligns seamlessly with user engagement and retention goals.
						</p>
						<p>
							In conclusion, while Close-Ups in its current iteration might not continue, the insights gained have paved the way for future innovations at Vinted, emphasizing the importance of video content in enhancing the user experience.
						</p>
					</div>
				</Section>

			</div>
			<Footer />
		</main>
	);
};

export default ProjectVintedCloseUps;
