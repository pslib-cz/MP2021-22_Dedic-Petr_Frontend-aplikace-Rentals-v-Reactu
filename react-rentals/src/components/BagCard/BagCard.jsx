import styled from "styled-components";

const StyledBagCard = styled.div`
  margin: auto;
  width: 90%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 1.5rem;

  -webkit-box-shadow: 0px 5px 50px -30px #191919;
  box-shadow: 0px 5px 50px -30px #191919;

  @media (max-width: 700px) {
    height: 6rem;
    width: 100%;
  }

  @media (max-width: 600px) {
    height: 5rem;
  }
`;

const BagCard = (props) => {
  return <StyledBagCard>{props.children}</StyledBagCard>;
};

export default BagCard;
