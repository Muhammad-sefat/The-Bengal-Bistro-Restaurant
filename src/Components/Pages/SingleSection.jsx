import service from "../../assets/home/chef-service.jpg";
const SingleSection = () => {
  return (
    <div
      className="bg-center h-[70vh] my-16 flex justify-center items-center"
      style={{
        backgroundImage: `url(${service})`,
      }}
    >
      <div className="bg-white w-[60%] mx-auto p-12 rounded">
        <h1 className="text-4xl py-4">The Bengal Bistro Restaurant</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default SingleSection;
