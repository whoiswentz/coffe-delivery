import styled from "styled-components";
import { ThemeColor, ThemeTextSize } from "../styles/themes/defaultTheme";

export type TypographyProps = {
  fontSize?: ThemeTextSize
  color?: ThemeColor
  fontWeight?: string | number
  lineHeight?: string | number
}

export const Title = styled.h1<TypographyProps>`
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme, color }) => color ?? theme.color["gray-800"]};
  font-size: ${({ theme, fontSize }) => theme.textSize[fontSize ?? "title-m"]};
  line-height: ${({ lineHeight }) => lineHeight ?? '130%'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 800};
`

export const Text = styled.p<TypographyProps>`
  font-family: ${({ theme }) => theme.font.text};
  color: ${({ theme, color }) => color ?? theme.color["gray-800"]};
  font-size: ${({ theme, fontSize }) => theme.textSize[fontSize ?? 'text-m']};
  line-height: ${({ lineHeight }) => lineHeight ?? '130%'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
`