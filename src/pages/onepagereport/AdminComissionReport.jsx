import React, { useState } from "react";
import CustomPagination from "../pagination/CustomPagination";

function AdminComissionReport(props) {
  const { ulPlatformComm, totalPlatForm } = props;
  const ADMIN_COMM_REPORT__DETAILS = ulPlatformComm.map((item) => {
    return {
      adminname: item.admin_name,
      role: item.admin_role,
      ulnetpl: item.ul_platform_comm,
    };
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                <td className="text-center clr-green"> {item?.ulnetpl}</td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th colSpan={2} className="text-center">
                TOTAL
              </th>
              <th className="text-center clr-green">
                {totalPlatForm ? totalPlatForm?.toFixed(2) : 0}
              </th>
            </tr>
          </tfoot>
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
