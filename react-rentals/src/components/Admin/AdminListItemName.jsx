import styled from "styled-components";

const StyledAdminListItemName = styled.div`
  height: auto;

  margin: 0 1rem;
  display: flex;
  flex-direction: column;

  text-align: center;

  p {
    font-size: 0.75rem;
    color: grey;
  }
`;

const AdminListItemName = (props) => {
  return (
    <StyledAdminListItemName>
      <h3>{props.name}</h3>
      <p>{props.note}</p>
    </StyledAdminListItemName>
  );
};

export default AdminListItemName;
