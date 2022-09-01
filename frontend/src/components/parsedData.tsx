import React from "react";
import Table from "./table"

type ReturnData = {
  value: number;
  id: string;
};

interface Props {
  showAll: boolean;
  setShowAll: Function;
  data: ReturnData[];
}

const ParsedData: React.FC<Props> = (props) => {
  const { data, showAll, setShowAll } = props;
  return (
    <div className="">
      <h2 className="text-g-purple mb-3 mt-3 md:text-3xl text-xl">Parsed data</h2>
     
      <Table slice={showAll} data={data} />
      <button
        onClick={() => setShowAll(!showAll)}
        className="sticky mt-3 bottom-0 bg-g-purple text-white w-full font-semibold py-2 px-4 underline"
      >
        {showAll ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ParsedData;
