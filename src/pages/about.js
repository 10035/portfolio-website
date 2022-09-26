import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout>
        <main>
            <h1>A bit about me...</h1>
              <p>Amet sint duis reprehenderit excepteur aliqua.</p>
            <h2>My Interests at work</h2>
              <p>Amet sint duis reprehenderit excepteur aliqua.</p>
            <h2>My Interests out of work</h2>
              <p>Amet sint duis reprehenderit excepteur aliqua.</p>
            <h2>Skills</h2>
              <p>Amet sint duis reprehenderit excepteur aliqua.</p>
            
            <p>Curious about what I've been working on? Go on, don't be shy → <Link to="/projects">Projects</Link></p>
            
        </main>
    </Layout>
  )
}



