import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'


export default function Footer() {
    return (
        <Box
            boxSize={'-moz-max-content'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                h={'24'}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Stack direction={'row'} spacing={6}>
                    <Link href={'/'}>Home</Link>
                </Stack>
                <Text>© 2022 Nathan Selig. All rights reserved</Text>
            </Container>
        </Box>
    )
}