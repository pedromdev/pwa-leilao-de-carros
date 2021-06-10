import {ComponentProps} from "react";

export const Row = ({children}: ComponentProps<any>) => {
  return (
    <div className="ic-row">
      {children}
    </div>
  );
};
