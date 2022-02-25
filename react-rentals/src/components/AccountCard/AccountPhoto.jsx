import styled from "styled-components";
import { useAppContext } from "../../providers/ApplicationProvider";
import { useEffect } from "react";
import { Card } from "proomkatest";
import AccountCard from "../AccountCard/AccountCard";
import AccountCardDate from "../AccountCard/AccountCardDate";
import BagText from "../BagCard/BagText";

const StyledAccountPhoto = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 98%;
  margin: 0 1%;
  gap: 2rem;

  .img-wrapper {
    width: auto;
    max-width: 100%;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: flex;
    justify-content: space-between;
    height: min-content;

    img {
      margin: 2rem;
      border-radius: 1.5rem;
      max-width: 50%;
      aspect-ratio: 1/1;
    }

    @media (max-width: 1600px) {
      flex-direction: column;
      img {
        max-width: 100%;
      }
    }
    @media (max-width: 1280px) {
      flex-direction: row;
      img {
        max-width: 50%;
      }
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      img {
        max-width: 100%;
      }
    }

    div {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 0 5%;
    }
    p:first-of-type {
      margin-top: 0 !important;
    }
    p:nth-child(odd) {
      color: #0000009d;
      font-size: 1.25rem;
      margin-top: 0.5rem;
      font-weight: 600;
    }
    p:nth-child(even) {
      color: #000000;
      font-size: 1.5rem;
      font-weight: 500;
    }
    p:last-child {
      margin-bottom: 2rem;
    }
  }
  .div-wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .proomka-card {
      width: 100%;
      background-color: #fff;
      border-radius: 1.5rem;
      transition: 250ms;
      display: flex;
      justify-content: space-between;
      height: auto;

      @media (max-width: 700px) {
        min-height: 6rem;
        width: 100%;
      }

      @media (max-width: 600px) {
        min-height: 5rem;
      }
    }
  }

  &.space {
    justify-content: space-between;
  }

  .history {
    width: 100%;
    border-radius: 1.5rem;
    flex-direction: column;
  }

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const AccountPhoto = (props) => {
  const [{ accessToken, userManager, profile }] = useAppContext();

  useEffect(() => {
    setTimeout(
      () =>
        (document.getElementById("myImg2").src =
          document.getElementById("myImg").src),
      500
    );
  }, []);

  return (
    <StyledAccountPhoto {...props} id="myImg2cont">
      {accessToken ? (
        <>
          <Card className="proomka-card img-wrapper">
            <img
              src=""
              id="myImg2"
              alt="login"
              className="login"
              onClick={() => {
                userManager.signoutRedirect();
              }}
            ></img>
            <div>
              <p>Jméno</p>
              <p>{profile.name}</p>
              <p>Email</p>
              <p>{profile.email}</p>
              <p>Preferované jméno</p>
              <p>{profile.preferred_username}</p>
              <p>Id</p>
              <p>{profile.sub}</p>
            </div>
          </Card>
          <div className="history">
            <AccountCard id="1" isBordered>
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate isOngoing></AccountCardDate>
            </AccountCard>
            <AccountCard id="2" isBordered>
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate isReturned></AccountCardDate>
            </AccountCard>
            <AccountCard id="3" isBordered>
              <BagText text="Vypujcka" description="28.5 - 3.7"></BagText>
              <AccountCardDate></AccountCardDate>
            </AccountCard>
          </div>
        </>
      ) : (
        <i
          className="fas fa-user login"
          onClick={() => {
            userManager.signinRedirect();
          }}
        ></i>
      )}
    </StyledAccountPhoto>
  );
};

export default AccountPhoto;
