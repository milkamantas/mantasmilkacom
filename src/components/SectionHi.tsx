import styles from "./SectionHi.module.css";
import { FunctionComponent } from "react";
import Logo from "../components/Logo";
import Section from "../components/Section";


export type SectionHi = {
    isOpen?: boolean;
  };

const SectionHi: FunctionComponent = () => {
    return (
      <Section name="Hi" type="wrapper" flexDirection="row">
        <div className={styles.content}>
          <div className={styles.paragraph}>
            <h1 id="HiTitle">
              Hi there!
            </h1>
            <p>
              I'm a product designer focused on creating seamless user
              experiences that elevate brands.
            </p>
            <p>
              With roots in front-end development, I'm really into taking
              products to the next level. My design process is all about
              digging into data-backed user research, making quick iterations,
              and crafting visually appealing UI that’s centered around the
              user.
            </p>
            <p>
              Years in the design field have taught me what can trip up
              creative solutions from aligning with business objectives. I'm a
              firm believer in focusing on UX to tackle these issues, making
              sure the work is not just effective and good-looking, but truly
              enhances how people interact with it.
            </p>
            <p>
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
            <h3>Companies</h3>
            <div className={styles.logoul}>
              <Logo image="/rectangle-5@2x.png" />
              <Logo image="/rectangle-51@2x.png" />
              <Logo image="/rectangle-52@2x.png" />
              <Logo image="/rectangle-53@2x.png" />
              <Logo image="/rectangle-54@2x.png" />
            </div>
          </div>
        </div>
      </Section>
    )
};

export default SectionHi;