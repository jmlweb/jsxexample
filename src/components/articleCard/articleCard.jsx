import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import TopLabel from '../articleCard/topLabel/topLabel';

const ArticleCardWrapper = styled.div`
    background:#fff;
    padding:12px;
    box-shadow: 0 0.23077rem 0.38462rem 0 rgba(0,0,0,.25);
    margin:15px;
`;

const ArticleCard = () => (

    <ArticleCardWrapper>
        <Row nogutter>
            <TopLabel default>
                Ojete Moreno
            </TopLabel>

            <TopLabel>
                quedan 3 en oferta
            </TopLabel>
        </Row>
    </ArticleCardWrapper >

);

export default ArticleCard;
