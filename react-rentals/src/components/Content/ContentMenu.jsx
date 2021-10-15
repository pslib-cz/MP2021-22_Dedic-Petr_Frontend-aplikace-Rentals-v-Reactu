import styled from "styled-components";
import Button from "../Button/Button";
import CategoryButton from "../Button/CategoryButton";

const StyledContentMenu = styled.div`
  
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
    display: flex;

    &.marginTop {
      margin-top: 2rem;
    }
  }
`;

const StyledSearchBox = styled.div`
  height: 2rem;
  background-color: #fff;
  width: 20rem;
  padding: 1rem;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  float: left;

  #searchField {
    height: 2rem;
    width: 80%;
    margin-left: 5%;
    margin: 0;
    padding: 0;
    border: none;
    color: black;
    background-color: inherit;
    font-family: "Poppins";
    font-size: 0.9rem;

    &:focus-visible {
      outline: none;
    }
  }

  i {
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

const StyledSearchBoxWithin = styled.div`
  width: 90%;
  margin-left: 5%;
  float: left;
  display: flex;
  justify-content: space-between;
`;

const StyledFilterButton = styled.div`
  height: 2rem;
  min-width: 2rem;
  max-width: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  margin-left: auto;

  i {
    padding: 0.125rem;
    font-size: 1.75rem;
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    margin-top: 3rem;
    justify-content: space-between;
  }
`;

const ContentMenu = (props) => {
  if (props.isAdmin) {
    return (
      <>
        <StyledContentMenu className="marginTop">
          <StyledSearchBox>
            <StyledSearchBoxWithin>
              <input id="searchField" type="text" placeholder="Hledat..." />
              <span>
                <i className="fas fa-search"></i>
              </span>
            </StyledSearchBoxWithin>
          </StyledSearchBox>
          <StyledDiv>
            <CategoryButton isUnfiltered={props.isUnfiltered}></CategoryButton>
            <StyledFilterButton>
              <i className="fas fa-sort-amount-up-alt"></i>
            </StyledFilterButton>
          </StyledDiv>
        </StyledContentMenu>
        <Button text="Přidat" type="green"></Button>
      </>
    );
  } else if (props.isView) {
    return (
      <>
        <StyledContentMenu className="marginTop">
          <StyledSearchBox>
            <StyledSearchBoxWithin>
              <input id="searchField" type="text" placeholder="Hledat..." />
              <span>
                <i className="fas fa-search"></i>
              </span>
            </StyledSearchBoxWithin>
          </StyledSearchBox>
          <StyledDiv>
            <CategoryButton
              isUnfiltered={props.isUnfiltered}
              isView
            ></CategoryButton>
            <StyledFilterButton isUnfiltered={props.isUnfiltered}>
              <i className="fas fa-sort-amount-up-alt"></i>
            </StyledFilterButton>
          </StyledDiv>
        </StyledContentMenu>
        <Button text="Přidat" type="green"></Button>
      </>
    );
  } else {
    return (
      <StyledContentMenu>
        <StyledSearchBox>
          <StyledSearchBoxWithin>
            <input id="searchField" type="text" placeholder="Hledat..." />
            <span>
              <i className="fas fa-search"></i>
            </span>
          </StyledSearchBoxWithin>
        </StyledSearchBox>
        <StyledDiv>
          <CategoryButton isUnfiltered={props.isUnfiltered}></CategoryButton>
          <StyledFilterButton isUnfiltered={props.isUnfiltered}>
            <i className="fas fa-sort-amount-up-alt"></i>
          </StyledFilterButton>
        </StyledDiv>
      </StyledContentMenu>
    );
  }
};

export default ContentMenu;
