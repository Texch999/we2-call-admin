import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdminsTable from "./AdminsTable";

function AdminPopReports(props) {
  const {
    show,
    onHide,
    induvisualAdminData,
    
    // data,
    // columns,
    // adminName,
    // role,
    // heading,
    // totalPosition,
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
          <Button className="rounded-pill">
            {induvisualAdminData.client_name} -{" "}
            {induvisualAdminData.account_role}
          </Button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="mb-3 fw-semibold">Heading</h6>
        {/* <AdminsTable
          data={data}
          columns={columns}
          totalPosition={totalPosition}
        /> */}
      </Modal.Body>
    </Modal>
  );
}
export default AdminPopReports;
