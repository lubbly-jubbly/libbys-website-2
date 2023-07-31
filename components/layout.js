import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./layout.module.css";
// import sound from "../public/sounds/crumpling-paper.mp3";
const Layout = ({
  children,
  title = "Libby's Portfolio",
  description = "",
}) => {
  const [funMode, setFunMode] = useState(true);

  //   const play = () => {
  //     new Audio(sound).play();
  //   };
  //   const cvAudioRef = React.useRef(null);
  //   const workAudioRef = React.useRef(null);

  //   const playAudio = (audioRef) => {
  //     audioRef.current.play();
  //   };
  //   const stopAudio = (audioRef) => {
  //     audioRef.current.pause();
  //   };

  const audioRef = React.useRef(null);

  const paperAudioUrl = "/sounds/crumpling-paper.mp3";
  const briefcaseAudioUrl = "/sounds/briefcase-opening.mp3";
  const telephoneAudioUrl = "/sounds/telephone-ringing.mp3";

  const playAudio = (audioPath) => {
    audioRef.current.src = audioPath;
    audioRef.current.play();
  };

  const stopAudio = (audioPath) => {
    audioRef.current.src = audioPath;
    audioRef.current.pause();
  };

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="icon" href="/images/woodstock.png" />
      </Head>
      <main className={styles.layout}>
        <div>
          <label>
            <input
              type="checkbox"
              name="myCheckbox"
              onClick={() => setFunMode(!funMode)}
            />
          </label>
          <div
            className={
              "d-flex justify-content-center " +
              styles.libbyRear +
              (funMode ? " header-font" : " primary-clean-font")
            }
          >
            Libby Rear
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/pdfs/CV.pdf" target="_blank">
                <button
                  className={styles.cvLink}
                  onMouseEnter={() => playAudio(paperAudioUrl)}
                  onMouseLeave={() => stopAudio(paperAudioUrl)}
                >
                  CV
                </button>
              </Link>
            </li>
            <li>
              <Link href="/pdfs/CV.pdf" target="_blank">
                <button
                  className={styles.workLink}
                  onMouseEnter={() => playAudio(briefcaseAudioUrl)}
                  onMouseLeave={() => stopAudio(briefcaseAudioUrl)}
                >
                  My Work
                </button>
              </Link>
            </li>
            <li>
              <Link href="../pages/contact">
                <button
                  className={styles.contactLink}
                  onMouseEnter={() => playAudio(telephoneAudioUrl)}
                  onMouseLeave={() => stopAudio(telephoneAudioUrl)}
                >
                  Contact Me
                </button>
              </Link>
            </li>
          </ul>
          <audio loop ref={audioRef}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </nav>

        <div className={funMode ? "primary-fun-font" : "primary-clean-font"}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
