import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>about this project</h1>
            <p>this is a react app for test react-router-dom</p>
            <p>v6</p>
            <p><Link to="/">Back to home</Link></p>
            
        </div>
    </Card>
  )
}

export default AboutPage