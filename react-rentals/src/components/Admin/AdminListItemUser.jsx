import styled from "styled-components";

const StyledAdminListItemUser = styled.div`
  height: auto;

  margin: 0 1rem;
  
  text-align: center;

  display: grid;
  justify-items: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const AdminListItemUser = (props) => {
  return (
    <StyledAdminListItemUser>
      <p>{props.name}</p>
    </StyledAdminListItemUser>
  );
};

export default AdminListItemUser;
