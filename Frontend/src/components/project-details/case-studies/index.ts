import type { CaseStudy } from "../types"
import { storageManagementCase } from "./storageManagement"
import { delingsAppCase } from "./delingsapp"

export const caseStudies: Record<string, CaseStudy> = {
  "storage-management": storageManagementCase,
  delingsapp: delingsAppCase,
}
