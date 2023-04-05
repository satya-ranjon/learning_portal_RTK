const Table = ({ children }) => {
  return (
    <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
      {children}
    </table>
  );
};

export default Table;
