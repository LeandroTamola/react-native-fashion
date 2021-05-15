import { ReactElement, ReactNode } from "react";

const conditionalRender = (
  expression: boolean,
  componentWhenTrue: ReactNode,
  componentWhenWhenFalse: ReactNode | null = null
) => {
  return expression ? componentWhenTrue : componentWhenWhenFalse;
};

export default conditionalRender;
