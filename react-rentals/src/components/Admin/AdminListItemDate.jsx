import styled from "styled-components";

const StyledAdminListItemDate = styled.div`
  height: auto;

  margin: 0 1rem;
  display: flex;
  flex-direction: column;

  text-align: center;

  p {

    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;

    &.abbr {
      margin: auto;
    }

    &.returned {
        font-weight: 600;
        color: #00ae7c;
    }

    &.ongoing {
        font-weight: 600;
        color: #d0b055;
    }

    &.failed {
        font-weight: 600;
        color: #d05555;
    }

    &.soon {
        font-weight: 600;
        color: #818181;
    }
  }
`;

const AdminListItemDate = (props) => {
  return (
    <StyledAdminListItemDate>
        <p>{props.from} - {props.to}</p>
        <p className={props.stateType + " " + props.className}>{props.state}</p>
    </StyledAdminListItemDate>
  );
};

export default AdminListItemDate;
