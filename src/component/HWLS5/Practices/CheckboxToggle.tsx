import React from "react";

type Props = {};

export default function CheckboxToggle({}: Props) {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
        Accept terms and condition
      </label>
      <p>{isChecked ? "✔️ Accepted" : "❌ Not accepted"}</p>
    </div>
  );
}
