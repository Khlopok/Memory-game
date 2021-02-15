import styled from 'styled-components';

// Style

const ModalBody = styled.dialog`
    background-color: var(--background-color);
    position: fixed;
	top: ${(window.innerHeight - 90) / 2}px;
    width: 420px;
    height: 90px;
    border: .5px solid;
    color: #3bba9c;
`

const ModalElements = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Ok = styled.input`
    background-color: transparent;
	padding: .5em 1em;;
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

interface ModalProps {
    win:boolean;
    att:number;
    fn:() => void;
};

const WinModal = ({ win, att, fn }:ModalProps) => (
    <ModalBody open={win}>
        <ModalElements>
            <p>You win in {att} attempts. Click restart to play again</p>
            <Ok type="submit" value="ok" onClick={() => fn()}/>
        </ModalElements>
    </ModalBody>
)

export default WinModal;