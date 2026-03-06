function Home() {
  return (
    <div className="home" id="home">
      <img className="homeImage" src="/assets/react.svg" alt="Profile" />
      <div className="homeDescription">
        <h2 className="name flex">
          <p className="m">Osama-Khatab</p>
          <p>Front-End developer</p>
        </h2>
        <h1 className="titel flex">
          <p className="m">MY</p>
          <p>Portfolio</p>
        </h1>
        <h3 className="email">eng.osama.khatab@gmail.com</h3>
      </div>
    </div>
  );
}

export default Home;
