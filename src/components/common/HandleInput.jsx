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
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="text-gray-600 border border-slate-300">
              Malcolm Lockyer
            </td>
            <td className="text-gray-600 border border-slate-300">1961</td>
            <td className="text-gray-600 border border-slate-300">99959466</td>
          </tr>
          <tr>
            <td className="text-gray-600 border border-slate-300">002</td>
            <td className="text-gray-600 border border-slate-300">
              Witchy Woman
            </td>
            <td className="text-gray-600 border border-slate-300">
              The Eagles
            </td>
            <td className="text-gray-600 border border-slate-300">1972</td>
            <td className="text-gray-600 border border-slate-300">8584596</td>
          </tr>
          <tr>
            <td className="text-gray-600 border border-slate-300">003</td>
            <td className="text-gray-600 border border-slate-300">
              Shining Star
            </td>
            <td className="text-gray-600 border border-slate-300">
              Earth, Wind, and Fire
            </td>
            <td className="text-gray-600 border border-slate-300">1975</td>
            <td className="text-gray-600 border border-slate-300">985857</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
