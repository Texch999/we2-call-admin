import { useEffect, useState } from "react";
import Table from "./Table";
import { AiOutlineRight } from "react-icons/ai";
import { Chart } from "react-google-charts";
import { GET_UPDATED_MATCHES_DATA } from "../../config/endpoints";
import { call } from "../../config/axios";

function Alert() {
  let register_id = localStorage?.getItem("register_id");

  const [allData, setAllData] = useState([])

  const data1 = [
    {
      admin: "UL",
      event: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      user: "Sri-Agent",
      status: "Join",
    },
    {
      admin: "UL",
      event: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      user: "Sri-Agent",
      status: "Join",
    },
    {
      admin: "UL",
      event: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      user: "Sri-Agent",
      status: "Not-Started",
    },
  ];

  const columns = [
    { header: "Users", field: "admin" },
    { header: "Match Name", field: "event" },
    { header: "Amount", field: "user" },
    { header: "Status", field: "status" },
  ];
  const data = [
    ["Task", "Hours per Day"],
    ["Mobile", 11],
    ["Desktop", 8], // CSS-style declaration
  ];
  const options = {
    title: "Connect Devices",
    pieHole: 0.5,
    is3D: true,
  };

  const getMatchReports = async () => {
    await call(GET_UPDATED_MATCHES_DATA, { register_id })
      .then((res) => {
        setAllData([...res?.data?.matchEntryData, ...res?.data?.fancyEntryData]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMatchReports();
  }, []);

  return (
    <div className="row vh-70 mt-3 meet-box-height">
      <div className="col-6 p-2">
        <div className="meetings-container ">
          <div className="row p-3 align-center">
            <h5 className="col-9 meetings-heading">Alerts</h5>
            <div className="col-3 d-flex">
              <h6 className="meetings-heading">See All</h6>
              <AiOutlineRight />
            </div>
          </div>
          <Table data={data1} columns={columns} />
        </div>
      </div>
      <div className="col-6 p-2">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3">
            <h5 className="col-9 meetings-heading">Connect Devices</h5>
          </div>
          <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
        </div>
      </div>
    </div>
  );
}

export default Alert;
