import { GLOBALENUMS } from "../global-enums";

export interface Process {
  id: number;
  processName?: string;
  processMapType?: GLOBALENUMS.PROCESSMAPNODETYPE;
}
