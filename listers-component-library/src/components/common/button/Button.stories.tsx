import React, { Fragment } from "react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import CSS from "csstype";


const divStyles: CSS.Properties = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "flext-start",
  paddingTop: "10px"
};

const varientOptions = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Positivte: "positive",
  Negative: "negative",
  Info: "info",
  Warning: "warning",
  Light: "light"
};

const buttonSizes = {
  Tiny: "tiny",
  Small: "small",
  Compact: "compact",
  Large: "large",
  Huge: "huge",
  Wide: "wide"
};

const buttonTypes = {
  Pill: "pill",
  Sharp: "sharp",
  Full: "full",
  Clear: "clear"
};

const textSize = {
  Alpha: "alpha",
  Beta: "beta",
  Gamma: "gamma",
  Delta: "delta",
  Epsilon: "epsilon",
  Zeta: "zeta"
};

export const AllVarients = () => (
  <Fragment>
    <div style={divStyles}>
      <Button varient={varientOptions.Primary} text="Primary" />
      <Button varient={varientOptions.Secondary} text="Secondary" />
      <Button varient={varientOptions.Tertiary} text="Tertiary" />
      <Button varient={varientOptions.Positivte} text="Positive" />
      <Button varient={varientOptions.Negative} text="Negative" />
      <Button varient={varientOptions.Info} text="Info" />
      <Button varient={varientOptions.Warning} text="Warning" />
      <Button varient={varientOptions.Light} text="Light" />
    </div>
  </Fragment>
);

export const Playground = () => (
  <Button
    text={text("Text", "Button")}
    type={select("Type", buttonTypes, "large")}
    textSize={select("TextSize", textSize, "alpha")}
    varient={select("Varient", varientOptions, "primary")}
    buttonSize={select("Size", buttonSizes, "large")}
    hasOutline={boolean("Outline", false)}
    hasBigOutline={boolean("Big Outline", false)}
    onClick={action("button_clicked")}
    disabled={boolean("Disabled", false)}
    hasIcon={boolean("Has Icon", false)}
  />
);

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs, withA11y]
};
