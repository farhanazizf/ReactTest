import React from "react";
import { useHistory } from "react-router-dom";
import { useDebounce } from "use-debounce";
import axios from "./axios";
import Styled, { HeaderTitle } from "./style";

const MainPage = () => {
  const history = useHistory();
  const [repo, setRepo] = React.useState();
  const [search, setSearch] = React.useState("");
  const [valuez] = useDebounce(search, 600);
  const [list, setList] = React.useState();
  const [page, setPage] = React.useState(1);
  const [pageNumber, setPageNumber] = React.useState([1, 2, 3]);

  React.useEffect(() => {
    const getRepo = async () => {
      try {
        const { data } = await axios.get("/repos/angular/angular");
        setRepo(data);
      } catch (error) {
        console.log(error);
      }
    };

    getRepo();
    // getList();
  }, []);

  React.useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await axios.get("/search/issues", {
          params: {
            q:
              valuez === ""
                ? "repo:angular/angular/node+type:issue+state:open"
                : valuez,
            per_page: "10",
            page: page,
          },
        });
        console.log(data);
        setList(data?.items);
      } catch (error) {
        console.log(error);
      }
      // setRepo(data);
    };
    getList();
  }, [valuez, page]);

  const detailsClick = async (url) => {
    try {
      if (url) {
        const { data } = await axios.get(url);
        console.log(data);
        history.push({
          pathname: "/detail",
          state: {
            repo_name: repo.name,
            repo_owner: repo.owner,

            data,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    if (page + 1 > pageNumber[2]) {
      setPageNumber([pageNumber[0] + 3, pageNumber[1] + 3, pageNumber[2] + 3]);
      setPage(page + 1);
    } else {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (page - 1 < pageNumber[0]) {
      setPageNumber([pageNumber[0] - 3, pageNumber[1] - 3, pageNumber[2] - 3]);
      setPage(page - 1);
    } else if (page - 1 !== 0) {
      setPage(page - 1);
    }
  };

  return (
    <Styled.MainContainer>
      <HeaderTitle owner={repo?.owner.login} name={repo?.name} />

      <div>
        <h4>Issues</h4>
      </div>
      <Styled.RowContainer>
        <Styled.TextHeader>Search Issues</Styled.TextHeader>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search here"
        />
      </Styled.RowContainer>
      <Styled.TableContainer>
        <Styled.RowContainer>
          <Styled.TextHeader>{repo?.open_issues_count} Open</Styled.TextHeader>
          <Styled.TextHeader>{repo?.open_issues_count} Close</Styled.TextHeader>
        </Styled.RowContainer>

        {list?.map((val) => (
          <Styled.RowContainer onClick={() => detailsClick(val.url)}>
            <p>{val.title}</p>
          </Styled.RowContainer>
        ))}
      </Styled.TableContainer>

      <Styled.PageContainer>
        <Styled.FlexWrapper>
          <button onClick={() => handlePrevious()}>previous</button>

          {pageNumber.map((vals) => (
            <Styled.TextPage
              isActive={vals === page}
              onClick={() => setPage(vals)}
            >
              {vals}
            </Styled.TextPage>
          ))}

          <button onClick={() => handleNext()}>next</button>
        </Styled.FlexWrapper>
      </Styled.PageContainer>
    </Styled.MainContainer>
  );
};

export default MainPage;
