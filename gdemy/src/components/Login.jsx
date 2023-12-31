import React from 'react'
import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form>
                <VStack
                    alignItems={'stretch'}
                    spacing={'8'}
                    w={['full', '96']}
                    m={'auto'}
                    my={'16'}
                >
                    <Heading color={'red'} alignSelf={'center'}>Welcome Back</Heading>
                    <Input
                        required
                        placeholder={'Enter your email'}
                        type={'email'}
                        focusBorderColor={'red'}
                    />

                    <Input
                        placeholder={'Password'}
                        type={'password'}
                        required
                        focusBorderColor={'red'}
                    />

                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/forgetpassword'}>Forget Password?</Link>
                    </Button>

                    <Button colorScheme={'red'} type={'submit'}>
                        Log In
                    </Button>

                    <Text textAlign={'right'}>
                        New User?{' '}
                        <Button variant={'link'} colorScheme={'red'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Login