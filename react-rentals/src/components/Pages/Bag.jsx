import { StyledMainGrid, StyledIntroImage } from "../Content/Content";
import BagImage from "../BagCard/BagImage";
import BagCard from "../BagCard/BagCard";
import BagText from "../BagCard/BagText";
import BagDate from "../BagCard/BagDate";
import Button from "../Button/Button";
import wave from "../media/Wave.svg";
import { Badge } from "proomkatest";

const Bag = () => {
  return (
    <StyledMainGrid>
      <StyledIntroImage bgImage={wave}>
        <h1>Váš košík</h1>
      </StyledIntroImage>
      <BagCard>
        <BagImage></BagImage>
        <BagText text="Nazev produktu" description="Popisek produktu"></BagText>
        <BagDate isAvailable>
          <Badge className="time">28.1 2022 - 1.2 2022</Badge>
        </BagDate>
        <div className="delete">
          <Badge>
            <i className="fas fa-times"></i>
          </Badge>
        </div>
      </BagCard>
      <BagCard>
        <BagImage></BagImage>
        <BagText text="Nazev produktu" description="Popisek produktu"></BagText>
        <BagDate isAvailable>
          <Badge className="time">28.1 2022 - 1.2 2022</Badge>
        </BagDate>
        <div className="delete">
          <Badge>
            <i className="fas fa-times"></i>
          </Badge>
        </div>
      </BagCard>
      <BagCard>
        <BagImage></BagImage>
        <BagText text="Nazev produktu" description="Popisek produktu"></BagText>
        <BagDate>
          <Badge className="time">28.1 2022 - 1.2 2022</Badge>
        </BagDate>
        <div className="delete">
          <Badge>
            <i className="fas fa-times"></i>
          </Badge>
        </div>
      </BagCard>
      <div className="total">
        <p>
          Předmětů: <span>3</span>
        </p>
        <p>
          Doba výpůjčky: <span>3.2 2022 - 18.2 2202</span>
        </p>
      </div>
      <div className="but">
        <Button type="green" text="Vypůjčit"></Button>
      </div>
    </StyledMainGrid>
  );
};

export default Bag;
