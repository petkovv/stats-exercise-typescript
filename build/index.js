"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
const matches = new MatchReader_1.MatchReader(reader);
matches.load();
const summary = Summary_1.Summary.winsAnalysisAndHtmlReport('Man United');
summary.buildAndPrint(matches.matches);
// instance of CsvFIleReader with the name of file
// instance of MatchReader with passed instace of CsvFileReader
// call load on MatchReader instace
// console.log matches of MatchReader instance
