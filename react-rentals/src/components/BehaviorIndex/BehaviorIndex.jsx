import styled from "styled-components";

const StyledIndex = styled.div`
  background-color: #fff;
  border-radius: 2.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;
  transition: 350ms;
  width: 90%;
  margin: auto;
  padding: 1rem;

  #bi {
      width: 95%;
      margin: 0 2.5%;
      border: 1px grey solid;
      height: 16px;
      border-radius: 1rem;
      background-image: linear-gradient(45deg, red, yellow, green); 
  }

  .meter {
    height: 100%; 
    margin-left: auto;
    background-color: white;
    border-radius: 0 1rem 1rem 0;  
  }
`;

const BehaviorIndex = (props) => {

   const change = props.value;
    
  return (
    <>
      <StyledIndex>
        <div id="bi">
            <div className="meter" style={{width: 100 - change + "%"}}></div>
        </div>
      </StyledIndex>
    </>
  );
};

export default BehaviorIndex;
