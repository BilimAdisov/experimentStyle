import sample from "../../../assets/video/sample.mp4";

export const SecondBanner = () => {
  return (
    <>
      <div className="secban">
        <div className="secban-wrapper">
          <span className="dark-effect"></span>
          <video className="video" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
          </video>
          <div className="slogan">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              corporis qui laboriosam eum possimus debitis nam accusantium,
              deserunt atque reiciendis adipisci facere delectus accusamus
              quibusdam voluptate amet voluptates eaque doloremque ducimus
              impedit ea at voluptatem temporibus. Corrupti doloribus maxime
              laudantium at labore est consectetur soluta rem nesciunt incidunt,
              fugiat nam?
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
