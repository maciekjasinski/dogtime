export interface BreedingType {
    id: number;
    name: string;
    location: [];
    details: {
        adress: string;
        lastLitter: {
            date: string;
            puppy: {
                dog: number;
                bitch: number;
            }
        }
    }
}

export interface BreedingCardProps {
    data: BreedingType
}
