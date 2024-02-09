import { useApiTableData } from "../../hooks/useApiTableData";
import Loader from "../../assets/loader.svg";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { formatIdCodeToDate, truncateTextWithHTML } from "./../../helpers/helpers";
import React from "react";
import { Person } from "../../types/dataTypes";
import Pagination from "../../components/Pagination/Pagination";

const ITEMS_PER_PAGE = 10;

const tableDataUrl = "https://midaiganes.irw.ee/api/list?limit=500";

const TablePage: React.FC = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const { data } = useApiTableData<{ list: Person[] }>(tableDataUrl);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleRowClick = (personalCode: number) => {
    setActiveRow((prevActiveRow) => (prevActiveRow === personalCode ? null : personalCode));
  };

  const paginatedData = data
    ? data.list.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    : [];

  useEffect(() => {
    // Reset activeRow when changing pages
    setActiveRow(null);
  }, [currentPage]);

  const handleSort = (column: string) => {
    setSortColumn(column);
    setSortDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
  };

  const sortIndicator = (column: string) => {
    if (sortColumn === column) {
      return sortDirection === "asc" ? "▲" : "▼";
    }
    return "○";
  };

  const sortedData = (): Person[] => {
    const dataList = data?.list ?? [];
    if (sortColumn) {
      const sortedList = [...dataList].sort((a, b) => {
        const valueA = a[sortColumn as keyof Person];
        const valueB = b[sortColumn as keyof Person];

        if (sortDirection === "asc") {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      });

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return sortedList.slice(startIndex, endIndex);
    }

    return paginatedData;
  };

  return (
    <>
      <h1>Nimekiri</h1>
      {!data ? (
        <img src={Loader} alt="Loader" />
      ) : (
        <table className="tablepage">
          <thead className="tablepage__head">
            <tr className="tablepage__row tablepage__head-row">
              <th onClick={() => handleSort("firstname")}>Eesnimi {sortIndicator("firstname")}</th>
              <th onClick={() => handleSort("surname")}>
                Perekonnanimi {sortIndicator("surname")}
              </th>
              <th onClick={() => handleSort("sex")}>Sugu {sortIndicator("sex")}</th>
              <th onClick={() => handleSort("date")}>Sünnikuupäev {sortIndicator("date")}</th>
              <th onClick={() => handleSort("phone")}>Telefon {sortIndicator("phone")}</th>
            </tr>
          </thead>
          <tbody className="tablepage__body">
            {sortedData().map((person: Person) => (
              <React.Fragment key={person.personal_code}>
                <tr
                  key={person.personal_code}
                  className={`tablepage__row tablepage__body-row ${
                    activeRow === person.personal_code && "tablepage__row--active"
                  }`}
                  onClick={() => handleRowClick(person.personal_code)}
                >
                  <td>{person.firstname}</td>
                  <td>{person.surname}</td>
                  <td>{person.sex === "f" ? "naine" : "mees"}</td>
                  <td>{formatIdCodeToDate(person.personal_code.toString())}</td>
                  <td>{person.phone.slice(0, 4) + " " + person.phone.slice(4)}</td>
                </tr>
                {activeRow === person.personal_code && (
                  <tr className="detailed">
                    <td colSpan={5}>
                      <div className="detailed__data">
                        <img
                          src={person.images[0].small}
                          alt={person.images[0].alt}
                          className="detailed__data-image"
                        />
                        <div>
                          <div>{truncateTextWithHTML(person.body, 100)}</div>
                          <Button
                            navigateBack={false}
                            type="rect"
                            label="Loe rohkem"
                            id={`${person.id}`}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
      {data && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} />}
    </>
  );
};

export default TablePage;
