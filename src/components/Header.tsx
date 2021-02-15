import styled from 'styled-components';

// Style

const Menu = styled.header`
    margin-bottom: 2.5em;
    padding: 0 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Options = styled.div`
    display: flex;
`

const Restart = styled.input`
    background-color: transparent;
	padding: .5em .75em;;
    margin: 0 0 0 2em;
    border: 1px solid var(--main-color);
	border-radius: 3px;
	color: var(--main-color);
	display: flex;
	justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: var(--main-color);
        color: var(--background-color);
    }
`

// Component

interface HeaderProps{
    att:number;
    fn:() => void;
};

const Header = ({ att, fn }:HeaderProps) => {
    return (
        <Menu>
            <h1>Memory Game</h1>
            <Options>
                <h2>Attempts: {att}</h2>
                <Restart type="submit" value="Restart" onClick={() => fn()}/>
            </Options>
        </Menu>
    )
};

export default Header;