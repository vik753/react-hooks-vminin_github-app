import React from "react";
import axios from "axios";
import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };

  const [state, dispatch] = React.useReducer(githubReducer, initialState);

  const { user, users, loading, repos } = state;

  const search = async (value) => {
    setLoading();

    const response = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const getUser = async (name) => {
    setLoading();
    // ...
    dispatch({
      type: GET_USER,
      payload: {},
    });
  };

  const getRepos = async (name) => {
    setLoading();
    // ...
    dispatch({
      type: GET_REPOS,
      payload: [],
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        search,
        getUser,
        getRepos,
        clearUsers,
        setLoading,
        user,
        users,
        loading,
        repos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
