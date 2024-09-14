const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black1 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 md:h-24 md:w-24 border-t-2 border-b-2 border-lime2"></div>
    </div>
  );
};

export default Loader;
