import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Chart } from "react-google-charts";
import { GET_UPDATED_MATCHES_DATA } from "../../config/endpoints";
import { call } from "../../config/axios";
import Table from "./Table";

function Alert() {
  const register_id = localStorage?.getItem("register_id");
  const [allData, setAllData] = useState([]);

  const columns = [
    { header: "Users", field: "client_name" },
    { header: "Match Name", field: "date" },
    { header: "Amount", field: "amount" },
    { header: "Status", field: "record_status" },
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
    backgroundColor: "#082051",
    color: "#fff",
    hAxis: {
      title: "Year",
      titleTextStyle: { color: "#fff" },
      textStyle: { color: "#fff" }, // Set the text color for hAxis
    },
    vAxis: {
      minValue: 0,
      textStyle: { color: "#fff" }, // Set the text color for vAxis
    },
  };

  const getMatchReports = async () => {
    await call(GET_UPDATED_MATCHES_DATA, { register_id })
      .then((res) => {
        setAllData([
          ...res?.data?.matchEntryData,
          ...res?.data?.fancyEntryData,
        ]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (register_id) {
      getMatchReports();
    }
  }, []);
  return (
    <div className="row vh-70 mt-3 meet-box-height">
      <div className="col-6 p-2">
        <div className="meetings-container ">
          <div className="row p-3 align-center">
            <h5 className="col-10 meetings-heading">Alerts</h5>
            <div className="col-2 d-flex align-items-center justify-content-center see-all">
              <div className="meetings-heading me-1">See All</div>
              <AiOutlineRight />
            </div>
          </div>
          <Table data={allData} columns={columns} />
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
