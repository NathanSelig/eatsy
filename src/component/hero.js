import React from 'react'
import { Flex, Image } from '@chakra-ui/react'


const Hero = () => {
    return (

        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Image marginLeft={'1.5'} marginBottom={'-5'} src='/logo_hero.png' alt='logo' />
        </Flex>
    )
}

export default Hero