import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdminsTableMatchWise from "./AdminsTableMatchWise";

function AdminPopReports(props) {
  const {
    show,
    onHide,
    data,
    columns,
    adminName,
    role,
    heading,
    totalPosition,
  } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="add-user-modal admin-reports-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 mb-2">
          {adminName && (
            <Button className="rounded-pill">
              {adminName} - {role}
            </Button>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="mb-3 fw-semibold">{heading}</h6>
        <AdminsTableMatchWise
          data={data}
          columns={columns}
          totalPosition={totalPosition}
        />
      </Modal.Body>
    </Modal>
  );
}
export default AdminPopReports;
