import styled from "styled-components";
import { useSelector } from "react-redux";
import "./App.css";
import Post from "../Post/Post.jsx";
import { useGetPostsQuery } from "../../store";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 65%;
`;

function App() {
  const { value: metricMessage } = useSelector((state) => state.metricMessage);
  const { data: posts } = useGetPostsQuery();

  return (
    <StyledDiv>
      <h1>Hello CodeSandbox</h1>
      <h2>Start here to see how RTK-Query and Styled Components are working</h2>
      <StyledUl>
        {posts &&
          posts
            .filter((_, i) => i < 10)
            .map((post, index) => {
              return <Post key={index} post={post} index={index} />;
            })}
      </StyledUl>
      <p>{metricMessage}</p>
    </StyledDiv>
  );
}

export default App;
