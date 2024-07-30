/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {children}
    </div>
  );
};

export default Container;
