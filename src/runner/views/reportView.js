import { GENERATORS } from "../../generators";
import { DOM_NODES } from "../../utils/domElements";

export const displayReport = (objectWS) => {
  const reportText = GENERATORS.REPORT.generateReportFromJSON(objectWS);
  DOM_NODES.reportDiv.innerHTML = reportText;
};
