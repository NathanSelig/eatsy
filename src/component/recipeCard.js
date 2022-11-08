import React from 'react'
import { Box, Image, list, Text } from "@chakra-ui/react"
const RecipeCard = ({ recipe }) => {



    const fancySlice = (string) => {
        const firstPunc = string.indexOf('.')
        return string.substring(0, firstPunc + 1)
    }

    const topTags = recipe.tags.slice(0, 3)

    return (
        <Box p={2} width='300px' shadow='md' maxW='sm' borderRadius='2xl' overflow='hidden'>
            <Text fontSize='2xl' as='b'>{recipe.name}</Text>
            <Image boxSize='250px' objectFit='cover' src={recipe.thumbnail_url}></Image>
            <ul>{topTags.map(tag =>
                <li>{tag.display_name}</li>)}
            </ul>
        </Box>
    )
}


export default RecipeCard