import {ComponentProps} from "react";

export const Container = ({children}: ComponentProps<any>) => {
  return (
    <div className="ic-container">
      {children}
    </div>
  );
};
