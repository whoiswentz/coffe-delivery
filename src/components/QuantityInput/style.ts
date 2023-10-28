import styled, { css } from 'styled-components'

type QuantityInputContainerProps = {
  size?: 'medium' | 'small'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  flex: 1;

  background: ${({ theme }) => theme.color['gray-400']};
  border-radius: 6px;
  height: 2.375rem;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.color['gray-900']};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) => size === 'medium' && css`padding: 0.5rem`}
  ${({ size }) => size === 'small' && css`padding: 0.3rem 0.5rem`}
`

export const IconWrapper = styled.button.attrs({ type: 'button' })`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color['purple-200']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.color['purple-300']};
  }
`