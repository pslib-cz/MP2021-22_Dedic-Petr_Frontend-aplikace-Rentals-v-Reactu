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
import BagImage from "../BagCard/BagImage";
import BagCard from "../BagCard/BagCard";
import BagText from "../BagCard/BagText";
import BagDate from "../BagCard/BagDate";
import BagMenu from "../BagCard/BagMenu";
import Button from "../Button/Button";
import AccountCard from "../AccountCard/AccountCard";
import AccountCardDate from "../AccountCard/AccountCardDate";
import AdminMenu from "../Admin/AdminMenu";
import AdminCalendar from "../Admin/AdminCalendar";
import AdminList from "../Admin/AdminList";
import AdminListItem from "../Admin/AdminListItem";
import AdminListItemName from "../Admin/AdminListItemName";
import AdminListItemDate from "../Admin/AdminListItemDate";
import AdminListItemUser from "../Admin/AdminListItemUser";
import Detail from "../Detail/Detail";
import ToolTip from "../ToolTip/ToolTip";
import BehaviorIndex from "../BehaviorIndex/BehaviorIndex";
import CardInfo from "../ContentCard/CardInfo";
import SignButton from "../Footer/SignButton";

import { useAppContext } from "../../providers/ApplicationProvider";

const StyledContent = styled.div`
  width: 80%;
  margin: 3rem auto 0;
  min-height: 85vh;

  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    min-height: unset;
  }
`;
const StyledContentGrid = styled.div`
  margin-top: 5%;
  width: 95%;
  padding: 2.5%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -webkit-column-gap: 24px;
  column-gap: 24px;
  row-gap: 32px;

  &.liked-grid {
    padding-top: 72px;
  }

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
    &.liked-grid {
      padding-top: 32px;
    }
  }
`;

const StyledBagGrid = styled.div`
  width: ${(props) => (props.isSmall ? "100%" : "90%")};
  margin-top: ${(props) => (props.isSmall ? "0" : "5%")};
  padding: ${(props) => (props.isSmall ? "0" : "5%")};
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 32px;
`;

const StyledMainGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 32px;
  column-gap: 32px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Content = (props) => {
  const [{ profile }] = useAppContext();

  return (
    <StyledContent>
      <Switch>
        <Route exact path="/">
          <StyledMainGrid>
            <ContentMenu></ContentMenu>
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
                <CardInfo text="Je rozbitá :)"></CardInfo>
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
              <ContentCard>
                <CardLike isLiked="false" />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
                <CardActionButton />
              </ContentCard>
              <ContentCard>
                <CardLike isLiked="false" />
                <CardImage />
                <CardText text="Toto je text" />
                <CardDescription text="Toto je popisek" />
                <CardDate />
                <CardActionButton />
              </ContentCard>
            </StyledContentGrid>
          </StyledMainGrid>
        </Route>
        <Route path="/favorite">
          <ContentMenu></ContentMenu>
          <StyledContentGrid className="liked-grid">
            <ContentCard isLeft>
              <CardLike isLiked="true" />
              <CardImage />
              <CardText text="Toto je text 1" />
              <CardDescription text="Toto je popisek" />
              <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
              <CardActionButton />
            </ContentCard>
            <ContentCard isLeft>
              <CardLike isLiked="true" />
              <CardImage />
              <CardText text="Toto je text 3" />
              <CardDescription text="Toto je popisek" />
              <CardDate dateFrom={"31.5"} dateTo={"2.6"} />
              <CardActionButton />
            </ContentCard>
          </StyledContentGrid>
        </Route>
        <Route path="/bag">
          <StyledBagGrid>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu"
                description="Popisek produktu"
              ></BagText>
              <BagDate isAvailable></BagDate>
              <BagMenu amount="1"></BagMenu>
            </BagCard>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu"
                description="Popisek produktu"
              ></BagText>
              <BagDate isAvailable></BagDate>
              <BagMenu amount="1"></BagMenu>
            </BagCard>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu"
                description="Popisek produktu"
              ></BagText>
              <BagDate isAvailable></BagDate>
              <BagMenu amount=""></BagMenu>
            </BagCard>
            <BagCard>
              <BagImage></BagImage>
              <BagText
                text="Nazev produktu 4"
                description="Popisek produktu 4"
              ></BagText>
              <BagDate></BagDate>
              <BagMenu amount="3"></BagMenu>
            </BagCard>
            <Button type="green" text="Vypůjčit"></Button>
          </StyledBagGrid>
        </Route>
        <Route path="/account">
          <p>{profile ? profile.name : "Neznámý uživatel"}</p>
          <ToolTip toolTipText="Důvěra: 60%">
            <BehaviorIndex value="60"></BehaviorIndex>
          </ToolTip>
          <StyledBagGrid>
            <AccountCard id="1">
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate isOngoing></AccountCardDate>
            </AccountCard>
            <AccountCard id="2">
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate isReturned></AccountCardDate>
            </AccountCard>
            <AccountCard id="3">
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate></AccountCardDate>
            </AccountCard>
            <SignButton />
          </StyledBagGrid>
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
