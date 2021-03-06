import React from 'react';
import styled from 'styled-components';
import { withBreakpoints } from 'react-breakpoints';
import { Grid, Cell } from 'styled-css-grid';
import { BreakPoints } from '../../constants/breakpoints';

const OJETE_WIDTH = '20%';
const MORENO_WIDTH = '100%';
const FEW_COLUMNS = 2;
const ALL_COLUMNS = 3;

const Brick = styled.div`
  height:     100%;
  /* border:     #333 1px solid;  */
  background-color: #00000036;
`;

const HeaderContent = styled.div`
  background: #d2f4c6;
  padding:    8px;
`;

const MainContent = styled.div`
  background: #e9edf8;
  padding:    8px;
`;

const FooterContent = styled.div`
  background: #f9b1fa;
  padding:    8px;
`;

const Card = styled.div`
  background: #c2c2c2;
  border:     #444 1px solid;
`;

const GridThoughts = (props) => {
  const isBig = props.currentBreakpoint > BreakPoints.LG;
  const cssProps = isBig
    ? ({
      columns: `${OJETE_WIDTH} 1fr`,
    })
    : ({
      columns: MORENO_WIDTH,
    });

  return (
    <section>

      <Grid
        gap="0px"
        columns={"100px 1fr 100px"}
        rows="auro 1fr auto"
        areas={[
          "header header  header",
          "menu   content ads   ",
          "footer footer  footer",
        ]}>
        <Cell center area="header">
          <HeaderContent>
            Header
        </HeaderContent>
        </Cell>

        <Cell area="content">
          <MainContent>
            Main Content

          <Grid columns="repeat(auto-fit, minmax(120px, 1fr))" minRowHeight="auto" className="oops">
              {
                [...Array(18)].map((_obj, idx) => (
                  <Cell middle center key={idx}>
                    <Card>Card Content</Card>
                  </Cell>
                ))
              }
            </Grid>

          </MainContent>
        </Cell>

        <Cell area="menu">
          <Brick>
            Menu
        </Brick>
        </Cell>

        <Cell area="ads">
          <Brick>
            Ads content
        </Brick>
        </Cell>

        <Cell center area="footer">
          <FooterContent>
            Footer Content
        </FooterContent>
        </Cell>
      </Grid>

      <p>&nbsp;</p>

      <Grid
        gap='0'
        flow='row' //not required
        rows='minmax(auto,auto) auto minmax(55px,auto)'
        {...cssProps}
      >

        <Cell center width={2}>
          <HeaderContent>
            Header
          </HeaderContent>
        </Cell>

        {isBig
          ? <Cell middle>Menu</Cell>
          : undefined
        }

        {/* <Cell middle>Menu</Cell> */}

        <Cell>
          <MainContent>
            Main Content
          {/* flow-column */}
            <Grid flow="row dense" columns={props.currentBreakpoint < BreakPoints.XL ? FEW_COLUMNS : ALL_COLUMNS}>
              <Cell height={1}><Brick>Div--1</Brick></Cell>
              <Cell height={2}><Brick>Div--2</Brick></Cell>
              <Cell height={4}><Brick>Div--3</Brick></Cell>
              <Cell height={1}><Brick>Div--4</Brick></Cell>
              <Cell height={5}><Brick>Div--5</Brick></Cell>
              <Cell height={2}><Brick>Div--6</Brick></Cell>
              <Cell height={1}><Brick>Div--7</Brick></Cell>
              <Cell height={1}><Brick>Div--8</Brick></Cell>
              <Cell height={2}><Brick>Div--9</Brick></Cell>
              <Cell height={2}><Brick>Div--10</Brick></Cell>
            </Grid>
          </MainContent>
        </Cell>

        <Cell center width={2}>
          <FooterContent>
            Footer
        </FooterContent>
        </Cell>
      </Grid>

    </section>
  )
};

export default withBreakpoints(GridThoughts);