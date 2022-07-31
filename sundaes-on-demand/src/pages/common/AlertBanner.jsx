import Alert from "react-bootstrap/Alert";

export default function AlertBanner({ message, variant }) {
  const alertMesssage =
    message || "An unexpected error occured. Please try again later.";
  const alertVariant = variant || "danger";
  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMesssage}
    </Alert>
  );
}
