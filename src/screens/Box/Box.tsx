import React from "react";
import { ComponentsAccordion } from "../../components/ComponentsAccordion";
import "./style.scss";

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="384:2734-frame">
      <div className="components-accordion-2">
        <ComponentsAccordion
          active={false}
          className="components-accordion-item"
          clicked={false}
          disabled={false}
          flush={false}
        />
        <ComponentsAccordion
          active={false}
          className="components-accordion-instance"
          clicked
          disabled={false}
          flush={false}
        />
        <ComponentsAccordion
          active={false}
          className="components-accordion-item"
          clicked={false}
          disabled
          flush={false}
        />
        <ComponentsAccordion
          active
          className="components-accordion-item"
          clicked={false}
          disabled={false}
          flush={false}
        />
        <ComponentsAccordion
          active={false}
          className="components-accordion-item"
          clicked={false}
          disabled={false}
          flush
        />
        <ComponentsAccordion
          active={false}
          className="components-accordion-instance"
          clicked
          disabled={false}
          flush
        />
        <ComponentsAccordion
          active={false}
          className="components-accordion-item"
          clicked={false}
          disabled
          flush
        />
        <ComponentsAccordion
          active
          className="components-accordion-item"
          clicked={false}
          disabled={false}
          flush
        />
      </div>
    </div>
  );
};
