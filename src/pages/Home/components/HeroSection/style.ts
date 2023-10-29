import styled from "styled-components";

import background from '../../../../assets/background.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 34rem;
  background: ${() => `url(${background})`} no-repeat center;
`

export const HeroBackgroundImage = styled.img`
  position: absolute;
`

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export const HeroTextContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const HeroItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`

export const HeroImageContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`