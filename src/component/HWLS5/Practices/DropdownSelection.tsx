import React, { useState } from "react";

type Props = {};

export default function DropdownSelection({}: Props) {
  const [selectedOption, setSelectedOption] = useState<string>("Apple");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Banana">Banana</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}
