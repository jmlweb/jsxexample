import React from 'react';
import styled from 'styled-components';
import { Row, Col, Container, ScreenClassRender } from 'react-grid-system';

import ArticleCard from '../articleCard/ArticleCard';
import AsideMenu from '../asideMenu/asideMenu';

const SMALL_SCREEN_SIZES = ['sm', 'xs'];

const rowProps = {
  style: {
    margin: '0 -7px 0 -7px',
    // 'margin-left': '-20px',
  },
};

const containerProps = {
  style: {
    //background: '#333',
    padding: '0px',
  },
};

const Brick = styled.div`
	background: #000;
	color: #fff;

	img {
		width: 100%;
		height: 100%;
		max-width: 250px;
		max-height: 250px;
	}
`;

const ArticleCardListWrapper = styled.div`
  background: #ebeced;
  //padding: 10px;
`;

const ArticleCardContainer = styled.div`
  display: block;
  margin: 7px;
`;

const getX = (screenClass, props) =>
  SMALL_SCREEN_SIZES.includes(screenClass)
    ? ({
      ...containerProps.style,
      padding: '10px',
    })
    : containerProps.style;

const GridExample = () => (
  <ArticleCardListWrapper>
    <ScreenClassRender style={getX}>
      <Container>
        <Row nogutter {...rowProps}>
          <Col lg={3}>
            <AsideMenu />
          </Col>

          <Col lg={9}>
            <Row nogutter>
              {
                [...Array(8)].map((_obj, idx) => (
                  <Col xs={6} sm={4} md={4} lg={3} >
                    <ArticleCardContainer>
                      <ArticleCard key={idx} />
                    </ArticleCardContainer>
                  </Col>
                ))
              }
            </Row>
          </Col>

        </Row>
      </Container>
    </ScreenClassRender>
  </ArticleCardListWrapper>
);

export default GridExample;
