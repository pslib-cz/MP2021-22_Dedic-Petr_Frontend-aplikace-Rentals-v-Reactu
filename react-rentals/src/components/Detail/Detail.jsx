import styled from "styled-components";
import AdminCalendar from "../Admin/AdminCalendar";
import testimg from "../media/test.jpg";

import ContentCard from "../ContentCard/ContentCard";
import CardText from "../ContentCard/CardText";
import CardLike from "../ContentCard/CardLike";
import CardImage from "../ContentCard/CardImage";
import CardDescription from "../ContentCard/CardDescription";
import CardActionButton from "../ContentCard/CardActionButton";
import CardDate from "../ContentCard/CardDate";

const StyledDetail = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 32px;
  column-gap: 32px;
  align-items: center;
  font-size: 1rem;

  h1 {
    font-size: 1.5rem;
  }
  h2 {
    padding-top: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    padding: 0;
  }

  img {
    max-height: 40vh;
    border-radius: 1.5rem;
    -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
    box-shadow: 0 8px 20px 0px #d1d1d1;
    justify-self: end;

    @media (max-width: 800px) {
      justify-self: center;
    }
  }

  .button {
    font-size: 0.75rem;
  }

  .center {
    @media (max-width: 800px) {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, auto);
    }
  }
`;

const StyledDetailText = styled.div`
  text-align: left;
  width: 100%;

  @media (max-width: 800px) {
    width: auto;
    justify-self: center;
    padding: 0 5%;
  }
`;

const ActionButton = styled.div`
  float: left;

  text-align: center;
  background-color: #007784;
  padding: 1em;
  border-radius: 2.5rem;
  color: #fff;
  cursor: pointer;
  transition: 100ms;
  min-width: 11em;
  margin-right: auto;
  margin-top: 1em;
  -webkit-box-shadow: 0 8px 20px 0px #8d8d8d;
  box-shadow: 0 8px 20px 0px #8d8d8d;

  &:hover {
    background-color: #198490;
    transition: 100ms;
  }

  @media (max-width: 800px) {
    margin-right: 0;
  }
`;

const StyledCardLike = styled.span`
  float: left;
  margin-top: 1em;
  padding: 0.75em 0 0.75em 0.75em;

  i {
    font-size: 2rem;
    color: ${(props) => (props.isLiked ? "#007784" : "#00000024")};
    transition: 150ms;

    &:hover {
      color: #007784;
      transition: 150ms;
      cursor: pointer;
      transform: scale(1.15);
    }
  }
`;

const StyledCalendarGrid = styled.div`
  margin-top: 6rem;

  h3 {
    text-align: center;
    padding: 1rem 0 3rem 0;
  }
`;

const StyledMainGrid = styled.div`
  margin-top: 6rem;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 32px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  h3 {
    text-align: center;
    padding: 1rem;
  }
`;

const StyledContentGrid = styled.div`
  width: 95%;
  padding: 2.5%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -webkit-column-gap: 24px;
  column-gap: 24px;
  row-gap: 32px;

  @media (max-width: 1580px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    padding: 0;
    width: 100%;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Detail = (props) => {
  return (
    <>
      <StyledDetail>
        <img src={testimg} alt="detailedpicture" />
        <StyledDetailText>
          <h1>Objektiv SIGMA 17-50 mm 1:2.8</h1>
          <h2>Specifikace</h2>
          <p>Je to objektiv? :D</p>
          <h2>Popisek</h2>
          <p>Popisek produktu</p>
          <h2>Skladem kusů</h2>
          <p>1</p>
          <div className="center">
            <ActionButton>
              Přidat do košíku <i className="fas fa-shopping-bag"></i>
            </ActionButton>
            <StyledCardLike>
              <i className="fas fa-heart"></i>
            </StyledCardLike>
          </div>
        </StyledDetailText>
      </StyledDetail>
      <StyledCalendarGrid>
        <h3>Dostupnost</h3>
        <AdminCalendar></AdminCalendar>
      </StyledCalendarGrid>
      <StyledMainGrid>
        <h3>Kompatibilní příslušenství</h3>
        <StyledContentGrid>
          <ContentCard>
            <CardLike isLiked="true" />
            <CardImage />
            <CardText text="Toto je text 1" />
            <CardDescription text="Toto je popisek" />
            <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
            <CardActionButton />
          </ContentCard>
          <ContentCard>
            <CardLike isLiked="false" />
            <CardImage />
            <CardText text="Toto je text" />
            <CardDescription text="Toto je popisek" />
            <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
            <CardActionButton />
          </ContentCard>
          <ContentCard>
            <CardLike isLiked="true" />
            <CardImage />
            <CardText text="Toto je text 3" />
            <CardDescription text="Toto je popisek" />
            <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
            <CardActionButton />
          </ContentCard>
        </StyledContentGrid>
      </StyledMainGrid>
    </>
  );
};

export default Detail;
