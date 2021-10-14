import styled from "styled-components/macro";

const Styled = {
  MainContainer: styled.div`
    padding: 1rem 2rem;
  `,
  ContainerHeader: styled.div`
    // width: 100%;
    border: 1px solid black;
    padding: 1rem;
  `,
  RowContainer: styled.div`
    display: flex;
    margin: 1rem 0;
    border: 1px solid black;
    padding: 0.5rem;
    p {
      cursor: pointer;
    }
  `,
  TableContainer: styled.div`
    border: 1px solid black;
  `,
  TextHeader: styled.p`
    margin: 0 10px;
  `,
  PageContainer: styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: center;
  `,
  BodyContainer: styled.div`
    border: 1px solid black;
    padding: 10px;
  `,
  UserContainer: styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    img {
      max-width: 4%;
      border-radius: 20px;
    }
  `,
  FlexWrapper: styled.div`
    display: flex;
  `,
  TextPage: styled.p`
    background: ${(props) => (props.isActive ? "blue" : "")};
    color: ${(props) => (props.isActive ? "white" : "black")};
    margin: 0 10px;
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
  `,
};

export const HeaderTitle = ({ owner = "", name = "" }) => (
  <Styled.ContainerHeader>
    <p>{owner === "" && name === "" ? null : `${owner}/${name}`}</p>
  </Styled.ContainerHeader>
);

export default Styled;
