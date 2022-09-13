import React from 'react'
import { StyleSheetManager } from 'styled-components';
import Layout from '../../components/Layout'
import * as styles from "../../styles/projects.module.css";
import Cyborg from "../../images/cyborg_ai.png"

export default function Projects() {
  return (
    <Layout>
        <div className={styles.portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects I've built</h3>
        </div>
        <img src={Cyborg} alt="AI Generated Cyborg"/>
    </Layout>
  )
}
