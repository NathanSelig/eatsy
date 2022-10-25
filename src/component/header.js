import {
    Box,
    Flex,
    Stack,
} from '@chakra-ui/react'


export default function Nav() {
    return (
        <>
            <Box bg={'teal.200'} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}