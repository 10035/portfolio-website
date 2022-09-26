import React from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css";
import ProjectLogo from "../../images/tumtumlogo.png"
import { Link } from 'gatsby';

export default function Projects() {
  return (
    <Layout>

      <div className={styles.row}>
        <div className={styles.card}>
          <img src={ProjectLogo} alt="AI Generated Cyborg" style={{ width: '100%', borderRadius: '20px 20px 0px 0px' }}/>
          <p>Proident tempor ipsum reprehenderit ut nulla mollit adipisicing et sit consequat consectetur. Voluptate ex ex officia et fugiat ullamco veniam nulla. Dolore voluptate id consequat reprehenderit et eiusmod.</p>
          <div className={styles.links}>
            <a href="https://tumtumartistswebsitemaster.gatsbyjs.io/" target="_blank">Website</a>
            {/* <Link to="">Website </Link>
            <Link to="">Github</Link> */}
          </div>
        </div>
        <div className={styles.card}>
          <img src={ProjectLogo} alt="AI Generated Cyborg" style={{ width: '100%', borderRadius: '20px 20px 0px 0px' }}/>
          <p>Nostrud aliqua labore eu qui. Esse magna sunt ex quis aliqua ut irure nulla occaecat. Elit est laboris elit aliqua. Deserunt minim occaecat in quis occaecat id veniam aliqua irure non fugiat veniam anim.</p>
          <div className={styles.links}>
            <Link to="">Website</Link>
            <Link to="">Github</Link>
          </div>
        </div>
        <div className={styles.card}>
          <img src={ProjectLogo} alt="AI Generated Cyborg" style={{ width: '100%', borderRadius: '20px 20px 0px 0px' }}/>
          <p>Cupidatat enim cupidatat incididunt tempor. Est sint duis culpa est id esse dolor esse duis. Cillum dolore Lorem exercitation occaecat nostrud voluptate qui ut aliquip qui irure Lorem qui ipsum. Veniam et culpa eu aliqua.</p>
          <div className={styles.links}>
            <Link to="">Website</Link>
            <Link to="">Github</Link>
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
