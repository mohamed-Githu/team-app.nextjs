const WithSpinner = ({ isLoading, children }) =>
  isLoading ? (
    <div className="max-w-full pt-60 flex justify-center items-center overflow-hidden">
      <div className="border-grey-light border-t-blue animate-spin border-8 h-20 w-20 rounded-full" />
    </div>
  ) : (
    <>{children}</>
  );

export default WithSpinner;
