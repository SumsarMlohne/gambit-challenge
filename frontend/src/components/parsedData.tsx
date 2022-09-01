import React from "react";

type ReturnData = {
  value: number;
  id: string;
};

interface Props {
  /* data: Data[]; */
  showAll: Boolean;
  setShowAll: Function;
  data: ReturnData[];
}

const ParsedData: React.FC<Props> = (props) => {
  const { data, showAll, setShowAll } = props;
  return (
    <div className="">
      <h2 className="text-g-purple md:text-3xl text-xl">Parsed data</h2>
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
                <td className="px-4 py-3 truncate">{p.id}</td>
                <td className="px-4 py-3 truncate">{p.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* {data} */}
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
