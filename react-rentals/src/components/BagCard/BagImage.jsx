import styled from "styled-components";
import testimg from "../media/test.jpg";

const StyledBagImage = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 1.5rem 0 0 1.5rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem 0 0 1.5rem;
  }
`;

const BagImage = (props) => {
  return (
    <StyledBagImage className="image-container">
      <img src={testimg} alt="alt" />
    </StyledBagImage>
  );
};

export default BagImage;
