import PurpleBow from "../assets/PurpleBow";

function Title({ title, id }) {
  return (
    <div className="title-bow" id={id}>
      <PurpleBow />
      <span>{title}</span>
      <PurpleBow />
    </div>
  );
}

export default Title;
