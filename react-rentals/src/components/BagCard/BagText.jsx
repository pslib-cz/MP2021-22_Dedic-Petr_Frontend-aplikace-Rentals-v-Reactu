import styled from "styled-components";

const StyledBagText = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(2, auto);
  max-width: 50%;
  max-height: 4rem;
  margin: 2rem;

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: grey;

    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 700px) {
    max-height: 4rem;
    margin: 1rem;
  }
`;

const BagText = (props) => {
  return (
    <StyledBagText>
      <h3>{props.text}</h3>
      <p>{props.description}</p>
    </StyledBagText>
  );
};

export default BagText;
