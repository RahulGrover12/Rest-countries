const SingleFlagCard = ({ flag, darkMode }) => {
  // console.log(flag);
  return (
    <>
      <div
        className={`h-90 w-75 shadow-md rounded-xl hover:scale-102 
      ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
      >
        <figure>
          <img
            src={flag.flags.png}
            alt=""
            className="w-full max-h-40 rounded-tl-lg rounded-tr-lg"
          />
        </figure>
        <div className="flex flex-col mt-5 ml-7">
          <h1 className="text-2xl font-bold">{flag.name.common}</h1>
          <ul className="font-medium mt-4 text-lg">
            <li>
              Population: <span className="font-light">{flag.population}</span>
            </li>
            <li>
              Region: <span className="font-light">{flag.region}</span>
            </li>
            <li>
              Capital: <span className="font-light">{flag.capital}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleFlagCard;
