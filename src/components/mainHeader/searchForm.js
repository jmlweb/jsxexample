import React from 'react';
import styled from 'styled-components';

import Input from '../input/input';


const SearchFormInput = Input.extend`
    background:    #eee url(https: //cdn.pccomponentes.com/img/css/lupa-buscador.png) 0 no-repeat;
    max-width:     560px;
    height:        35px;
    margin:        0 auto;
    padding-left:  40px;
    font-size:     15px;
    border:        2px solid #ddd; 
    border-radius: 25px;
    &:             focus {
        border:    2px solid #b4b4b4;
    }
`;

const SearchFormWrapper = styled.div`
    display:   block;
    margin:    0 75px 0 25px;
    flex-grow: 1;
`;

const SearchForm = () => (
    <SearchFormWrapper>
        <SearchFormInput placeholder="Buscar" />
    </SearchFormWrapper>
);

export default SearchForm;