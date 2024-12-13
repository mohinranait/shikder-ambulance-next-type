/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";

// Define column type
type Column = {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string, record: any, index: number) => React.ReactNode;
};

// data type
type DataSource = {
  [key: string]: any;
};

// Component type
type TableType = {
  columns: Column[];
  dataSource: DataSource[];
  actionWidth?: number | string;
};

const CustomTable: FC<TableType> = ({ columns, dataSource, actionWidth }) => {
  return (
    <>
      <div className="overflow-x-auto ">
        <table className=" w-full border border-slate-300 shadow-md   mx-auto border-gray-100  ">
          <thead>
            <tr className="bg-white text-slate-900">
              {columns?.map((column, i) => (
                <th key={i} className="py-3 px-6 font-medium text-left ">
                  {column?.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource?.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-300"
              >
                {columns?.map((column, cIndex) => (
                  <td
                    className="py-4 px-6 border-b border-slate-300"
                    key={cIndex}
                  >
                    {column.render
                      ? column.render(
                          item[column.dataIndex],
                          item,
                          dataSource.indexOf(item)
                        )
                      : item[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomTable;
