import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Grid, FormControlLabel } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { Marker, TileLayer, Popup } from 'react-leaflet';
import { BreedingCard } from '../components/BreedingCard';
import { breedingsData, breedsData, locationsData } from './data';
import { 
    StyledContainer,
    StyledMapContainer,
    SearchButton,
    ShowMoreButton,
    FilterTitle,
    FiltersWrapper,
    StyledCheckbox,
    PriceWrapper,
    PriceInput,
    StyledGridItem,
    ShowFiltersButton
} from './Breedings.styles';


export function Breedings() {
    const [showMoreLocationCount, setShowMoreLocationCount] = useState(5);
    const [showMoreBreedCount, setShowMoreBreedCount] = useState(5);
    const [showMoreBreedingsCount, setShowMoreBreedingsCount] = useState(5);
    const [hideFilters, setHideFilters] = useState(true);

    const renderFilters = () => (
        <FiltersWrapper>
            <FormControlLabel
                style={{display: 'block'}}
                control={<StyledCheckbox name='Akutalne mioty' />}
                label='Akutalne mioty'
            />
            <FormControlLabel
                style={{display: 'block'}}
                control={<StyledCheckbox name='Nadchodzące mioty' />}
                label='Nadchodzące mioty'
            />
            <FormControlLabel
                style={{display: 'block'}}
                control={<StyledCheckbox name='Obserwowane hodowle' />}
                label='Obserwowane hodowle'
            />
            <FilterTitle>Hodowle</FilterTitle>
            {breedingsData.slice(0, showMoreBreedingsCount).map((each: any) => (
                <FormControlLabel
                    key={each.id}
                    style={{display: 'block'}}
                    control={<StyledCheckbox name={each.name} />}
                    label={each.name}
                />
            ))}
            <ShowMoreButton onClick={() => setShowMoreBreedingsCount(showMoreBreedingsCount === 5 ? breedingsData.length : 5)}>
                {showMoreBreedingsCount === 5 
                    ? <>Pokaż więcej <ArrowDropDown /></>
                    : <>Pokaż mniej <ArrowDropUp /></>
                }
            </ShowMoreButton>
            <FilterTitle>Rasy</FilterTitle>
            {breedsData.slice(0, showMoreBreedCount).map((each: any) => (
                <FormControlLabel
                    key={each.id}
                    style={{display: 'block'}}
                    control={<StyledCheckbox name={each.name} />}
                    label={each.name}
                />
            ))}
            <ShowMoreButton onClick={() => setShowMoreBreedCount(showMoreBreedCount === 5 ? breedsData.length : 5)}>
                {showMoreBreedCount === 5 
                    ? <>Pokaż więcej <ArrowDropDown /></>
                    : <>Pokaż mniej <ArrowDropUp /></>
                }
            </ShowMoreButton>
            <FilterTitle>Lokalizacja</FilterTitle>
            {locationsData.slice(0, showMoreLocationCount).map((each: any) => (
                <FormControlLabel
                    key={each.id}
                    style={{display: 'block'}}
                    control={<StyledCheckbox name={each.name} />}
                    label={each.name}
                />
            ))}
            <ShowMoreButton onClick={() => setShowMoreLocationCount(showMoreLocationCount === 5 ? locationsData.length : 5)}>
                {showMoreLocationCount === 5 
                    ? <>Pokaż więcej <ArrowDropDown /></>
                    : <>Pokaż mniej <ArrowDropUp /></>
                }
            </ShowMoreButton>
            <FilterTitle>Cena</FilterTitle>
            <PriceWrapper>
                <PriceInput type="number" placeholder="OD" />
                <PriceInput type="number" placeholder="DO" />
            </PriceWrapper>
            <br/>
            <SearchButton onClick={() => {
                setHideFilters(true);
                window.scrollTo(0, 0);
            }}>Szukaj</SearchButton>
        </FiltersWrapper>
    )
    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    {isMobile 
                        ? 
                            <ShowFiltersButton onClick={() => setHideFilters(!hideFilters)}>
                                {hideFilters ? 'Pokaż filtry' : 'Ukryj filtry'}
                            </ShowFiltersButton>
                        : renderFilters()
                    }
                    {!hideFilters && renderFilters()}
                </Grid>
                <Grid item xs={12} sm={9}>
                    <StyledMapContainer center={[52.06932, 19.48031]} zoom={6} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {breedingsData.map((each: any) => (
                            <Marker key={each.id} position={each.location}>
                                <Popup>
                                    <b>{each.name}</b><br/>
                                    Przejdź do hodowli
                                </Popup>
                            </Marker>
                        ))}
                    </StyledMapContainer>
                    <h1>Hodowle najbardziej odpowiadające Twoim wyszukiwaniom:</h1>
                    <Grid container spacing={2}>
                        {breedingsData.map((each: any) => (
                            <StyledGridItem key={each.id} item sm={12} md={6}>
                                <BreedingCard data={each} />
                            </StyledGridItem>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </StyledContainer>
    )
}
