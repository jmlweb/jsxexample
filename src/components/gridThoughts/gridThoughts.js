import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

const Brick = styled.div`
  height:     100%;
  border:     #333 1px solid; 
`;

const MainContent = styled.div`
  background: #e9edf8;
  padding:8px;
`;

const Card = styled.div`
  background: #c2c2c2;
  border: #444 1px solid;
`;

const GridThoughts = () => (


  <section>

    <Grid
      gap="0px"
      columns={"100px 1fr 100px"}
      rows={"auro 1fr auto"}
      areas={[
        "header header  header",
        "menu   content ads   ",
        "footer footer  footer"
      ]}>
      <Cell center area="header">
        <Brick>
          Header
        </Brick>
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
        <Brick>
          Footer Content
        </Brick>
      </Cell>
    </Grid>

    <p>&nbsp;</p>

    <Grid
      gap="0"
      flow="row" //not required
      columns={"110px 1fr"}
      rows={"minmax(55px,auto) 1fr minmax(55px,auto)"}>
      <Cell width={2}>
        <Brick>
          <h1>Header</h1>
        </Brick>
      </Cell>

      <Cell middle>Menu</Cell>
      <Cell center middle>
        <MainContent>
          Main Content here
        </MainContent>
      </Cell>

      <Cell center width={2}>
        <Brick>
          Footer
        </Brick>
      </Cell>
    </Grid>

  </section >

);

export default GridThoughts;