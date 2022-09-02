import React, { useEffect, useState } from "react";
import { getData, txtDataToObjArray, parseData } from "./actions/dataActions";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ParsedData from "./components/parsedData";
import Table from "./components/table";

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
  const [showAll, setShowAll] = useState<boolean>(false);
  const [showRaw, setShowRaw] = useState<boolean>(true);

  useEffect(() => {
    let dataPromise = getData();
    dataPromise.then((rawData: string) => {
      let formattedData = txtDataToObjArray(rawData);
      setData(formattedData);
      let parsedData = parseData(formattedData);
      setParsed(parsedData);
    });
  }, []);

  return (
    <div className="bg-g-white min-h-screen flex flex-col">
      <Navbar showRaw={showRaw} setShowRaw={setShowRaw} />
      <div className="container mx-auto my-auto text-center">
        {showRaw ? (
          <div>
            <h2 className="text-g-purple mt-3 mb-3 md:text-3xl text-2xl font-bold">Raw data</h2>
           
            <Table slice={showAll} data={data} />
            <button
              onClick={() => setShowAll(!showAll)}
              className="sticky mt-3 bottom-0 bg-g-purple text-white w-full md:w-2/4 font-semibold py-2 px-4 underline"
            >
              {showAll ? "SHOW LESS" : "SHOW MORE"}
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
