import { Carousel } from '@mantine/carousel';
import { Title, Image, Center } from '@mantine/core';
import viteLogo from '/vite.svg'

export default function PlanetSlide({ planet }) {

    return(
        <Carousel.Slide display="flex" >
            <Center>
                <Title order={1}>{planet.name}</Title>
                <Image w={400} src={viteLogo} />
            </Center>
        </Carousel.Slide>
    )
}