import styled from "styled-components";
import testimg from "../media/test.jpg";
import { Link } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";

const StyledCardImage = styled.div`
  aspect-ratio: 1/1;
  max-width: calc(300px - 30%);
  margin: 15%;

  img {
    width: 100%;
    border-radius: 2.5rem;
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
