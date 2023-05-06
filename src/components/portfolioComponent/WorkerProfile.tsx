export const WorkerProfile = ({ name, lastName, avatar, position }: any) => {
  return (
    <>
      <div className="worker-card">
        <div className="avatar-container">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
        <h4 className="worker-name">
          {lastName} {name}
        </h4>
        <span className="job-position">{position}</span>
      </div>
    </>
  );
};
