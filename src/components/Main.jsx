import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import Search from './Search'
import Result from './Result'

export default function Main({ show }) {

    return (
        <FlippingCard $show={show}>
            <Front>
                <Search />
            </Front>
            <Back>
                <Result />
            </Back>
        </FlippingCard>
    )
}

const FlippingCard = styled.div`
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s ease-out;
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: rotateY(${({ $show }) => ($show === 'Search') ? '0deg' : '180deg'});

    
    background: rgba(0, 0, 0, 0.15);
`

const Front = styled.div`
    backface-visibility: hidden;
    position: absolute;
`

const Back = styled.div`
    transform: rotateY(180deg);
    position: absolute;
    backface-visibility: hidden;
`



