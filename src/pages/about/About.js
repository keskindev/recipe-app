import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span> Devrim Keskin</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'm Devrim</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>I've already known Js,ReactJS,NodeJS</h4>
        <h2>
          <a href="mailto:keskindev@gmail.com">Send email</a> :
          keskindev@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
