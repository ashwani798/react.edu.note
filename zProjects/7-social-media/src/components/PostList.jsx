import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((Post) => (
        <Post />
      ))}
    </>
  );
};
export default PostList;
