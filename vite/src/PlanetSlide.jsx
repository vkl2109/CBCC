// import { Carousel } from '@mantine/carousel';
import { useState } from 'react'
import { HoverCard, Title, Text, Image, Center, Stack, Tooltip, RingProgress } from '@mantine/core';
import classes from './planet.module.css'

export default function PlanetSlide({ planet }) {
    const [ flip, setFlip ] = useState(true)

    const imgPath = `/${planet.name}.png`

    const imgURL = new URL(imgPath, import.meta.url).href

    console.log(imgURL)
    
    const normalizeData = (100 * (planet.surfaceTemperatureC.mean + 200))/664

    return(
            <Stack 
                mih={'75vh'} 
                display='flex' 
                pt={48} 
                >
                <Title order={1} c='white'>{planet.name}</Title>
                <Center mih={'75vh'} className={classes.baseCard}>
                    <Center 
                        className={classes.baseCardInner}
                        style={{transform: flip ? "scale(1)" : "rotateY(180deg)"}}
                        onClick={()=>setFlip(flip => !flip)}
                        >
                        <Center className={classes.baseCardFront}>
                            <Tooltip label='click me!'>
                                <Image w={300} src={imgURL} />
                            </Tooltip>
                        </Center>
                        <Center className={classes.baseCardBack}>
                            <HoverCard>
                                <HoverCard.Target>
                                    <RingProgress
                                        sections={[{ value: normalizeData, color: 'blue' }]}
                                        label={
                                        <Text c="blue" fw={700} ta="center" size="xl">
                                            {planet.surfaceTemperatureC.mean}
                                        </Text>
                                        }
                                    />
                                </HoverCard.Target>
                                <HoverCard.Dropdown>
                                    <Title order={2}>Mean Temperature (celsius)</Title>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        </Center>
                    </Center>
                </Center>
            </Stack>
    )
}