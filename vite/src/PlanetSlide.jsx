// import { Carousel } from '@mantine/carousel';
import { Title, Image, Center } from '@mantine/core';
import viteLogo from '/vite.svg'

export default function PlanetSlide({ planet }) {

    return(
            <Center mih={'80vh'}>
                <Title order={1}>{planet.name}</Title>
                <Image w={400} src={viteLogo} />
            </Center>
    )
}