const OurMenu = ({ hedaing, title, image }) => {
  return (
    <div className="my-8">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{hedaing}</h1>
            <p className="mb-5">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
