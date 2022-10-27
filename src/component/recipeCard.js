import React from 'react'
import { Box, Image, Link, Text } from "@chakra-ui/react"
const RecipeCard = ({ recipe }) => {
    return (
        <Box p={4} display={{ md: 'flex' }}>
            <Box flexShrink={0}>
                <Image
                    borderRadius='lg'
                    width={{ md: 40 }}
                    src={recipe.thumbnail_url}
                    alt='video thumbnail'
                />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                <Text
                    fontWeight='bold'
                    textTransform='uppercase'
                    fontSize='sm'
                    letterSpacing='wide'
                    color='teal.600'
                >
                    {recipe.seo_title}
                </Text>
                <Text
                    mt={1}
                    display='block'
                    fontSize='lg'
                    lineHeight='normal'
                    fontWeight='semibold'
                    href='#'
                >
                    {recipe.name}
                </Text>
                <Text mt={2} color='gray.500'>
                    {recipe.description}
                </Text>
            </Box>
        </Box>
    )
}


export default RecipeCard