import React from 'react'
import Header from './Header'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header title="RECIPES" bgClass="bg-image">
            <Button
                content="Search Recipe"
                color='green'
                as={Link} 
                to='/recipes'
            />
        </Header>
    </div>
  )
}
