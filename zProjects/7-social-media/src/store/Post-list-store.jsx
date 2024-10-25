import { createContext, useReducer } from "react";

export const PostList = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "hi friends, I am going Mumbai for my vacation, Hope to enjoy a lot. please out.",
    reaction: 2,
    userId: "user-9",
    tags: ["vaction", "Mumbai", "Enjoying"],
  },
  {
    id: "1",
    title: "Going To Banglore",
    body: "hi friends, I am going Banglore for my First Job.",
    reaction: 10,
    userId: "user-12",
    tags: ["First Job", "Banglore"],
  },
];
export default PostListProvider;
