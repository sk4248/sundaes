import Alert from "react-bootstrap/alert";

export default function AlertBanner({ message, variant }) {
  const alertMessage =
    message || "An unexpcted error occured. Please try again later";
  const alertVariant = variant || "danger";
  return (
    <Alert
      variant={alertVariant}
      message={alertMessage}
      style={{ backgroundColor: "red" }}
    />
  );
}
