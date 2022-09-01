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
      <thead className="bg-g-white-mono text-g-purple">
        <tr>
          <th scope="col" className="text-g-header-text px-4 py-3">Id</th>
          <th scope="col" className="text-g-header-text px-4 py-3">Value</th>
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
    <table className="mx-auto text-center w-full md:w-1/4">
      <thead className="bg-g-white-mono text-g-purple">
        <tr>
          <th scope="col" className="text-g-header-text px-4 py-3">Id</th>
          <th scope="col" className="text-g-header-text px-4 py-3">Value</th>
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
  );
};

export default Table;
