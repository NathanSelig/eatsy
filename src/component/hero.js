import React from 'react'
import { Flex, Image } from '@chakra-ui/react'


const Hero = () => {
    return (

        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Image src='./public/logo_hero.png' alt='logo' />
        </Flex>
    )
}

export default Hero