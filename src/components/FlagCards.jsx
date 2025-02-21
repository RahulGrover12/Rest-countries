import SingleFlagCard from "./SingleFlagCard";

const FlagCards = ({ newFlagData, loading, error, darkMode }) => {
  if (loading) {
    return (
      <h1 className="flex justify-center text-5xl font-medium mt-50">
        Loading...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="flex justify-center text-5xl font-medium mt-50">
        {error}
      </h1>
    );
  }

  return (
    <section className="grid grid-cols-4 gap-10 mt-30 place-items-center">
      {newFlagData.map((flag, index) => {
        return <SingleFlagCard key={index} flag={flag} darkMode={darkMode} />;
      })}
    </section>
  );
};

export default FlagCards;
