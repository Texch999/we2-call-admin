import { CloseButton, Button, Table } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PackageViewPopUp(props) {
  const packagesData = [
    {
      package_type: "Standard",
      purchase_count: 2,
      used: 2,
      available: 0,
    },
    {
      package_type: "Silver",
      purchase_count: 2,
      used: 2,
      available: 0,
    },
    {
      package_type: "Gold",
      purchase_count: 2,
      used: 2,
      available: 0,
    },
    {
      package_type: "Diamond",
      purchase_count: 20,
      used: 8,
      available: 12,
    },
    {
      package_type: "VIP",
      purchase_count: 25,
      used: 10,
      available: 5,
    },
  ];
  return (
    <Modal {...props} centered className="add-user-modal">
      <Modal.Header closeButton className="mb-2">
        <h6>Srinivas</h6>
        <Button className="agent-button sm-button ms-2">SM</Button>
        <div data-bs-theme="dark" className="p-2 w-100">
          <CloseButton className="close-button-user position-relative" />
        </div>{" "}
      </Modal.Header>
      <Modal.Body>
        <div>
          <Table responsive="md" className="call-management-data">
            <thead>
              <tr>
                <th className="text-center">Packages</th>
                <th className="text-center">Purchase</th>
                <th className="text-center">Used</th>
                <th className="text-center">Available</th>
              </tr>
            </thead>
            <tbody>
              {packagesData?.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{data?.package_type}</td>
                  <td className="text-center">{data?.purchase_count}</td>
                  <td className="text-center package-used-clr">{data?.used}</td>
                  <td className="text-center package-available-clr">
                    {data?.available}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="total-package-values">
              <tr>
                <th>Total Paid</th>
                <th>
                  <Button>10000000</Button>
                </th>
                <th>Balance</th>
                <th>
                  <Button>10000000</Button>
                </th>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default PackageViewPopUp;
