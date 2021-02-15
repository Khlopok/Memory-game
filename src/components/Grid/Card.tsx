import { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import CardContext from './CardContext';

// Style

const CardBody = styled.div`
    width: 8rem;
    height: 8rem;
    cursor: pointer;
`

const Flip = styled.div`
    width: 100%;
    height: 100%;
    transition: transform .5s ease-in-out;
    transform-style: preserve-3d;
`

const Cover = styled.figure`
    background-color: var(--second-color);
    width: 100%;
    height: 100%;
    position: absolute;
`

const Content = styled.figure`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--main-color);
    color: var(--background-color);
    font-size: 6em;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
`

// Component

interface CardProps {
    cardContent:string;
    reset:boolean;
};

const Card = ({ cardContent, reset }: CardProps) => {
    const span = useRef<HTMLSpanElement>(null)

    const [flip, setFlip] = useState<string>('');

    // Flip card onclick
    const flipCard = ():void => {
        span.current?.click();
        if (!flip) setFlip('flip');
    };

    // Flip again if the cards dont match
    const checkCompared = ():void => {
        const compared = span.current?.getAttribute('compared');
        if (!reset) {
            setTimeout(() => {
                if (compared === 'false' && flip === 'flip') setFlip('');
            }, 500)
        }
        else {
            if (compared === 'true') span.current?.setAttribute('compared', 'false');
            if (flip === 'flip') setFlip('');
        };
    };

    // Context
    const ContextData = useContext(CardContext);

    // Check every turn
    useEffect(() => {
        checkCompared();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ContextData?.turn, reset])

    return (
        <CardBody onClick={() => flipCard()}>
            <Flip className={flip}>
                <Cover />
                <Content>
                        {
                            // @ts-ignore
                            <span compared="false" ref={span} onClick={ContextData.fn}>{cardContent}</span>
                        }
                </Content>
            </Flip>
        </CardBody>
    )
}
export default Card;