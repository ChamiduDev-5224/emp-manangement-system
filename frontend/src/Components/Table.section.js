import axios from "axios";
import React, { useEffect, useState } from "react";

function Tablesection(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios.get("http://localhost:5000/api/emp/getAlldata").then((res) => {
      const data = res.data.data;
      setData(data);
      console.log(data);
    });
  };
  const editData = () => {};
  const deleteData = (id) => {
    console.log("hello");
    axios
      .delete("http://localhost:5000/api/emp/deleteEmp/" + id)
      .then((response) => {
        fetchData();
      });
  };
  return (
    <div className="mx-14">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className=" w-[10rem] text-sm text-left text-gray-500 dark:text-gray-400 lg:w-[78rem] content-center ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Display Name
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 text-black"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Emp Id
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 text-black"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Designation</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Emp. Type</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Experience</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((items, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {items.displayname}
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    {items.id.toLocaleString(undefined, {
                      useGrouping: false,
                      minimumIntegerDigits: 4,
                    })}
                  </td>
                  <td className="px-6 py-4">{items.designation}</td>
                  <td className="px-6 py-4">{items.emptype}</td>
                  <td className="px-6 py-4">{items.experience}</td>
                  <td className="px-6 py-4 ">
                    <div className="flex flex-row gap-3">
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          editData(
                            items.catId,
                            items.catName,
                            items.create_at,
                            items.updated_at
                          );
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        onClick={() => {
                          deleteData(items.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tablesection;
