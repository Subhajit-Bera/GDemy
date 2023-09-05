import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,   //flex direction is vertical
    HStack,  //flex direction is horizontal
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                zIndex={'overlay'}
                pos={'fixed'}
                top={'4'}  //4 unit margin from top
                left={'4'} //4 unit margin from left
                colorScheme="red"
                p={'0'}   //padding
                w={'10'}  //width
                h={'10'}  //height
                borderRadius={'full'}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>  
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader color="red" letterSpacing={8} fontSize={25} >gDEMY</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button
                                onClick={onClose}    //onclick={onClose} ->when we click a button drawer wil close. 
                                // variant={'ghost'}
                                colorScheme={'red'}
                            >
                                <Link to={'/'}>Home</Link>
                            </Button>

                            <Button
                                onClick={onClose}
                                // variant={'ghost'}
                                colorScheme={'red'}
                            >
                                <Link to={'/videos'}>Videos</Link>
                            </Button>

                            <Button
                                onClick={onClose}
                                // variant={'ghost'}
                                colorScheme={'red'}
                            >
                                <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>

                            <Button
                                onClick={onClose}
                                // variant={'ghost'}
                                colorScheme={'red'}
                            >
                                <Link to={'/upload'}>Upload Video</Link>
                            </Button>
                        </VStack>

                        <HStack
                            pos={'absolute'}
                            bottom={'10'}
                            left={'0'}
                            w={'full'}
                            justifyContent={'space-evenly'}
                        >
                            <Button onClick={onClose} colorScheme={'red'}>
                                <Link to={'/login'}>Log In</Link>
                            </Button>
                            <Button
                                onClick={onClose}
                                colorScheme={'red'}
                                variant={'outline'}
                            >
                                <Link to={'/signup'}>Sign Up</Link>
                            </Button>
                        </HStack>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Header;