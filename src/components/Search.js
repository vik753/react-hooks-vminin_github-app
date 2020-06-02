import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContext } from "../context/github/githubContext";

const Search = (props) => {
  const [value, setValue] = React.useState("");
  const { show } = useContext(AlertContext);
  const github = React.useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== "Enter") return;

    if (value.trim()) {
      github.search(value.trim())
    } else {
      show("You should enter user data!", "warning");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Input user's nickname..."
        onKeyPress={onSubmit}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
