import React, { useState } from "react";
import CustomPagination from "../pagination/CustomPagination";

function AdminComissionReport(props) {
  const { ulPlatformComm } = props;
  // const ADMIN_COMM_REPORT__DETAILS = [
  //   {
  //     adminname: "Animesh",
  //     role: "Agent",
  //     ulnetpl: "0",
  //   },
  //   {
  //     adminname: "Sri8867",
  //     role: "Master",
  //     ulnetpl: "5000.00",
  //   },
  //   {
  //     adminname: "Ganesh",
  //     role: "Super Master",
  //     ulnetpl: "7500.00",
  //   },
  //   {
  //     adminname: "Lokesh",
  //     role: "Super Admin",
  //     ulnetpl: "10000.00",
  //   },
  // ];
  const ADMIN_COMM_REPORT__DETAILS = ulPlatformComm.map((item) => {
    return {
      adminname: item.admin_name,
      role: item.admin_role,
      ulnetpl: item.ul_platform_comm,
    };
  });
  console.log(ADMIN_COMM_REPORT__DETAILS, "ADMIN_COMM_REPORT__DETAILS");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  return (
    <div>
      <div>
        <h6 className="meetings-heading mb-3">U/L Commission Report</h6>
      </div>
      <hr />
      <div>
        <table className="w-100 match-position-table small-font">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                ADMINS NAME
              </th>
              <th scope="col" className="text-center">
                ROLE
              </th>
              {/* <th scope="col" className="text-center">
                ADMIN NET P/L
              </th> */}
              <th scope="col" className="text-center">
                U/L PLATFORM COMM
              </th>
            </tr>
          </thead>

          {ADMIN_COMM_REPORT__DETAILS?.map((item, index) => (
            <tbody key={index} className="small-font">
              <tr>
                <td className="text-center ">{item?.adminname}</td>
                <td className="text-center">{item?.role}</td>
                {/* <td className="text-center clr-green">{item?.adminpl}</td> */}
                <td className="text-center clr-green"> {item?.ulnetpl}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminComissionReport;
