import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.css'

function contactForm() {
  return (
    <Layout>
        {/* <form>

            
        </form> */}
        <h2 className={styles.contact_link}>
          <a href="https://www.linkedin.com/in/1uisromero/" target="_blank">LinkedIn</a>
        </h2>
    </Layout>
  )
}

export default contactForm
