import Cv from "./Cv";

const About = () => {
  return (
    <section>
      <div className="grid grid-cols-3">
        <div className="h-screen ">
          <h1 className="sticky top-0 text-8xl">1. Om mig</h1>
        </div>
        <div className=" h-1/2 m-1/3 place-self-end col-span-2">
          <p className="pt-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            reiciendis doloremque voluptas, incidunt vitae placeat impedit
            blanditiis voluptatibus provident odit architecto rerum iste
            excepturi. Rem, quis maxime laudantium consequuntur dignissimos
            totam vel voluptatem sunt quisquam, molestias pariatur temporibus
            voluptatum. Doloribus alias labore non accusamus reprehenderit
            officia necessitatibus laudantium vel! Quibusdam.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 h-fit">
        <div className="h-full w-fit">
          <h1 className=" text-8xl sticky top-0 ">2. CV</h1>
        </div>
        <div className="col-span-2  h-1/2 mt-56 ">
          <Cv></Cv>
        </div>
        <div className="h-screen"></div>
      </div>
    </section>
  );
};

export default About;
