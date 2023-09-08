import Table from "../home-page/Table";

function AdminDetails() {
  const ADMIN_DETAILS = [
    {
      id: 1,
      sNo: 1,
      date: "01/08/2023",
      time: "13:56:00 PM",
      name: "jayanta657",
      role: "Super Admin",
    },
    {
      id: 1,
      sNo: 2,
      date: "01/08/2023",
      time: "13:56:00 PM",
      name: "jayanta657",
      role: "Admin",
    },
    {
      id: 1,
      sNo: 3,
      date: "01/08/2023",
      time: "13:56:00 PM",
      name: "jayanta657",
      role: "Master",
    },
  ];
  const ADMIN_HEAD = [
    {
      header:"S.NO",
      field:"sNo"
    },
    {
      header:"DATE",
      field:"date"
    },
    {
      header:"TIME",
      field:"time"
    },
    {
      header:"NAME",
      field:"name"
    },
    {
      header:"ROLE",
      field:"role"
    },
  ]
  return (
    <div className="mt-2">
      {/* <div className="your-users-heading">
        <Row>
          <Col span={4}>
            <div className="font-12 fw-600">S.NO</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">DATE</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">TIME</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">NAME</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">ROLE</div>
          </Col>
        </Row>
      </div>
      <div className="meeting-content">
        {ADMIN_DETAILS?.map((item, index) => (
          <div className="your-users-content" key={index}>
            <Row>
              <Col span={4}>
                <div className="font-12 fw-600">{item.sNo}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.date}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.time}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.name}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.role}</div>
              </Col>
            </Row>
          </div>
        ))}
      </div> */}
      <Table data={ADMIN_DETAILS} columns={ADMIN_HEAD}/>
    </div>
  );
}

export default AdminDetails;
