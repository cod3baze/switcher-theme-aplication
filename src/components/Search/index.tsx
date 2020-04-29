import React, { useState, memo } from "react";

import api from "../../services/api.js";

import { Input, Button } from "./styles";

const Search: React.FC = () => {
  const [usr, setUsr] = useState("");
  const [data, setData] = useState([]);

  async function handle_search(user: string) {
    const res = await api.get(`/${user}`);

    if (res) setData(res.data);
  }

  return (
    <div>
      <Input
        value={usr}
        onChange={(e) => setUsr(e.target.value)}
        placeholder="Usuário no github. Ex: elliasallex"
        type="search"
        name="search"
        id="search"
      />
      <Button onClick={() => handle_search(usr)}>Buscar</Button>
    </div>
  );
};

export default memo(Search);
