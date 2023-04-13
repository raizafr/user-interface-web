const Navbar = () => {
  return (
    <nav>
      <div className="bg-primary flex justify-between px-28 py-4 text-font-color">
        <div className="text-2xl font-bold ">HOME</div>
        <div className="font-semibold space-x-3">
          <a href={"/login"} className="bg-secondary px-7 py-2 rounded-full">
            login
          </a>
          <a href={"/register"} className="bg-secondary px-7 py-2 rounded-full">
            register
          </a>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#58D68D" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,53.3C672,32,768,32,864,53.3C960,75,1056,117,1152,117.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    </nav>
  );
};

export default Navbar;
