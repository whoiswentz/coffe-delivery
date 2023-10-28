import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.37rem;
`

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 3.5rem;
  margin-top: 3.5rem;
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 1.25rem;

  background-color: ${({theme}) => theme.color["gray-200"]};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -5rem;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  width: 100%;

  margin-top: 1rem;
  margin-bottom: 1.25rem;

  span {
    background-color: ${({theme}) => theme.color["yellow-100"]};
    color: ${({theme}) => theme.color["yellow-300"]};
    font-size: ${({theme}) => theme.textSize["text-xxs"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 16px;
    font-weight: 700;
  }
`

export const CoffeeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color["purple-300"]};
    color: ${({ theme }) => theme.color["gray-200"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.color["purple-200"]};
    }
  }
`