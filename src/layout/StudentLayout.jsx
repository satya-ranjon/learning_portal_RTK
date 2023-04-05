import Navbar from "../components/common/navbar/Navbar";

const StudentLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default StudentLayout;
