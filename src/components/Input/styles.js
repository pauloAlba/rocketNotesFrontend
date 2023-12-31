import styled from"styled-components"

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
color: ${({theme}) => theme.COLORS.GAY_300};

margin-bottom: 8PX;
border-radius: 10PX;

> input{
  height: 56px;
  width: 100%;

  padding: 12px;

  color: ${({theme}) => theme.COLORS.WHITE};
  background: transparent;
  border: 0;

  &:placeholder{
    color: ${({theme}) => theme.COLORS.GAY_300};
  }
 
}
> svg{
    margin-left: 16px;
  }

`