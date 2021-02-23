import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Slider, Popover } from '@material-ui/core';
import { 
    ArrowDropDown,
    Close, 
    Pets, 
    LocationOn, 
    AttachMoney
} from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { PageTitle } from '../Steps/Step1/Step1.styles';
import {
    Wrapper,
    InputWrapper,
    Item,
    StyledIconButton,
    StyledPaper,
    StyledLink,
    Text
} from './Search.styles';

const breeds = [
    {
        id: 0,
        name: 'Dowolna'
    },
    {
        id: 1,
        name: 'York'
    },
    {
        id: 2,
        name: 'Owczarek'
    },
    {
        id: 3,
        name: 'Shih Tzu'
    },
    {
        id: 4,
        name: 'Husky'
    }
];

const locations = [
    {
        id: 0,
        name: 'Cała Polska'
    },
    {
        id: 1,
        name: 'Opolskie'
    },
    {
        id: 2,
        name: 'Śląskie'
    },
    {
        id: 3,
        name: 'Dolnośląskie'
    },
    {
        id: 4,
        name: 'Małopolskie'
    }
]

export function Search() {
    const history = useHistory();
    const [breed, setBreed] = useState<{id: number, name: string} | null>();
    const [location, setLoaction] = useState<{id: number, name: string} | null>();
    const [priceValue, setPriceValue] = useState<number[]>([0, 3000])
    const [isBreedChoose, setIsBreedChoose] = useState(false);
    const [isLocationChoose, setIsLocationChoose] = useState(false);
    const redirect = () => {
        history.push('/hodowle');
    }
    const handleChange = (event: any, newValue: number | number[]) => {
        setPriceValue(newValue as number[]);
    };
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <PageTitle>DogTime</PageTitle>
            <Container>
                <Text>Znajdź psa</Text>
                <Wrapper>
                    {isBreedChoose 
                        ? 
                            <StyledIconButton onClick={() => setIsBreedChoose(false)}>
                                <Pets />
                            </StyledIconButton>
                        :
                            <Autocomplete
                                id="rasy"
                                options={breeds}
                                value={breed}
                                onChange={(event: any, newValue: {id: number, name: string} | null) => {
                                    setBreed(newValue);
                                }}
                                getOptionLabel={(option) => option.name}
                                renderOption={(option) => (
                                    <Item onClick={() => setIsBreedChoose(true)}>{option.name}</Item>
                                )}
                                //renderInput={(params) => <TextField {...params} placeholder="Rasa" variant="outlined" />}
                                renderInput={(params) => (
                                    <InputWrapper ref={params.InputProps.ref}>
                                        <input type="text" {...params.inputProps} placeholder="Rasa" />
                                        {breed ? <Close onClick={() => setBreed(null)} /> : <ArrowDropDown />}
                                    </InputWrapper>
                                )}
                            />
                    }
                    {isLocationChoose 
                        ? 
                            <StyledIconButton onClick={() => setIsLocationChoose(false)}>
                                <LocationOn />
                            </StyledIconButton>
                        :
                            <Autocomplete
                                id="location"
                                options={locations}
                                value={location}
                                onChange={(event: any, newValue: {id: number, name: string} | null) => {
                                    setLoaction(newValue);
                                }}
                                getOptionLabel={(option) => option.name}
                                renderOption={(option) => (
                                    <Item onClick={() => setIsLocationChoose(true)}>{option.name}</Item>
                                )}
                                //renderInput={(params) => <TextField {...params} placeholder="Lokalizacja" variant="outlined" />}
                                renderInput={(params) => (
                                    <InputWrapper ref={params.InputProps.ref}>
                                        <input type="text" {...params.inputProps} placeholder="Lokalizacja" />
                                        {location ? <Close onClick={() => setLoaction(null)} /> : <ArrowDropDown />}
                                    </InputWrapper>
                                )}
                            />
                    }
                    <StyledIconButton onClick={handleClick}>
                        <AttachMoney />
                    </StyledIconButton>
                    <Popover 
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <StyledPaper>
                            <h3>Cena:</h3>
                            <Slider 
                                value={priceValue}
                                onChange={handleChange}
                                min={0}
                                max={3000}
                                step={10}
                                marks={[
                                    {
                                        value: priceValue[0],
                                        label: `${priceValue[0]}zł`
                                    },
                                    {
                                        value: priceValue[1],
                                        label: `${priceValue[1]}zł`
                                    },
                                ]}
                            />
                        </StyledPaper>
                    </Popover>
                    <button onClick={redirect}>Szukaj</button>
                </Wrapper>
                <StyledLink to="/hodowle">Zobacz wszystkie filtry</StyledLink>
            </Container>
        </>
    )
}