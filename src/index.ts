import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matches = MatchReader.fromCsv('football.csv');
matches.load();

const summary = Summary.winsAnalysisAndHtmlReport('Man United');

summary.buildAndPrint(matches.matches);