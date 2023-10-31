import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;

  width: 100%;

  padding: 2rem 0;
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

type HeaderButtonProps = {
  color: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSize["text-s"]};
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.color.white};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ color, theme }) => css`
    background: ${theme.color[color === 'purple' ? 'purple-100' : 'yellow-100']};
    color: ${theme.color[color === 'purple' ? 'purple-300' : 'yellow-300']};

    span {
      background: ${({ theme }) => theme.color[color === 'purple' ? 'purple-300' : 'yellow-300']};
    }
  `}

  ${({ color, theme }) =>
    color === 'purple' &&
    css`
      svg {
        color: ${theme.color["purple-200"]};
      }
    `}
`