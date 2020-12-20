import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import React, { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([
    { id: 1, title: "Tun" },
    { id: 2, title: "Tunpro" },
    { id: 3, title: "Tunka" },
  ]);

  const onClickItem = (id) => {
    const newtTodos = [...todos];

    setTodos(newtTodos.filter((item) => item.id !== id));
  };

  const onSubmitHandleInput = (value) => {
    const newTodos = [...todos];

    newTodos.push({
      id: newTodos[newTodos.length - 1].id + 1,
      ...value,
    });

    setTodos(newTodos);
  };

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const reqURL =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";

        const response = await fetch(reqURL);
        const responseJson = await response.json();

        const { data } = responseJson;
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPostList();
  }, []);

  return (
    <React.Fragment>
      <PostList posts={posts} />
      <ColorBox />
      <ToDoForm onSubmitHandle={onSubmitHandleInput} />
      <TodoList todos={todos} onTodoClick={onClickItem} />
    </React.Fragment>
  );
}

export default App;
