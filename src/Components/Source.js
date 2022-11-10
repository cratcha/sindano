import styled from 'styled-components';
import React from 'react';

/**
 * Source Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */


const Container = styled.figure`
  visibility: hidden;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.colors.alt_text_white};
  width: 290px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  z-index: 10;
  position: absolute;
  bottom: -65px;
`;

const Info = styled.p`
  margin: 0;
  font: ${(props) => props.theme.fonts.text.font_family};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_xs};
  font-weight: ${(props) => props.theme.fonts.text.weights.semi_bold};
  line-height: 1.33;
`;

const Icon = styled.button`
cursor: pointer;
margin: 0;
font: ${(props) => props.theme.fonts.text.font_family};
font-size: ${(props) => props.theme.fonts.text.sizes.text_m};
font-weight: ${(props) => props.theme.fonts.text.weights.semi_bold};
line-height: 1.25;
background-color: transparent;
border: none;
color: ${(props) => props.fontColor === "white" ? props.theme.colors.alt_text_white : props.theme.colors.default_component_blue };
position: absolute;
bottom: 16px;
right: 20px;
&:hover + ${Container} {
  visibility: visible;
}
`;



const Source = ({ info, fontColor }) => {

  return (
    <>
      <Icon fontColor={fontColor}> ⓘ </Icon>
          <Container>
            <Info>{info}</Info>
          </Container>
    </>
  )
};

export default Source;
