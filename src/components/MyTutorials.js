import React from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const PageWrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitleWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: left;
`;
const PageTitle = styled("div")`
  color: white;
  font-size: 40px;
`;

const Image = styled("img")`
  width: 100%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #3423b8, pink);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const ImageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
});

const TutorialsWrapper = styled("div")`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TutorialLink = styled("a")`
  width: 25%;
  min-width: 300px;
  margin: 10px;

  @media (min-width: 768px) {
    width: calc(25% - 20px);
  }
`;

const TutorialImage = styled("img")`
  border: 1px solid white;
  height: 200px;
  width: 100%;
`;

const TutorialDescription = styled("div")`
  color: white;
  font-size: 1.2rem;
  margin-top: 10px;
`;

const ButtonWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled("button")`
  padding: 0.7em 2em;
  background-color: transparent;
  color: white;
  font-size: 1.5em;
  text-align: center;
  border-radius: 10px;
  border: 1px solid white;
`;

function MyVideos() {
  return (
    <PageWrapper>
      <PageTitleWrapper>
        <PageTitle>My Tutorials</PageTitle>
      </PageTitleWrapper>
      <ImageWrapper>
        <Image src="images/brain.jpg" alt="Your photo" />
      </ImageWrapper>
      <TutorialsWrapper>
        <TutorialLink href="#">
          <TutorialImage src="images/placeholder.jpg"></TutorialImage>
          <TutorialDescription>
            This is a description of the first video project.
          </TutorialDescription>
        </TutorialLink>
        <TutorialLink href="#">
          <TutorialImage src="images/placeholder.jpg"></TutorialImage>
          <TutorialDescription>
            This is a description of the second video project.
          </TutorialDescription>
        </TutorialLink>
        <TutorialLink href="#">
          <TutorialImage src="images/placeholder.jpg"></TutorialImage>
          <TutorialDescription>
            This is a description of the third video project.
          </TutorialDescription>
        </TutorialLink>
      </TutorialsWrapper>
      <ButtonWrapper>
        <Link to="/contact">
          <StyledButton>Get In Touch</StyledButton>
        </Link>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default MyVideos;
