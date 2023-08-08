import styles from "./SectionHi.module.css";
import { FunctionComponent } from "react";
import Logo from "../components/Logo";
import Section from "../components/Section";


export type SectionHi = {
    isOpen?: boolean;
  };

const SectionHi: FunctionComponent = () => {
    return (
      <Section name="Hi" type="wrapped">
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
      </Section>
    )
};

export default SectionHi;