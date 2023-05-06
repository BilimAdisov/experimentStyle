import { WorkerProfileList } from "../../COMMON/moks/workerProfile";
import { WorkerProfile } from "./WorkerProfile";

export const TeamComponent = () => {
  return (
    <>
      <div
        className="team"
        style={{
          width: "100%",
          minHeight: "300px",
          background: "black",
          padding: "40px 0",
        }}
      >
        <h1
          style={{
            marginLeft: "150px",
            marginBottom: "40px",
          }}
        >
          Наша команда:
        </h1>
        <div
          className="team-wrapper"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {WorkerProfileList.map((item: any) => (
            <WorkerProfile key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
