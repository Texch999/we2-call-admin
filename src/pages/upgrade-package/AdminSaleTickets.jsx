import Table from "../home-page/Table";
import { BsFillEyeFill } from "react-icons/bs";
import CustomPagination from "../pagination/CustomPagination";
import { useState } from "react";
import UpgradeYourPackagePopup from "./UpgradeYourPackagePopup";
import {
  GET_ADMIN_PACKAGE_REQUEST,
  APPROVE_REJECT_FOR_SUBSCRIPTION,
  BULK_PACKAGE_APPROVE_REJECT,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect } from "react";
import TicketUpgradePopup from "./TicketUpgradePopup";

function AdminSaleTickets() {
  const [showTicketPackagePopup, setTicketShowPackagePopup] = useState(false);
  const [saletickets, setSaletickets] = useState();
  const handleNewButton = (data) => {
    setTicketShowPackagePopup(true);
    setSaletickets(data);
  };
  const [saleTicket, setSaleTicket] = useState([]);
  const [isProcessing, setIsProcessing] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const ADMIN_SALE_TICKETS_HEADING = [
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    {
      header: "NAME/ROLE",
      field: "nameRole",
    },
    {
      header: "TRX ID",
      field: "trxID",
    },
    {
      header: "PACKAGE TRX",
      field: "packageTRX",
    },
    {
      header: "PAY AMOUNT",
      field: "payAmount",
    },
    {
      header: "STATUS",
      field: "status",
    },
    {
      header: "",
      field: "newButton",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getAllsaleTickets = async () => {
    const payload = {
      register_id: localStorage.getItem("register_id"),
    };
    await call(GET_ADMIN_PACKAGE_REQUEST, payload)
      .then((res) => {
        const resp = res?.data?.data
          .map((item) => {
            const dateTimeString = `${item.created_date} ${item.created_time}`;
            const timestamp = new Date(dateTimeString).getTime();
            item.timestamp = timestamp;
            return item;
          })
          ?.sort((a, b) => b.timestamp - a.timestamp);
        setSaleTicket(resp);
      })
      .catch((err) => console.log(err));
  };

  const handleSuccessfullPopup = async (
    transaction_id,
    type,
    status,
    reason
  ) => {
    if (status === "Reject" && !reason) {
      alert("Please select The Reject Reason");
      return;
    }
    const url = type
      ? APPROVE_REJECT_FOR_SUBSCRIPTION
      : BULK_PACKAGE_APPROVE_REJECT;
    setIsProcessing(true);
    setStatus(status);
    await call(url, {
      register_id: localStorage.getItem("register_id"),
      transaction_id,
      status,
      reason,
    })
      .then((res) => {
        if (res.status === 200) {
          setIsProcessing(false);
          setStatus("");
          setTicketShowPackagePopup(false);
          if (res.data.status == 403) {
            alert(res.data.message);
            return;
          } else {
            reason && setTicketShowPackagePopup(false);
            if (status === "Approved") setStatus("");
            getAllsaleTickets();
          }
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setStatus("");
        console.log(err);
      });
  };

  useEffect(() => {
    getAllsaleTickets();
  }, []);

  const ADMIN_SALE_TICKETS_DATA = saleTicket.map((obj) => ({
    dateAndTime: (
      <div>
        {obj.created_date}-{obj.created_time}
      </div>
    ),
    nameRole: (
      <div>
        {obj?.summary?.requester_name}-{obj?.summary?.requester_role}
      </div>
    ),
    trxID: obj.transaction_id,
    packageTRX: obj.summary.total_package_cost,
    payAmount: obj.summary.final_package_cost,
    status:
      obj?.status === "Approved" ? (
        <div className="rounded-pill p-1 completed-btn">{obj?.status}</div>
      ) : obj?.status === "Reject" ? (
        <div className="rounded-pill p-1 reject-btn">{obj?.status}</div>
      ) : (
        <div className="rounded-pill p-1 pending-btn">{obj?.status}</div>
      ),
    newButton:
      obj?.status === "pending" ? (
        <div
          className="rounded p-1 completed-btn"
          onClick={() => handleNewButton(obj)}
        >
          NEW
        </div>
      ) : (
        <div className="rounded p-1 " onClick={() => handleNewButton(obj)}>
          Click_here
        </div>
      ),
  }));

  return (
    <div className="mt-3">
      <Table
        data={ADMIN_SALE_TICKETS_DATA}
        columns={ADMIN_SALE_TICKETS_HEADING}
      />
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
      <TicketUpgradePopup
        isProcessing={isProcessing}
        saletickets={saletickets}
        showTicketPackagePopup={showTicketPackagePopup}
        setTicketShowPackagePopup={setTicketShowPackagePopup}
        handleSuccessfullPopup={handleSuccessfullPopup}
        status={status}
      />
    </div>
  );
}

export default AdminSaleTickets;
