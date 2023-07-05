import styled from "styled-components";
import PropTypes from "prop-types";
import { onFID } from "web-vitals/attribution";
import { generateColorByNumber } from "../../utils/getColor.js";
import { toUpperCaseString } from "../../utils/toUpperCase.js";
import { useDispatch } from "react-redux";
import { setValue } from "../../store/messageSlice.js";

const StyledLi = styled.li`
  border-bottom: solid 1px grey;
  margin-bottom: 20px;
  background-color: #363535;
  padding: 10px;
  color: ${({ $index }) => generateColorByNumber($index)};
  transition:
    scale 0.25s linear,
    color 0.1s linear;

  -webkit-box-shadow: 0 0 33px -13px rgb(93, 84, 93);
  -moz-box-shadow: 0 0 33px -13px rgb(93, 84, 93);
  box-shadow: 0 0 33px -13px rgb(93, 84, 93);

  &:hover {
    border-bottom: solid 1px orange;
    color: ${({ $index }) => generateColorByNumber($index + 4)};
    scale: 1.04;
  }
`;

const StyledH3 = styled.h3`
  font-size: 14px;
  padding-bottom: 5px;
`;

const StyledP = styled.p`
  font-size: 12px;
`;

const Post = ({ post, index }) => {
  const dispatch = useDispatch();

  const logDelta = ({ name, id, delta }) => {
    dispatch(
      setValue({
        value: `${name} matching ID ${id} changed by ${delta.toFixed(2)} ms`,
      })
    );
  };

  return (
    <StyledLi $index={index} onClick={() => onFID(logDelta)}>
      <StyledH3>{toUpperCaseString(post.title)}</StyledH3>
      <StyledP>{toUpperCaseString(post.body)}</StyledP>
    </StyledLi>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Post;
