export const BaseLayout = ({ children }) => {
  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 20 }}>
      {children}
    </div>
  );
};
