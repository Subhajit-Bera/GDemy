import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = { //Custom style object ,which is used as spread operator below
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};
  

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m="auto"
                >
                    Services
                </Heading>

                <Stack
                    h="full"
                    p={'4'}
                    alignItems={'center'} 
                    direction={['column', 'row']}  //[for small screen , for big screen] we can manage responsiveness very easily
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(236deg)'} />
                    

                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'190%'}
                        p={['4', '16']}
                        textAlign={'center'}
                    >
                        We are actively involved in the esports scene, managing professional esports teams and hosting competitive gaming events. Our goal is to promote esports as a legitimate and exciting form of entertainment.We foster a vibrant gaming community by organizing tournaments, meetups, and online forums where gamers can connect, share experiences, and engage in friendly competition.We offer educational programs and workshops for aspiring games and esports enthusiasts. Our commitment to education extends to nurturing future talent in the gaming industry.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}> 
          zzz
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          zzzzz
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          zzzz
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          zzzz
        </Heading>
      </Box>
    </Carousel>
  );
  
export default Home;