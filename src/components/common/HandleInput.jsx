//import React, { useState } from "react";
export const HandleInput = () => {
  return (
    <>
      <table className="table-auto border-collapse border border-slate-400 m-5">
        <thead>
          <tr>
            <th className="text-gray-600 border border-slate-300">ID</th>
            <th className="text-gray-600 border border-slate-300">Name</th>
            <th className="text-gray-600 border border-slate-300">Subject</th>
            <th className="text-gray-600 border border-slate-300">Grade</th>
            <th className="text-gray-600 border border-slate-300">MOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-gray-600 border border-slate-300">001</td>
            <td className="text-gray-600 border border-slate-300">
              Mazi Aleza
            </td>
            <td className="text-gray-600 border border-slate-300">
              Math
            </td>
            <td className="text-gray-600 border border-slate-300">A</td>
            <td className="text-gray-600 border border-slate-300">99959466</td>
          </tr>
          <tr>
            <td className="text-gray-600 border border-slate-300">002</td>
            <td className="text-gray-600 border border-slate-300">
              Abi Mazalo
            </td>
            <td className="text-gray-600 border border-slate-300">
              Computer science
            </td>
            <td className="text-gray-600 border border-slate-300">B</td>
            <td className="text-gray-600 border border-slate-300">8584596</td>
          </tr>
          <tr>
            <td className="text-gray-600 border border-slate-300">003</td>
            <td className="text-gray-600 border border-slate-300">
              Sandy
            </td>
            <td className="text-gray-600 border border-slate-300">
              Math
            </td>
            <td className="text-gray-600 border border-slate-300">C</td>
            <td className="text-gray-600 border border-slate-300">985857</td>
          </tr>
        </tbody>
      </table>
      <button className="btn bg-blue-500 ml-5 p-2">Send </button>
    </>
  );
};
