import React from "react";

const BotoxFormButton = () => {
  const formLink =
    "https://na1.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDmPIrWXAb6Z5zpMj0w1tCBxY3h2Si_187KT1N9IZVXq_eloxr8TL_1bFPzCiJaSIg*";

  return (
    <div className="botox-form-button-container">
      <a
        href={formLink}
        className="botox-form-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Botox Treatment Authorization Form
      </a>
    </div>
  );
};

export default BotoxFormButton;
