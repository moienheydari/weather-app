import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderCont>
            <HeaderCardCont>
                <HedarCardText>
                    Search
                </HedarCardText>
            </HeaderCardCont>
            <HeaderCardCont>
                <HedarCardText>
                    Result
                </HedarCardText>
            </HeaderCardCont>
        </HeaderCont>
    )
}


const HeaderCont = styled.div`

`

const HeaderCardCont = styled.div`

`

const HedarCardText = styled.p`

`
