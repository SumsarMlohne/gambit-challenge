import React, { useEffect, useState } from "react";
import { getData, txtDataToObjArray, parseData } from "./actions/dataActions";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import ParsedData from "./components/parsedData";

type Data = {
  value: number;
  id: number;
};
type ReturnData = {
  value: number;
  id: string;
};
const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [parsed, setParsed] = useState<ReturnData[]>([]);
  const [showAll, setShowAll] = useState<Boolean>(false);
  const [showRaw, setShowRaw] = useState<Boolean>(true);

  useEffect(() => {
    let dataPromise = getData();
    dataPromise.then((rawData: any) => {
      let formattedData = txtDataToObjArray(rawData);
      setData(formattedData);
      let parsedData = parseData(formattedData);
      setParsed(parsedData);
    });
  }, []);

  return (
    <div className="bg-g-white min-h-screen flex flex-col">
      <Navbar showRaw={showRaw} setShowRaw={setShowRaw} />
      <div className="container mx-auto text-center">
        {showRaw ? (
          <div>
            <h2 className="text-g-purple md:text-3xl text-xl">Raw data</h2>
            <hr className="mt-3 mb-3" />
            {showAll ? (
              <table className="mx-auto text-left w-full">
                <thead className="bg-g-white-mono text-g-purple">
                  <tr>
                    <th className="px-4 py-3">Id</th>
                    <th className="px-4 py-3">Value</th>
                  </tr>
                </thead>
                <tbody className="text-g-purple">
                  {data?.map((p) => (
                    <tr key={p.id} className="border-b border-gray">
                      <td className="px-4 py-3">{p.id}</td>
                      <td className="px-4 py-3">{p.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="mx-auto text-left w-full">
                <thead className="bg-g-white-mono text-g-purple">
                  <tr>
                    <th className="px-4 py-3">Id</th>
                    <th className="px-4 py-3">Value</th>
                  </tr>
                </thead>
                <tbody className="text-g-purple">
                  {data?.slice(0, 6)?.map((p) => (
                    <tr key={p.id} className="border-b border-gray">
                      <td className="px-4 py-3">{p.id}</td>
                      <td className="px-4 py-3">{p.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <button
              onClick={() => setShowAll(!showAll)}
              className="sticky mt-3 bottom-0 bg-g-purple text-white w-full font-semibold py-2 px-4 underline"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        ) : (
          <ParsedData setShowAll={setShowAll} showAll={showAll} data={parsed} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
