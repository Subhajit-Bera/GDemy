import React from 'react'
import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';


const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        {/* In case of smaller screen , components will not overflow the box thats why minH is set */}
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading
                        size="md"
                        textTransform={'uppercase'}
                        textAlign={['center', 'left']}
                        color={'red.400'}
                    >
                        Join our community
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py="2">
                        <Input
                            placeholder="Enter Email Here..."
                            border={'none'}
                            borderRadius="none"
                            outline={'none'}
                            focusBorderColor="none"
                        />
                        <Button
                            p={'0'}
                            colorScheme={'red'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack
                    w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'} color={'red.500'}>
                        gDEMY
                    </Heading>
                    <Text>All rights received</Text>
                </VStack>

                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} color={'red.400'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://www.linkedin.com/in/subhajit-bera-a76a1b207/">
                            LinkedIN
                        </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://www.instagram.com/subhajit_bera_/">
                            Instagram
                        </a>
                    </Button>

                    <Button variant={'link'} colorScheme={'white'}>
                        <a target={'black'} href="https://github.com/Subhajit-Bera">
                            Github
                        </a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer