// react
import { useEffect } from "react";

// react router dom
import { Redirect } from "react-router";

// components
import Users from "../../components/Users";
import Menu from "../../components/Menu";

// styles
import {
  Container,
  UsersContainer,
  SectionMenu,
  MenuItem,
  PrincipalDiv,
} from "./styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// provider
import { useChecked } from "../../providers/user";
import { useUserList } from "../../providers/userList";

//-----------------------------------------------
const UsersPage = () => {
  const { isAuth, checkAuth } = useChecked();
  const {
    nextPage,
    previousPage,
    page,
    getPreviousPage,
    getNextPage,
  } = useUserList();

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isAuth ? (
        <PrincipalDiv>
          <Menu />
          <Container>
            <SectionMenu>
              <MenuItem>
                <ArrowBackIosIcon
                  disabled={previousPage}
                  onClick={getPreviousPage}
                />
              </MenuItem>
              <MenuItem>{page}</MenuItem>
              <MenuItem>
                <ArrowForwardIosIcon
                  disabled={nextPage}
                  onClick={getNextPage}
                />
              </MenuItem>
            </SectionMenu>
            {/* <h1>Usuários</h1> */}
            <UsersContainer>
              <Users />
            </UsersContainer>
          </Container>
        </PrincipalDiv>
      ) : (
        <Redirect to={"/register"} />
      )}
    </>
  );
};

export default UsersPage;
