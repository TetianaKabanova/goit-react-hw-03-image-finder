import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10 px;
  width: 300px;
  background-color: rgb(248, 240, 240);
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  list-style: none;
  margin-bottom: 20px;
`;

export const GalleryImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  background-color: rgb(236, 219, 219);
  border-radius: 8px;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
