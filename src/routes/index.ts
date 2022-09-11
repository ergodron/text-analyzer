import { ServerRoute } from "@hapi/hapi";
import { analyzeTextRoute } from "./analyzeText";

export default [...analyzeTextRoute] as ServerRoute[];
