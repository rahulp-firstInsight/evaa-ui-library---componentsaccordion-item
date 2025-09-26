import React from "react";
import { useReducer } from "react";
import { LayoutSlotsBase } from "../LayoutSlotsBase";
import { TextTitle } from "../TextTitle";
import "./style.scss";

interface Props {
  active: boolean;
  disabled: boolean;
  flush: boolean;
  clicked: boolean;
  className: any;
}

export const ComponentsAccordion = ({
  active,
  disabled,
  flush,
  clicked,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    active: active,

    disabled: disabled,

    flush: flush,

    clicked: clicked,
  });

  return (
    <div
      className={`components-accordion flush-${state.flush} clicked-${state.clicked} disabled-${state.disabled} active-${state.active} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {!state.active && (
        <div className="accordion-header">
          <div className="header">
            <TextTitle
              badge={false}
              className="title"
              fillContainer
              iconLeft={false}
              iconRight={false}
              subtitle={false}
              textClassName={`${state.disabled ? "class" : "class-2"}`}
              title="Accordion Item"
            />
            <div className="icon">
              <div className="width-change-size">
                <div className="ignore" />

                <div className="ignore" />
              </div>

              <div className="icon-wrapper-h">
                <div className="height-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper">
                  <img
                    className="union"
                    alt="Union"
                    src={
                      !state.flush && !state.disabled && !state.clicked
                        ? "https://c.animaapp.com/BHJxLDK2/img/union-9.svg"
                        : state.disabled
                          ? "https://c.animaapp.com/BHJxLDK2/img/union-15.svg"
                          : "https://c.animaapp.com/BHJxLDK2/img/union-14.svg"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {state.active && (
        <>
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="text-title-instance"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src="https://c.animaapp.com/BHJxLDK2/img/union-16.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-body">
            <LayoutSlotsBase className="layout-slots-base-instance" />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (
    state.active === false &&
    state.clicked === true &&
    state.disabled === false &&
    state.flush === false
  ) {
    switch (action) {
      case "click":
        return {
          active: true,

          clicked: false,

          disabled: false,

          flush: false,
        };
    }
  }

  if (
    state.active === true &&
    state.clicked === false &&
    state.disabled === false &&
    state.flush === false
  ) {
    switch (action) {
      case "click":
        return {
          active: false,

          clicked: false,

          disabled: false,

          flush: false,
        };
    }
  }

  if (
    state.active === false &&
    state.clicked === true &&
    state.disabled === false &&
    state.flush === true
  ) {
    switch (action) {
      case "click":
        return {
          active: true,

          clicked: false,

          disabled: false,

          flush: true,
        };
    }
  }

  if (
    state.active === true &&
    state.clicked === false &&
    state.disabled === false &&
    state.flush === true
  ) {
    switch (action) {
      case "click":
        return {
          active: false,

          clicked: false,

          disabled: false,

          flush: true,
        };
    }
  }

  return state;
}
