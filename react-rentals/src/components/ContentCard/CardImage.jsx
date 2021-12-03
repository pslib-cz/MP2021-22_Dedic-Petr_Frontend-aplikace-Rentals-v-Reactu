import styled from "styled-components";
import testimg from "../media/test.jpg";
import { Link } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";

const StyledCardImage = styled.div`
  img {
    aspect-ratio: 1/1;
    border-radius: 1rem;
    width: 85%;
    margin: 7.5%;
    object-fit: cover;
  }
`;

const CardImage = (props) => {
  //props -> path to image
  return (
    <StyledCardImage>
      <WavyLink
        waveColor="#007784"
        className="unstyled header"
        tag={Link}
        to={"/detail"}
        activeClassName={""}
      >
        <img src={testimg} alt="" />
      </WavyLink>
    </StyledCardImage>
  );
};

export default CardImage;
