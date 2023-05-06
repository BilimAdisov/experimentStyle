export const FirstBanner = () => {
  return (
    <div className="firban">
      <div className="firban-wrapper">
        <div className="left-block">
          <div className="top">
            <img
              src="https://pbs.twimg.com/media/D1s15xZWsAARJdv.jpg:large"
              alt="ban-img"
            />
            <span className="dark-effect"></span>
          </div>
          <div className="under">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
        <div className="right-block">
          <img
            src="https://go64.ru/upload/quickly/Fotolia_56334515_Subscription_Monthly_M.jpg"
            alt="r-img"
          />
          <span className="dark-effect"></span>
          <h2 id="blink">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            voluptas quas repellendus ratione unde odio suscipit modi in
            explicabo sunt?
          </h2>
        </div>
      </div>
    </div>
  );
};
