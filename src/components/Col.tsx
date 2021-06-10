import {ComponentProps} from "react";

type Props = ComponentProps<any> & {
  cols?: number;
};

export const Col = ({children, cols = 1}: Props) => {
  return (
    <div className={`ic-col col-${cols}`}>
      {children}
    </div>
  );
};
