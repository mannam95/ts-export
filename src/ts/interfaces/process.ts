import { GLOBALENUMS } from "../global-enums";

export interface Process {
  id?: number;
  processName?: string;
  children?: string[];
  dateCreated?: Date;
  lastChanged?: Date;
  description?: string;
  participant?: string;
  owner?: string;
  lastModifiedBy?: string;
  processOwnerEmail?: string;
  attachments?: string;
  isInModeling?: boolean;
  versionNumber?: number;
  sendTo?: string;
  resourceUri?: string;
  linkText?: string;
  linkUrl?: string;
  processMapType?: GLOBALENUMS.PROCESSMAPNODETYPE;
  [index: string]: any;
}
