import { FC, PropsWithChildren } from "react";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 20 }}>
      {children}
    </div>
  );
};
