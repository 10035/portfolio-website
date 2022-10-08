import React from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css";
import ProjectLogoTumTum from "../../images/tumtumlogo.png"
import ProjectLogoBeWell from "../../images/bewellapp.png"
import ProjectLogoTopGoal from "../../images/topgoallogo.png"
import { Link } from 'gatsby';

export default function Projects() {
  return (
    <Layout>

      <div className={styles.row}>
        <div className={styles.card}>
          <img src={ProjectLogoTumTum} alt="TumTumArtists Logo" style={{ width: '100%', height: '60%', borderRadius: '20px 20px 0px 0px' }}/>
          <p>This is a static website built for TumTum Artists. A Music Company working with independent artists.</p>
          <p>I built it using GatsbyJS. The same framework used to built this portfolio website.</p>
          <p>I learned React and Graphql</p>
          <div className={styles.links}>
            <a href="https://tumtumartistswebsitemaster.gatsbyjs.io/" target="_blank">Website</a>
            <br></br>
            <br></br>
            <Link to="https://github.com/10035/tumtumartists-website">Github Repo</Link>
            {/* <Link to="">Website </Link>
            <Link to="">Github</Link> */}
          </div>
        </div>
        <div className={styles.card}>
          <img src={ProjectLogoBeWell} alt="Wellbeing App Logo" style={{ width: '100%', height: '60%', borderRadius: '20px 20px 0px 0px' }}/>
          <p>This is a mobile app built with Flutter</p>
          <p>The app is meant to help users improve their wellbeing by completing self-assessments, connect with other community members and book coaching sessions with recommended coaches based on self-assessments</p>
          <p>I talked to a few potential users, worked on Figma designs and ran some user testing with the figma prototype.</p>
          <p>This app is still in development. Please see the github repo to see latest release.</p>
          <p></p>
          <div className={styles.links}>
            <Link to="https://user-images.githubusercontent.com/51119134/193505828-2d4429dd-3830-475a-8436-2738e4335903.png" target="_blank">Website</Link>
            <br></br>
            <br></br>
            <Link to="https://github.com/10035/bewell_app">Github</Link>
          </div>
        </div>
        <div className={styles.card}>
          <img src={ProjectLogoTopGoal} alt="AI Generated Logo TopGoal App" style={{ width: '100%', height: '60%', borderRadius: '20px 20px 0px 0px' }}/>
          <p>This is a web app that I am building on Django</p>
          <p>This is the tool that helped me consistently work on my portfolio and I would love to share it with others having a hard time making their work public.</p>
          <p>It works similar to a task manager but the main purpose is to log the sessions worked on a specific goal.</p>
          <div className={styles.links}>
            <Link to="https://github.com/10035/top-goal-webapp" target="_blank">Website</Link>
            <br></br>
            <br></br>
            <Link to="https://github.com/10035/top-goal-webapp" target="_blank">Github</Link>
          </div>
        </div>
      </div>
        
          {/* <card className={styles.card}>
            <a href="">Project Image</a>
            <img src={ProjectLogo} alt="AI Generated Cyborg"/>
              <p>Dolore amet in consectetur elit incididunt elit tempor. Cupidatat quis et mollit deserunt nisi in irure laborum fugiat velit. Magna mollit tempor in adipisicing eu. Enim qui deserunt ipsum amet Lorem sit officia mollit. Irure id pariatur ad et sunt ut elit velit officia reprehenderit adipisicing aliquip sint. Dolor cupidatat occaecat ad veniam. Aute duis incididunt dolor adipisicing eu do eiusmod aliqua proident irure eiusmod et velit.</p>
              <div className="links">
                <a href="">Website</a>
                <a href="">Github Repo</a>
              </div>
          </card> */}
        
        {/* <h2>Project 1:</h2>
        <h2>Project 2:</h2>
        <h2>Project 3:</h2>
        
        <div className={styles.portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects I've built</h3>
        </div>
        <img src={Cyborg} alt="AI Generated Cyborg"/>
        <img src={Cyborg} alt="AI Generated Cyborg"/>
        <img src={Cyborg} alt="AI Generated Cyborg"/> */}
    </Layout>
  )
}
