import Cards from "./Cards";

function MainComponent() {
  return (
    <div className="w-4/5 content-center mt-8 mx-auto text-center place-items-center">
      <div className="text-center mt-5 py-10 w-1/2">
        <p className="text-sm text-sky-500 font-bold font-montserrat">
          Welcome
        </p>
        <div className="my-8">
          <p className="text-6xl text-white font-bold leading-normal font-montserrat">
            Selling on the internet like a pro
          </p>
          <p className="text-white text-base tracking-wider mt-6 font-montserrat">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
        </div>
        <div>
          <button className="bg-sky-500 text-sm text-white px-10 py-4 rounded-sm font-montserrat">
            Get Quote New
          </button>
          <button className="border border-sky-500 text-sm text-sky-500 px-10 py-4 rounded-sm ml-1 font-montserrat">
            Learn More
          </button>
        </div>
      </div>
      <Cards />
    </div>
  );
}
export default MainComponent;
