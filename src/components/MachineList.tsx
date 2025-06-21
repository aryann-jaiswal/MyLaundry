import React from "react";
import { Machine } from "../types/Machine";

interface Props {
    machines: Machine[];
}

const MachineList: React.FC<Props> = ({ machines }) => (
  <div>
    <h2>Machine Status</h2>
    <ul>
      {machines.map((machine) => (
        <li key={machine._id}>
          {machine.name}: {machine.status}
        </li>
      ))}
    </ul>
  </div>
);

export default MachineList;