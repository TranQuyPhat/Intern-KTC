import React from "react";
import ButtonClickCounter from "./ButtonClickCounter";
import InputFieldTracker from "./InputFieldTracker";
import TonggleSwitch from "./TonggleSwitch";
import HoverHighlight from "./HoverHighlight";
import FormSubmit from "./FormSubmit";
import LastKeyPress from "./LastKeyPress";
import DisplayTextAndHide from "./DisplayTextAndHide";
import DropdownSelection from "./DropdownSelection";
import CheckboxToggle from "./CheckboxToggle";
import SearchFilter from "./SearchFilter";

type Props = {};

export default function ExerciseSummary({}: Props) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Exercise Tổng Hợp</h1>

      <section>
        <h2>1. Đếm số lần bấm nút</h2>
        <ButtonClickCounter />
      </section>

      <section>
        <h2>2. Input Field Tracker</h2>
        <InputFieldTracker />
      </section>

      <section>
        <h2>3. Tonggle Swtich</h2>
        <TonggleSwitch />
      </section>
      <section>
        <h2>4. Hover Highlight</h2>
        <HoverHighlight />
      </section>
      <section>
        <h2>5. Form Submit</h2>
        <FormSubmit />
      </section>
      <section>
        <h2>6. Last Key Press</h2>
        <LastKeyPress />
      </section>
      <section>
        <h2>7. Display Double Click</h2>
        <DisplayTextAndHide/>
      </section>
      <section>
        <h2>8.Dropdown Selection</h2>
        <DropdownSelection/>
      </section>
      <section>
        <h2>9.Checkbox Toggle</h2>
        <CheckboxToggle/>
      </section>
      <section>
        <h2>10.Search Filter</h2>
        <SearchFilter/>
      </section>
    </div>
  );
}
