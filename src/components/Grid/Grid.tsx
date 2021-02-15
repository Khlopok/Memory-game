import { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as methods from '../../methods';

import Card from './Card';

// Style

const GridBody = styled.main`
    width: fit-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: .5em;
`

// Component

interface GridProps { reset:boolean };

const Grid = ({ reset }:GridProps) => {
    const [cards, setCards] = useState<string[]>([]);

    // New deck
    const getCards = ():void => {
        let deck:string[] = [];
        for (let i = 0; i < 10; i++) {
            const newCard:string = methods.symbols[methods.randomInt(0, 20)];
            deck.push(newCard);
        }
        deck = [...deck, ...deck];
        setCards(methods.shuffle(deck));
    };

    // Start
    useEffect(() => {
        setTimeout(()=> getCards(), 500)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset])

    return (
        <GridBody>
            {
                cards.map((cardContent:string, i:number) => <Card key={i} cardContent={cardContent} reset={reset} />)
            }
        </GridBody>
    )
}

export default Grid;