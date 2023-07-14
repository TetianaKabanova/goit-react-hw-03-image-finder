import styled from '@emotion/styled';

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${props => props.theme.space[2]}px;
  margin: 0px auto;
  padding: 0;
  list-style: none;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`;
