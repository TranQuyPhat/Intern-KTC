import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};
const itemsList = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

export default function SearchFilter({}: Props) {
  const [searchVal, setSearchVal] = useState("");
  const [items, setItems] = useState(itemsList);
  function handleSearch() {
    if (searchVal === "") {
      setItems(itemsList);
      return;
    }
    const filterBySearch = itemsList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setItems(filterBySearch);
  }
  return (
    <div>
      <input onChange={(e) => setSearchVal(e.target.value)} />
      <BsSearch className="search-icon" onClick={handleSearch} />
      <div >
        {items.map((item, index) => (
          <div key={index} className="search-item" style={{border: "1px solid #ccc", padding: "10px", marginTop: "10px"}}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
