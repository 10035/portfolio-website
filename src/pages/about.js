import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout>
        <main>
            <h1>A bit about me...</h1>
              <p>I love anything that involves creativity, learning and working with people. From Making music, writing software, and starting starting new projects.</p>
            <h2>My Interests at work</h2>
              <p>Working with a team to build something greater than ourselves that has the potential to transcend and perdure time.</p>
            <h2>My Interests out of work</h2>
              <p>Travel is good for the soul so I try to indulge. I also play instruments...mainly guitar but also some drums and piano. </p>
            <h2>Skills</h2>
              <p>Web Dev: Gatsby</p>
              <p>Mobile Dev: Flutter</p>
              <p>Front End: React</p>
              <p>Back End: Django, RoR</p>
            
            <p>Curious about what I've been working on? Go on, don't be shy → <Link to="/projects">Projects</Link></p>
            
        </main>
    </Layout>
  )
}



