// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Accordion() {
  const [accordion1, setAccordion1] = useState("");
  const [accordion2, setAccordion2] = useState("");
  const [accordion3, setAccordion3] = useState("");

  const handleClick1 = () => {
    if (accordion1 === "") {
      setAccordion1(
        "This is the first item accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. "
      );
    } else {
      setAccordion1("");
    }
  };

  const handleClick2 = () => {
    accordion2 === ""
      ? setAccordion2(
          "This is the first item accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. "
        )
      : setAccordion2("");
  };

  //   const handleClick3 = () => {
  //     accordion1 === ""
  //       ? setAccordion3(
  //           "This is the first item accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. "
  //         )
  //       : setAccordion3("");
  //   };

  return (
    <div>
      <button onClick={handleClick1}>Accordion1</button>
      <h1>{accordion1}</h1>

      <button onClick={handleClick2}>Accordion2</button>
      <h1>{accordion2}</h1>
      <button
        onClick={() => {
          accordion3 === ""
            ? setAccordion3(
                "This is the first item accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. "
              )
            : setAccordion3("");
        }}
      >
        Accordion3
      </button>
      <h1>{accordion3}</h1>
    </div>
  );
}
