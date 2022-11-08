import React from 'react'
import { Container, SimpleGrid, Input, Center } from '@chakra-ui/react'
import Nav from './component/header'
import Hero from './component/hero'
import { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeCard from './component/recipeCard'
import Footer from './component/footer'
import Similar from './component/similar'


function App() {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: { from: '0', size: '100', tags: 'under_30_minutes' },
    headers: {
      'X-RapidAPI-Key': '13fc0b4621msh3fd308fbd57e499p13fee0jsnf9fc413a321c',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  }

  const [recipes, setRecipes] = useState([])
  //gets api
  useEffect(() => {
    axios.request(options).then(function (response) {
      setRecipes(response.data.results)
      console.log('got responses')
    }).catch(function (error) {
      console.error(error)
    })
  }, [])

  const [search, setSearch] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState([])

  const handleChange = (event) => setSearch(event.target.value)

  //runs when search is changed
  useEffect(() => {
    console.log('changed to ', search)
    const regex = RegExp(search, 'i')
    const filtered = () => recipes.filter(recipe => recipe.name.match(regex))
    setFilteredRecipes(filtered)
    console.log(filteredRecipes)


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])


  return (
    <div>
      <Nav />
      <Hero />
      <Container centerContent >
        <Input focusBorderColor='teal' bg={'white'} placeholder='what are you craving?' size={'md'} value={search} onChange={handleChange} />
        <p>{search}</p>
          <SimpleGrid columns={[1, 2, 3]} spacingX={400}>
            {filteredRecipes.map(recipe =>
              <RecipeCard key={recipe.id} recipe={recipe} />
            )}
          </SimpleGrid>
      </Container>
      <Similar selected={filteredRecipes} allRecipes={recipes} />
      <Footer />
    </div>
  )
}

export default App
