import { useState } from "react";
import readXlsxFile from "read-excel-file";

export const DataToShow = () => {
  const [getInput, setGetInput] = useState([]);
  console.log(getInput);
  const getFile = (e) => {
    console.log(e);
    readXlsxFile(e.target.files[0]).then((rows) => {
      setGetInput(rows);
      // console.log("excell data", getInput);
      //console.log(rows);
      // `rows` is an array of rows
      // each row being an array of cells.
    });
  };
  console.log("excell data", getInput);
  let showUserFile = false;
  if (getInput.length > 0) {
    showUserFile = true;
  }
  return (
    <>
      <div className="mt-5 ml-5">
        <input type="file" id="input" onChange={(e) => getFile(e)} />
      </div>
      <div className="m-5">
        <table className="border-collapse border border-slate-400 ">
          <thead>
            <tr>
              <th className="border border-slate-300 ">Name</th>
              <th className="border border-slate-300 ">Marks</th>
              <th className="border border-slate-300">Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 ">Mazi</td>
              <td className="border border-slate-300 ">18</td>
              <td className="border border-slate-300 ">9717992694</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ">Abi</td>
              <td className="border border-slate-300 ">16</td>
              <td className="border border-slate-300 ">93355705</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ">Esth</td>
              <td className="border border-slate-300 ">20</td>
              <td className="border border-slate-300 ">90518953</td>
            </tr>
          </tbody>
        </table>
        <div className="m-5">
          {showUserFile && (
            <table>
              <thead>
                <tr>
                  {getInput[0]?.map((row, idx) => {
                    return (
                      <th className="border border-slate-300 " key={idx}>
                        {row}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {getInput.map((row) => {
                  return (
                    <tr>
                      {row.map((data) => {
                        return (
                          <td className="border border-slate-300 ">{data}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">
        Send
      </button>
    </>
  );
};
