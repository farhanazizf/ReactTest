import React from "react";
import { useLocation } from "react-router-dom";
import Styled, { HeaderTitle } from "./style";
// import 'style.css'

const DetailsPage = () => {
  const { state } = useLocation();

  return (
    <Styled.MainContainer>
      <HeaderTitle owner={state?.repo_owner.login} name={state?.repo_name} />
      <div>
        <h2>
          {state?.data.title}/{state?.data.number}
        </h2>
        <Styled.UserContainer>
          <img src={state?.data.user.avatar_url} alt="avatar_user" />
          <p>{state?.data.user.login}</p>
        </Styled.UserContainer>

        <Styled.BodyContainer>
          <p>{state?.data.body}</p>
        </Styled.BodyContainer>
      </div>
    </Styled.MainContainer>
  );
};

export default DetailsPage;
