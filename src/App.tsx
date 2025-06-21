import React, { useState } from "react";
import MachineList from "./components/MachineList";
import { Machine } from "./types/Machine";

const initialMachines: Machine[] = [
  { _id: "1", name: "Machine 1", status: "Available" },
  { _id: "2", name: "Machine 2", status: "In Use" },
  { _id: "3", name: "Machine 3", status: "Available" },
  { _id: "4", name: "Machine 4", status: "Out of Order" },
];

function App() {
  const [machines] = useState<Machine[]>(initialMachines);

  return (
    <div>
      <h1>Laundry Room</h1>
      <MachineList machines={machines} />
    </div>
  );
}

export default App;