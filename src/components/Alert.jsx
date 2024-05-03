import Alert from "react-bootstrap/Alert";
const Alerts = ({ colorAlert, textAlert }) => {
  return (
    <>
      <Alert className="" variant={colorAlert}>
        <p className="mb-0">{textAlert}</p>
      </Alert>
    </>
  );
};
export default Alerts;
