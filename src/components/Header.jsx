import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderCont>
            <HeaderCardCont>
                <HeaderCardText>
                    Search
                </HeaderCardText>
            </HeaderCardCont>
            <HeaderCardCont>
                <HeaderCardText>
                    Result
                </HeaderCardText>
            </HeaderCardCont>
        </HeaderCont>
    )
}


const HeaderCont = styled.div`
    padding: 20px;
    display: flex;
    gap: 75px;
    justify-content: center;
`

const HeaderCardCont = styled.div`
    display: flex;
    justify-content: center;
`

const HeaderCardText = styled.button`

`
