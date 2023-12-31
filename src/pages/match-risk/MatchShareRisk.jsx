import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineArrowForward } from "react-icons/md";
import { useHistory, useParams } from "react-router";

const MatchShareRisk = () => {
  const history = useHistory();
  const { team_name } = useParams();
  const matchShareRiskData = [
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 Ahmadabad Stadium",
      team_name: team_name,
      name: "Srinivas",
      role: "SM",
      team_one: 50000000,
      dropdown: (
        <MdOutlineArrowForward
          size={18}
          className="cursor-pointer clr-yellow"
          onClick={() => history.push("/match-share-risk-position")}
        />
      ),
      team_two: 50000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 Ahmadabad Stadium",
      team_name: team_name,
      name: "Srinivas",
      role: "Admin",
      team_one: 50000000,
      dropdown: (
        <MdOutlineArrowForward
          size={18}
          className="cursor-pointer clr-yellow"
        />
      ),
      team_two: 50000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 Ahmadabad Stadium",
      team_name: team_name,
      name: "Srinivas",
      role: "SM",
      team_one: 50000000,
      dropdown: (
        <MdOutlineArrowForward
          size={18}
          className="cursor-pointer clr-yellow"
        />
      ),
      team_two: 50000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 Ahmadabad Stadium",
      team_name: team_name,
      name: "srinivas",
      role: "Agent",
      team_one: 50000000,
      dropdown: (
        <MdOutlineArrowForward
          size={18}
          className="cursor-pointer clr-yellow"
        />
      ),
      team_two: 50000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 Ahmadabad Stadium",
      team_name: team_name,
      name: "Jayanth",
      role: "Admin",
      team_one: 50000000,
      dropdown: (
        <MdOutlineArrowForward
          size={18}
          className="cursor-pointer clr-yellow"
        />
      ),
      team_two: 50000000,
    },
  ];
  const matchShareRiskHeadings = [
    "DATE & TIME",
    "SERIES NAME",
    "TEAM NAME",
    "NAME",
    "ROLE",
    "INDIA",
    "",
    "SRI LANKA",
  ];
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Match Share Risk </h5>
      <hr />
      <div>
        <Button className="all-match-button share-risk-match-button clr-yellow w-100 text-start">
          Share Risk - Live Match
        </Button>
      </div>
      <hr />
      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              {matchShareRiskHeadings.map((headings, index) => (
                <th className="text-center" key={index}>
                  {headings}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matchShareRiskData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.date_time}</td>
                <td className="text-center">{data?.series_name}</td>
                <td className="text-center clr-yellow">{data?.team_name} </td>
                <td className="text-center">{data?.name}</td>
                <td className="text-center">{data?.role}</td>
                <td className="text-center clr-green">
                  {parseFloat(data?.team_one).toFixed(2)}
                </td>
                <td className="text-center">{data?.dropdown}</td>
                <td className="text-center clr-red">
                  {parseFloat(data?.team_two).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MatchShareRisk;
