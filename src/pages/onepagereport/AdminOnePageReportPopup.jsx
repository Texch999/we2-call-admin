import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdminsTable from "./AdminsTable";

function AdminOnePageReportPopup(props) {
  const { show, onHide, data, columns, adminName, role, heading } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="add-user-modal admin-reports-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 mb-2">
          <Button className="rounded-pill">
            {adminName} - {role}
          </Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="mb-2">{heading}</h6>
        <AdminsTable data={data} columns={columns} />
      </Modal.Body>
    </Modal>
  );
}
export default AdminOnePageReportPopup;
