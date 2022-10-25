import React from 'react'
import { Box, Container, Input } from '@chakra-ui/react'
import SmallWithNavigation from './component/footer'
import Nav from './component/header'
import Hero from './component/hero'
import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {
  //TODO make call to tasty api store data
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: { from: '0', size: '20', tags: 'under_30_minutes' },
    headers: {
      'X-RapidAPI-Key': '13fc0b4621msh3fd308fbd57e499p13fee0jsnf9fc413a321c',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  }
  let recipes = []

  useEffect(() => {
    axios.request(options).then(function (response) {
      recipes = response.data.results
      console.log(recipes)
    }).catch(function (error) {
      console.error(error)
    })
  }, [])

  const [search, setSearch] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const handleChange = (event) => {
    setSearch(event.target.value)
    if (search) {
      const regex = new RegExp(search, 'i')
      const filtered = () => recipes.filter(recipe => recipe.name.match(regex))
      setFilteredRecipes(filtered)
      console.log(filteredRecipes)
    }
  }
  return (
    <div>
      <Nav />
      <Hero />
      <Container centerContent >
        <Input focusBorderColor='teal' bg={'white'} placeholder='what are you craving?' size={'md'} value={search} onChange={handleChange} />
        <p>{search}</p>
      </Container>

      <SmallWithNavigation />
    </div>
  )
}

export default App
