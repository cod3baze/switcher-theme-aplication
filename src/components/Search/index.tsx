import React from "react";

import { Input } from "./styles";

const Search: React.FC = () => {
  return (
    <div>
      <Input
        placeholder="User para buscar no github"
        type="search"
        name="search"
        id="search"
      />
    </div>
  );
};

export default Search;
