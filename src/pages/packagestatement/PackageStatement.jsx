import React, { useEffect, useState } from "react";
import Table from "../home-page/Table";
import Pagination from "react-bootstrap/Pagination";
import "./styles.css";
import { call } from "../../config/axios";
import axios from "axios";

function PackageStatement() {
  const packageStatementColumns = [
    {
      field: "pkg_trans",
      header: "Pkg Trans...",
    },
    {
      field: "date_time",
      header: "Date & Time",
    },
    {
      field: "paid_amount",
      header: "Paid Amount",
    },
    {
      field: "sell_amount",
      header: "Sell Amount",
    },
  ];
  const [onePackageStatementData, setPackageStatementData] = useState([]);
  const itemsPerPage = 1; // Number of items per page
  const totalItems = 5; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(4);
  // Generate static data for demonstration
  const generateStaticData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);
    const packageStatementData = [
      {
        pkg_trans: "By Bulk Pkgs",
        date_time: (
          <div>
            <div>29-09-23</div>
            <div>11.45pm</div>
          </div>
        ),
        paid_amount: "10,000",
        sell_amount: "--",
      },
      {
        pkg_trans: "Sale S7 Admin",
        date_time: (
          <div>
            <div>29-09-23</div>
            <div>11.45pm</div>
          </div>
        ),
        paid_amount: "--",
        sell_amount: "15,000",
      },
      {
        pkg_trans: "By Regular Pkgs",
        date_time: (
          <div>
            <div>29-09-23</div>
            <div>11.45pm</div>
          </div>
        ),
        paid_amount: "1,00,000",
        sell_amount: "--",
      },
    ];
    return packageStatementData;
  };
  const renderData = () => {
    const packageStatementData = generateStaticData();
    return (
      packageStatementData?.length > 0 &&
      packageStatementData?.map((item, index) => {
        return item;
      })
    );
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  // generating APIDATA for pagination
  // const handlePackageStatementData = async () => {
  //   axios
  //     .get(
  //       `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${onePackageStatementData.limit}`
  //     )
  //     .then((res) => {
  //       setPackageStatementData((prev) => ({
  //         ...prev,
  //         data: res.data,
  //       }));
  //     })
  //     .catch((err) => {
  //       console.log(err, "Error");
  //       throw err;
  //     });
  // };
  // useEffect(() => {
  //   handlePackageStatementData();
  // }, []);

  // const handlePageChange = (pageNumber) => {
  //   setPackageStatementData((prev) => ({ ...prev, activePage: pageNumber }));
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`)
  //     .then((res) => {
  //       setPackageStatementData((prev) => ({
  //         ...prev,
  //         data: res.data,
  //       }));
  //     })
  //     .catch((err) => {
  //       console.log(err, "Error");
  //       throw err;
  //     });
  // };
  return (
    <div>
      <h3>Package-Statement</h3>
      <Table columns={packageStatementColumns} data={renderData()} />
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> 1 </b> 0f <b> 200 </b> Entries....
          </span>
        </div>
        <div className="d-flex justify-content-end">
          <Pagination>
            {/* <Pagination.First /> */}
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <div className="d-flex flex-justify-between flex-row total-count-container mt-4 py-2 rounded">
          <div className="w-50 text-end">Total</div>
          <div className="d-flex flex-space-between flex-row w-50">
            <div className="clr-green w-50 text-center">1,10,000.00</div>
            <div className="clr-green w-50 text-center">1,30,000.00</div>
          </div>
        </div>
        <div className="d-flex flex-justify-between flex-row total-count-container mt-4 w-100 py-2 rounded">
          <div className="w-50 text-end">Net P/L</div>
          <div className="clr-green w-50 text-center">+20,000.00</div>
        </div>
      </div>
    </div>
  );
}

export default PackageStatement;
