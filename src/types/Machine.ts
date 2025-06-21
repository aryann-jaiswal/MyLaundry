export type MachineStatus = "Available" | "In Use" | "Out of Order";

export interface Machine {
  _id: string;
  name: string;
  status: MachineStatus;
}

