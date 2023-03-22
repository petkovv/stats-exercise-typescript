"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WInsAnalysis_1 = require("./analyzers/WInsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    static winsAnalysisAndHtmlReport(team) {
        return new Summary(new WInsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputarget) {
        this.analyzer = analyzer;
        this.outputarget = outputarget;
    }
    buildAndPrint(matches) {
        const output = this.analyzer.run(matches);
        this.outputarget.print(output);
    }
}
exports.Summary = Summary;
