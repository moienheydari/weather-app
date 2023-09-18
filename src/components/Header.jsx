import React from 'react'
import styled from 'styled-components'

export default function Header({ handleHeaderShow }) {
    function handleClick({ target }) {
        handleHeaderShow(target.textContent);
    }

    return (
        <HeaderCont>
            <HeaderCardCont>
                <HeaderCardText onClick={handleClick}>
                    Search
                </HeaderCardText>
            </HeaderCardCont>
            <HeaderCardCont>
                <HeaderCardText onClick={handleClick}>
                    Result
                </HeaderCardText>
            </HeaderCardCont>
        </HeaderCont>
    )
}


const HeaderCont = styled.div`
    display: flex;
    justify-content: center;
    height: 35px;
`

const HeaderCardCont = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

const HeaderCardText = styled.button`
    flex-grow: 1;
    padding: 0;
    height: 35px;
    width: 60px;

    background: rgba(0, 0, 0, 0.35);
    border: 0.5px solid rgba(0, 0, 0, 0.3); 
    border-radius: 0;

    color: white;

    font-size: 0.8rem;
`
