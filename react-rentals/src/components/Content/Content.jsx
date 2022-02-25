import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ContentCard from "../ContentCard/ContentCard";
import ContentMenu from "./ContentMenu";
import CardText from "../ContentCard/CardText";
import CardLike from "../ContentCard/CardLike";
import CardImage from "../ContentCard/CardImage";
import CardDescription from "../ContentCard/CardDescription";
import CardActionButton from "../ContentCard/CardActionButton";
import CardDate from "../ContentCard/CardDate";
import Error from "../404/Error";
import AdminMenu from "../Admin/AdminMenu";
import AdminCalendar from "../Admin/AdminCalendar";
import AdminList from "../Admin/AdminList";
import AdminListItem from "../Admin/AdminListItem";
import AdminListItemName from "../Admin/AdminListItemName";
import AdminListItemDate from "../Admin/AdminListItemDate";
import AdminListItemUser from "../Admin/AdminListItemUser";
import Detail from "../Detail/Detail";
import ToolTip from "../ToolTip/ToolTip";
import { useState } from "react";
import Home from "../Pages/Home";
import Favourite from "../Pages/Favourite";
import Bag from "../Pages/Bag";
import Account from "../Pages/Account";

const StyledContent = styled.div`
  width: 80%;
  margin: 1rem auto 0;
  min-height: 85vh;

  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    min-height: unset;
  }

  .empty {
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;

    animation: slide-up 0.4s ease;
    @keyframes slide-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .shadow-wrap {
    overflow-x: auto;
    position: relative;

    .shadow {
      position: absolute;
      top: 0;
      right: 0;
      width: 2rem;
      height: 85%;
      box-shadow: inset -40px 0px 20px -20px #f7f7f7;
      pointer-events: none;

      &:nth-child(2) {
        box-shadow: inset 50px 0px 20px -30px #f7f7f7;
        right: unset;
        left: 0;
      }
    }
  }
`;
export const StyledContentGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(6, 16.6666%);

  .proomka-card {
    position: relative;
    box-shadow: rgb(0 0 0 / 23%) 0px 8px 20px 0px;
    width: 90%;
    margin: 5%;
    height: auto;
    aspect-ratio: 1/1.3;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: 350ms;

    animation: slide-up 0.4s ease;
    @keyframes slide-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    p {
      margin-left: 7.5%;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      max-width: 85%;

      &.loading {
        max-width: 85%;
        margin-top: 8px;
        height: 1.5rem;
        border-radius: 1rem;
        cursor: progress;
        background: linear-gradient(0.25turn, transparent, #fff, transparent),
          linear-gradient(#eee, #eee);
        background-repeat: no-repeat;
        background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
        animation: loading 1.5s infinite;
      }
      @keyframes loading {
        to {
          background-position: 315px 0, 0 0, 0 190px, 50px 195px;
        }
      }
    }

    .card-header {
      font-size: 1.5rem;
      opacity: 0.8;
      font-weight: 700;
      min-height: 35px;
    }
    .card-desc {
      opacity: 0.5;
      font-weight: 700;
      margin-bottom: 0.75rem;
      min-height: 25px;
    }
    .proomka-badge {
      opacity: 0;
      transition: 350ms;
      box-shadow: rgb(0 0 0 / 23%) 0px 8px 20px 0px;

      top: unset;
      bottom: 0rem;
      right: 1rem;

      .fa-cart-plus {
        margin-right: 2px;
      }

      &.loading {
        display: none;
      }
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 23%) 0px 8px 20px 0px,
        inset rgb(0 0 0 / 50%) 0px -70px 70px -70px;

      .proomka-badge {
        opacity: 1;
        bottom: 1rem;
      }
    }

    .loading-img {
      border-radius: 1rem;
      width: 85%;
      aspect-ratio: 1/1;
      margin: 7.5%;
      cursor: progress;
      background: linear-gradient(0.25turn, transparent, #fff, transparent),
        linear-gradient(#eee, #eee);
      background-repeat: no-repeat;
      background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
      animation: loading 1.5s infinite;
    }
    @keyframes loading {
      to {
        background-position: 315px 0, 0 0, 0 190px, 50px 195px;
      }
    }
  }

  @media (max-width: 1580px) {
    grid-template-columns: repeat(4, 25%);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 33%);
  }

  @media (max-width: 900px) {
    padding: 0;
    width: 100%;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 50%);
  }
`;

export const StyledMainGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 16px;
  column-gap: 16px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .total {
    text-align: right;
    margin: 1rem;
    border-bottom: solid grey 1px;
    margin-left: auto;

    p {
      padding: 0.5rem;
      font-size: 1.5rem;
      display: block; /* or inline-block, at least its a block element */
      width: auto;
      height: auto; /* height cannot be defined */
      white-space: normal; /* be sure its not 'nowrap'! ! ! :/ */
    }
    span {
      color: black;
      font-weight: 500;
    }
  }

  .but {
    margin-right: 1rem;
    margin-left: auto;
  }
`;

export const StyledcategoryWrapper = styled.div`
  height: auto;
  padding: 1rem 0 2rem 0;
  width: auto;
  max-width: 100%;

  overflow-x: auto;

  display: flex;
  flex-direction: row;

  @media (min-width: 900px) {
    ::-webkit-scrollbar {
      width: 13px;
      height: 13px;
    }
    ::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #c7c7c7;
    }
    ::-webkit-scrollbar-track {
      background: #ffffff;
      border-radius: 10px;
      box-shadow: inset 7px 10px 12px #f0f0f0;
    }
  }
`;
export const StyledCategoryButton = styled.div`
  height: 4rem;
  width: auto;
  background-color: ${(props) => (props.clicked ? "#007784" : "#fff")};
  border-radius: 2.5rem;
  color: ${(props) => (props.clicked ? "white" : "unset")};

  box-shadow: rgb(0 0 0 / 23%) 0px 8px 20px 0px;

  display: grid;
  place-items: center;

  margin: 0 1rem;

  padding: 0 2rem;

  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;

  transition: 250ms;

  &:hover {
    background-color: ${(props) => (props.clicked ? "#007784" : "#00a7b9")};
    color: white;
  }
`;

export const StyledIntroImage = styled.div`
  width: 98%;
  margin: 0 1%;
  aspect-ratio: 5/1;
  background-color: white;
  border-radius: 1.5rem;
  background: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgb(0 0 0 / 10%) 0px 8px 20px 0px;
  margin-bottom: 0.75rem;
  margin-top: 1rem;

  h1 {
    font-size: 5rem;
    color: white;
    height: 100%;
    display: grid;
    align-items: center;
    text-align: center;
    @media (max-width: 1280px) {
      font-size: 4rem;
    }
    @media (max-width: 900px) {
      font-size: 3.5rem;
    }
    @media (max-width: 700px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      font-size: 2.75rem;
    }
    @media (max-width: 600px) {
      font-size: 2.25rem;
    }
    @media (max-width: 500px) {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 1280px) {
    aspect-ratio: 3.5/1;
  }
  @media (max-width: 900px) {
    margin-top: 5rem;
  }
`;

export const CategoryButton = (props) => {
  const [clicked, setClicked] = useState(false);
  const click = () => {
    setClicked(!clicked);
    props.action();
  };

  return (
    <StyledCategoryButton
      className="category-button"
      clicked={clicked}
      onClick={click}
    >
      {props.children}
    </StyledCategoryButton>
  );
};

const Content = (props) => {
  document.addEventListener("DOMContentLoaded", () => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    function handleIntersect(entries, observer) {
      size = size + 12;
      console.log(size);
    }

    let observer = new IntersectionObserver(handleIntersect, options);
    const root = document.querySelector("#root");
    observer.observe(root);
  });

  var size = 12;

  return (
    <StyledContent>
      <div className="alerts">
        <div id="messages"></div>
        <div id="alerts"></div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/favorite">
          <Favourite></Favourite>
        </Route>
        <Route path="/bag">
          <Bag></Bag>
        </Route>
        <Route path="/account">
          <Account></Account>
        </Route>
        <Route exact path="/admin">
          <AdminMenu></AdminMenu>
          <StyledMainGrid>
            <ContentMenu isView></ContentMenu>
            <AdminList isSmall>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="soon"
                  state="Proběhne"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <ToolTip toolTipText="Přijmul Michal Stehlík">
                  <AdminListItemDate
                    from="21.6 2021"
                    to="30.7 2021"
                    stateType="returned"
                    state="Vráceno"
                    className="abbr"
                  ></AdminListItemDate>
                </ToolTip>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="returned"
                  state="Vráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
            </AdminList>
          </StyledMainGrid>
        </Route>
        <Route exact path="/admin/calendar">
          <AdminMenu></AdminMenu>
          <StyledMainGrid>
            <AdminCalendar></AdminCalendar>
          </StyledMainGrid>
        </Route>
        <Route exact path="/admin/list">
          <AdminMenu></AdminMenu>
          <StyledMainGrid>
            <ContentMenu isAdmin></ContentMenu>
            <StyledContentGrid>
              <ContentCard>
                <CardLike isLiked="true" isEdit />
                <CardImage />
                <CardText text="Toto je text 1" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="false" isEdit />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="true" isEdit />
                <CardImage />
                <CardText text="Toto je text 3" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="false" isEdit />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="false" isEdit />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate />
                <CardActionButton text="Shlédnout historii" />
              </ContentCard>
            </StyledContentGrid>
          </StyledMainGrid>
        </Route>
        <Route exact path="/admin/users">
          <AdminMenu></AdminMenu>
          <StyledMainGrid>
            <ContentMenu isView isFiltered isUnfiltered></ContentMenu>
            <AdminList isSmall>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="soon"
                  state="Proběhne"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="returned"
                  state="Vráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="returned"
                  state="Vráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
            </AdminList>
          </StyledMainGrid>
        </Route>
        <Route exact path="/admin/manage">
          <AdminMenu></AdminMenu>
          <StyledMainGrid>
            <ContentMenu isView isFiltered isUnfiltered></ContentMenu>
            <AdminList isSmall>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="soon"
                  state="Proběhne"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="returned"
                  state="Vráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Dědic Petr"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="returned"
                  state="Vráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Tomáš Kazda"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="ongoing"
                  state="Probíhá"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>
              <AdminListItem>
                <AdminListItemName
                  name="Výpůjčka #1234"
                  note="Toto je nějaká poznámka k výpůjčce"
                ></AdminListItemName>
                <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                <AdminListItemDate
                  from="21.6 2021"
                  to="30.7 2021"
                  stateType="failed"
                  state="Nevráceno"
                ></AdminListItemDate>
              </AdminListItem>

              <ToolTip toolTipText="Nevráceno, fakt hrůza">
                <AdminListItem>
                  <AdminListItemName
                    name="Výpůjčka #1234"
                    note="Toto je nějaká poznámka k výpůjčce"
                  ></AdminListItemName>
                  <AdminListItemUser name="Michal Stehlík"></AdminListItemUser>
                  <AdminListItemDate
                    from="21.6 2021"
                    to="30.7 2021"
                    stateType="failed"
                    state="Nevráceno"
                  ></AdminListItemDate>
                </AdminListItem>
              </ToolTip>
            </AdminList>
          </StyledMainGrid>
        </Route>
        <Route path="/detail">
          <Detail></Detail>
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </StyledContent>
  );
};

export default Content;
