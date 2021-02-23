import React from 'react';
import { Divider } from '@material-ui/core';
import image from '../../assets/dog.jpg';
import {
    Wrapper,
    BreedingDescription,
    BreedingName,
    Button,
    ButtonWrapper
} from './BreedingCard.styles';
import { BreedingCardProps } from './BreedingCard.interface';

export function BreedingCard({ data }: BreedingCardProps) {
    return (
        <Wrapper>
            <img src={image} alt="Image" />
            <div>
                <BreedingName>{data.name}</BreedingName>
                <Divider />
                <BreedingDescription>
                    Adres: {data.details.adress}<br/>
                    Ostani miot: <br />
                    (K) Suki: {data.details.lastLitter.puppy.bitch} (M) Psy: {data.details.lastLitter.puppy.dog}<br />
                    Data: {data.details.lastLitter.date}  
                </BreedingDescription>
                <ButtonWrapper>
                    <Button>Sprawdź</Button>
                </ButtonWrapper>
            </div>
        </Wrapper>
    )
}
