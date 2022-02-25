import {
  StyledMainGrid,
  StyledIntroImage,
  StyledContentGrid,
} from "../Content/Content";
import ContentMenu from "../Content/ContentMenu";
import wave from "../media/Wave.svg";
import { Card, Badge, Alert } from "proomkatest";
import { useState, useEffect, ReactDOM } from "react";
import { useAppContext } from "../../providers/ApplicationProvider";
import CardImage from "../ContentCard/CardImage";
import Axios from "axios";

const Favourite = () => {
  const [{ accessToken }] = useAppContext();
  const [loading, setLoading] = useState(true);
  const [storedFiles, setStoredFiles] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
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
        <h1>Oblíbené položky</h1>
      </StyledIntroImage>
      <ContentMenu></ContentMenu>
      <StyledContentGrid className="liked-grid">
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

export default Favourite;
