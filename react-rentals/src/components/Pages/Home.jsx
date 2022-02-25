import {
  StyledMainGrid,
  StyledIntroImage,
  StyledcategoryWrapper,
  CategoryButton,
  StyledContentGrid,
} from "../Content/Content";
import ContentMenu from "../Content/ContentMenu";
import wave from "../media/Wave.svg";
import { v4 as uuid } from "uuid";
import { Card, Badge, Alert } from "proomkatest";
import { useState, useEffect, ReactDOM } from "react";
import { useAppContext } from "../../providers/ApplicationProvider";
import CardImage from "../ContentCard/CardImage";
import Axios from "axios";

const Home = () => {
  const [{ accessToken }] = useAppContext();
  const [loading, setLoading] = useState(true);
  const [storedFiles, setStoredFiles] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  const Cards = [
    {
      id: uuid(),
      name: "Foťák stativ",
      desc: "Najetej foťákos",
      categories: ["Foťáky", "Stativy"],
    },
    {
      id: uuid(),
      name: "Foťák ostatní",
      desc: "Najetej foťákos",
      categories: ["Foťáky", "Ostatní"],
    },
    {
      id: uuid(),
      name: "Foťák 36846438643848468384349468",
      desc: "Najetej foťákos djandfiabfailfnhigbuagb",
    },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
    { id: uuid(), name: "Foťák", desc: "Najetej foťákos" },
  ];
  const Categrories = [
    { id: uuid(), name: "Foťáky" },
    { id: uuid(), name: "Stativy" },
    { id: uuid(), name: "Kamery" },
    { id: uuid(), name: "Příslušenství" },
    { id: uuid(), name: "Ostatní" },
  ];

  const SelectedCategories = [];

  function filterByCategory(obj, SelectedCategories) {
    console.log(
      "Kategorie",
      obj.map((o) => ({
        ...o.categories,
      }))
    );
  }
  // eslint-disable-next-line
  const filteredObj = filterByCategory(Cards, SelectedCategories);

  const EditSelectedCategories = (newItem) => {
    SelectedCategories.indexOf(newItem) === -1
      ? SelectedCategories.push(newItem)
      : SelectedCategories.splice(SelectedCategories.indexOf(newItem), 1);
    console.log(SelectedCategories);
  };

  var fakeFiles = storedFiles.slice(0, -1).map((i) => {
    return (
      <>
        <Card key={i}>
          <CardImage></CardImage>
          <p className="card-header">{i.name}</p>
          <p className="card-desc">{i.description}</p>
          <Badge color="#007784" colorHover="#009fb1" textColor="white">
            <i className="fas fa-cart-plus"></i>
          </Badge>
        </Card>
      </>
    );
  });

  useEffect(() => {
    const fetchStoredFiles = async () => {
      const { data } = await Axios.get(
        "https://localhost:44486/api/Item",
        config
      );
      setStoredFiles(data);
      console.log("data", data);
      setLoading(false);
      ReactDOM.render(
        <Alert
          textColor="white"
          width="16rem"
          height="4rem"
          color="#00ae7c"
          delay="2000"
        >
          <i className="far fa-check-circle icon" /> Data načtena
        </Alert>,

        document.getElementById("messages")
      );
    };
    fetchStoredFiles();

    // eslint-disable-next-line
  }, [accessToken]);

  return (
    <StyledMainGrid>
      <StyledIntroImage bgImage={wave}>
        <h1>Domovská stránka</h1>
      </StyledIntroImage>
      <ContentMenu></ContentMenu>
      <div className="shadow-wrap">
        <StyledcategoryWrapper>
          <div className="shadow"></div>
          <div className="shadow"></div>
          {Categrories.map((category, i) => (
            <CategoryButton
              key={i}
              action={() => EditSelectedCategories(category.name)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </StyledcategoryWrapper>
      </div>
      {!Cards.length ? (
        <Card
          color="#d0af5529"
          width="100%"
          height="6rem"
          className="proomka-card empty"
        >
          <Badge
            top="1rem"
            right="1rem"
            colorHover="white"
            color="#ffc21c"
            textColor="white"
            textColorHover="#ffc21c"
          >
            <i className="fas fa-exclamation"></i>
          </Badge>
          Zvoleným filtrům nebo vyhledávání neodpovídá žádná položka
        </Card>
      ) : (
        <></>
      )}
      <StyledContentGrid>
        {loading ? (
          <>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
            <Card>
              <div className="loading-img"></div>
              <p className="card-header loading"></p>
              <p className="card-desc loading"></p>
              <Badge
                className="loading proomka-badge"
                color="#007784"
                colorHover="#009fb1"
                textColor="white"
              >
                <i className="fas fa-cart-plus"></i>
              </Badge>
            </Card>
          </>
        ) : (
          <>{fakeFiles}</>
        )}
      </StyledContentGrid>
    </StyledMainGrid>
  );
};

export default Home;
