import React from "react";

type ReturnData = {
  value: number;
  id: string;
};
type Data = {
  value: number;
  id: number;
};

interface Props {
  data: ReturnData[] | Data[];
  slice: boolean;
}

const Table: React.FC<Props> = (props) => {
  const { data, slice } = props;
  return slice ? (
    <table className="mx-auto text-center w-full md:w-1/4">
      <thead className="bg-g-purple text-g-purple">
        <tr>
          <th scope="col" className="text-g-white text-lg px-4 py-3">Id</th>
          <th scope="col" className="text-g-white text-lg px-4 py-3">Value</th>
        </tr>
      </thead>
      <tbody className="text-g-purple">
        {data?.map((p, index) => (
          <tr key={index} className={`border-b border-gray ${index % 2 === 0 ? "" : "bg-g-white-mono"}`}>
            <td className="px-4 py-3">{p.id}</td>
            <td className="px-4 py-3">{p.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <table className="mx-auto text-center w-full md:w-1/4">
      <thead className="bg-g-purple text-g-purple">
        <tr>
          <th scope="col" className="text-g-white text-lg px-4 py-3">Id</th>
          <th scope="col" className="text-g-white text-lg px-4 py-3">Value</th>
        </tr>
      </thead>
      <tbody className="text-g-purple">
        {data?.slice(0, 6)?.map((p, index) => (
          <tr key={index} className={`border-b border-gray ${index % 2 === 0 ? "" : "bg-g-white-mono"}`}>
            <td className="px-4 py-3">{p.id}</td>
            <td className="px-4 py-3">{p.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
