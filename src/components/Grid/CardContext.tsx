import React from 'react';

interface IContext {
    fn:(event:React.MouseEvent) => void;
    turn:number
}

const CardContext = React.createContext<IContext | null>(null);

export default CardContext;