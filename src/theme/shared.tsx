import styled from 'styled-components/native';
import theme, { WEIGHT } from '~theme/theme';
import { css } from 'styled-components';

export const RowContainerCenter = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TextStyled = styled.Text`
  color: ${theme.colors.primary};
`;

export const AuthorNameText = styled(TextStyled)`
  ${WEIGHT.BOLD};
  margin-bottom: ${theme.spacing.m}px;
`;

export const ScrollViewContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: css`
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  `,
}))``;

export const AndroidViewFix = styled.View`
  padding-top: 50px;
`;
