export default function Quick_Action_Card({ Icon, Text }) {
  return (
    <>
      <div className="Quick_Action_Card">
        <a href="#">
          <div className="Quick_Action_Card_Icon">{Icon}</div>
          <div className="Quick_Action_Card_Text">{Text}</div>
        </a>
      </div>
    </>
  );
}
