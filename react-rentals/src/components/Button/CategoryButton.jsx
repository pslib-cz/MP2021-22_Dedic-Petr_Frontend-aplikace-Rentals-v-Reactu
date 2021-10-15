import styled from "styled-components";
import { useState } from "react";

const StyledCategory = styled.div`
  display: ${(props) => (props.isUnfiltered ? "none" : "unset")};

  min-height: 2rem;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  float: left;
  margin-right: 1rem;
  margin-left: 1rem;
  transition: 250ms;
  position: absolute;
  z-index: 4;
  width: 9rem;

  font-size: 1.35rem;
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 1rem;
    margin-left: 0;
  }

  user-select: none;

  .details {
    transition: 250ms;

    ul {
      max-height: 0;
      transition: 150ms;
      height: auto;
    }

    li {
      max-height: 0;
      transition: 150ms;
      height: auto;
      transform: scaleY(0);
    }
  }

  &.true .details {
    max-height: 25rem;
    transition: 200ms ease-in-out;

    ul {
      max-height: 20rem;
      transition: 200ms ease-in-out;
    }

    li {
      max-height: 3rem;
      transition: 400ms ease-in-out;
      transform: scaleY(100%);
    }
  }
`;

const StyledDetails = styled.div`
  transition: 250ms;
  height: auto;
  max-height: 0;
  transition: 500ms;

  &.opened {
    height: auto;
    max-height: 25rem;
    transition: 500ms ease-in-out;

    ul,
    li {
      height: unset;
      transition: 250ms;
    }
  }

  div {
    text-align: center;
  }

  ul,
  li {
    list-style-type: none;
    transition: 250ms;
    padding: 0.25rem 0.25rem;

    @media (max-width: 700px) {
      padding: 0.25rem 0;
    }

    height: 0;
    transition: 150ms;
  }

  li {
    border-radius: 2.5rem;
    padding: 0.25rem 0.25rem;
    margin: 0.5rem 0;
    transition: 250ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 85%;

    @media (max-width: 700px) {
      padding: 0.25rem 0;
    }

    span {
      color: white;
      font-size: 1.25rem;
      margin-right: 4px;
      height: 90%;
      padding-bottom: 10%;
    }

    &:hover {
      background-color: #f7f7f7;
      transition: 250ms;
    }
  }
`;

const CategoryButton = (props) => {
  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  if (props.isView) {
    return (
      <StyledCategory
        isUnfiltered={props.isUnfiltered}
        open={open}
        onClick={changeOpen}
        className={open}
      >
        <StyledDetails className="details">
          <div>Filtrovat</div>
          <ul className="details">
            <li>
              <span>●</span>Vše
            </li>
            <li>
              <span>●</span>Probíhající
            </li>
            <li>
              <span>●</span>Vrácené
            </li>
            <li>
              <span>●</span>Nevrácené
            </li>
          </ul>
        </StyledDetails>
      </StyledCategory>
    );
  } else {
    return (
      <StyledCategory open={open} onClick={changeOpen} className={open}>
        <StyledDetails className="details">
          <div>Filtrovat</div>
          <ul className="details">
            <li>
              <span>●</span>Vše
            </li>
            <li>
              <span>●</span>Těla fotoaparátů
            </li>
            <li>
              <span>●</span>Objektivy
            </li>
            <li>
              <span>●</span>Stativy
            </li>
            <li>
              <span>●</span>Příslušenství
            </li>
          </ul>
        </StyledDetails>
      </StyledCategory>
    );
  }
};

export default CategoryButton;
