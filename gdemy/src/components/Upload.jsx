import React from 'react'
import { Container, HStack, Input, VStack,Button } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
    return (
        <Container maxw={'container.xl'} h={'100vh'} p={'16'}>
            <VStack color={'red.500'} h={'full'} justifyContent={'center'}>
                <AiOutlineCloudUpload size={'10vmax'} />

                {/* Html form tag */}
                <form>
                    <HStack>

                        <Input
                            required
                            type={'file'}
                            css={{
                                '&::file-selector-button': {
                                    border: 'none',
                                    width: 'calc(100% + 36px)',
                                    height: '100%',
                                    marginLeft: '-18px',
                                    color: 'red',
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                },
                            }}
                        />
                        <Button colorScheme={'red'} type={'submit'}>
                            Upload
                        </Button>
                    </HStack>
                </form>
            </VStack>
        </Container>
    )
}

export default Upload;