import styled from "styled-components"
import { ThemeColor } from "../styles/themes/defaultTheme"

type RoudedIconContainerProps = {
  color: ThemeColor
  iconColor: ThemeColor
}

export const RoudedIconContainer = styled.div<RoudedIconContainerProps>`
  display: flex;
  background-color: ${({theme, color}) => theme.color[color ?? 'gray-900']};
  padding: 0.50rem;
  border-radius: 50%;

  svg {
    color: ${({theme, iconColor}) => theme.color[iconColor ?? 'white']};
  }
`