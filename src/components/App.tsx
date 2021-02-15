import { useState } from 'react';
import CardContext from './Grid/CardContext';

import Header from './Header';
import Grid from './Grid/Grid';
import WinModal from './WinModal';

const App = () => {
    interface IStats {
        compared:number;
        attempts:number;
    };
    interface IGameState {
        turn:number;
        win:boolean;
        reset:boolean;
    };

    const [comparation, setComparation] = useState<Element[]>([]);
    const [stats, setStats] = useState<IStats>({ compared: 0, attempts: 0 });
    const [gameState, setGameState] = useState<IGameState>({ turn: 0, win: false, reset: false });

    // Compare if the cards match

    const handleComparation = (event:React.MouseEvent):void => {
        // Span that contains the character
        const span:Element = event.target as Element;
        // If was clicked a pair card...
        if (comparation.length > 0 && span.getAttribute('compared') === 'false') {
            // Case true if match lets save the cards as "compared"
            if (span.textContent === comparation[0].textContent) {
                comparation[0].setAttribute('compared', 'true');
                span.setAttribute('compared', 'true');
                // And set game state
                setStats({
                    compared: stats.compared + 1,
                    attempts: stats.attempts
                });
                setGameState({
                    turn: gameState.turn + 1,
                    win: gameState.win,
                    reset: gameState.reset
                });
                setComparation([]);
                // if you already compared 9 cards before you win!
                if (stats.compared === 9) {
                    setGameState({
                        turn: gameState.turn,
                        win: true,
                        reset: gameState.reset
                    })
                };
            }
            // If not lets flip again
            else {
                comparation[0].setAttribute('compared', 'false');
                span.setAttribute('compared', 'false');
                // And set game state
                setStats({
                    compared: stats.compared,
                    attempts: stats.attempts + 1
                });
                setGameState({
                    turn: gameState.turn + 1,
                    win: gameState.win,
                    reset: gameState.reset
                });
                setComparation([]);
            };
        }
        else {
            // Case false lets save what card was clicked as "waiting"
            if (span.getAttribute('compared') === 'false') {
                if (span.textContent) setComparation([span]);
                span.setAttribute('compared', 'waiting');
            };
        };
    };

    const closeWinModal = ():void => {
        setGameState({
            turn: gameState.turn,
            win: false,
            reset: gameState.reset
        })
    };

    const restart = ():void => {
        setComparation([]);
        setStats({
            compared: 0,
            attempts: 0
        });
        setGameState({
            turn: gameState.turn,
            win: false,
            reset: true
        })
        setTimeout(() => {
            setGameState({
                turn: gameState.turn,
                win: false,
                reset: false
            })
        }, 0);
    }

    return (
        <>
            <Header att={stats.attempts} fn={restart} />
            <CardContext.Provider value={{
                fn: handleComparation,
                turn: gameState.turn
            }}>
                <Grid reset={gameState.reset} />
            </CardContext.Provider>
            <WinModal win={gameState.win} att={stats.attempts} fn={closeWinModal} />
        </>
    )
}

export default App;