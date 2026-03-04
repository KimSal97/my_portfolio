import type { CaseStudy } from "../types"
import { storageManagementCase } from "./storageManagement"
import { delingsAppCase } from "./delingsapp"
import { azureServiceBusCase } from "./azureServiceBus"

export const caseStudies: Record<string, CaseStudy> = {
  "storage-management": storageManagementCase,
  delingsapp: delingsAppCase,
  "azure-servicebus-manager": azureServiceBusCase,
}