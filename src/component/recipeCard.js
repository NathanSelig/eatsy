import React from 'react'
import { Box, Image, Link, Text } from "@chakra-ui/react"
const RecipeCard = ({ recipe }) => {

    const fancySlice = (string) => {
        const firstPunc = string.indexOf('.')
        return string.substring(0, firstPunc + 1)
    }

    return (
        <Box p={5} width = '300px' shadow='md' maxW='sm' borderRadius='2xl' overflow='hidden'>
            <Text fontSize='2xl' as='b'>{recipe.name}</Text>
            <Image boxSize='250px' objectFit='cover' src={recipe.thumbnail_url}></Image>
        </Box>
    )
}


export default RecipeCard