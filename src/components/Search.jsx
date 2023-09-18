import React, { useState } from 'react'
import styled from 'styled-components'

export default function Search() {
    const [searchInput, setSearchInput] = useState('');

    
    function handleKeyDown({ key }) {
        if (key === 'Enter') {
            handleEnter();
        }
    }


    function handleEnter() {
        if (searchInput) {
            setSearchInput('');
        }
    }

    return (
        <>
            <Input
                name='search'
                placeholder='Type City Name...'
                value={searchInput}
                onChange={({ target }) => setSearchInput(target.value)}
                onKeyDown={handleKeyDown}
            />
            <List>
                Previously Searched....
                <ListElement></ListElement>
                <ListElement></ListElement>
                <ListElement></ListElement>
            </List>
        </>
    )
}


const Input = styled.input`
    background: rgba(0, 0, 0, 0.25);
    border: 0.5px solid rgba(0, 0, 0, 0.8); 
    border-radius: 20px;
    
    padding: 7px 10px 7px 10px;
`

const List = styled.ul`

`

const ListElement = styled.li`

`