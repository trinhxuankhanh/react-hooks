import queryString from "query-string";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import PostList from "./components/PostList";

function App() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });
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

  const handlePageChange = (newPage) => {
    setFilter({
      ...filter,
      _page: newPage,
    });
  };

  const handleFiltersChange = (value) => {
    setFilter({
      ...filter,
      _page: 1,
      title_like: value.searchTerm,
    });
  };

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const query = queryString.stringify(filter);
        const reqURL = `http://js-post-api.herokuapp.com/api/posts?${query}`;

        const response = await fetch(reqURL);
        const responseJson = await response.json();

        const { data, pagination } = responseJson;
        setPosts(data);
        setPagination(pagination);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPostList();
  }, [filter]);

  return (
    <React.Fragment>
      <PostList posts={posts} />
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </React.Fragment>
  );
}

export default App;
