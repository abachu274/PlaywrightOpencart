import fs from 'fs';
import {parse} from 'csv-parse/sync';
import * as xlsx from 'xlsx';

export function loadCSV(filePath: string): any[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });
    return records;
}

export function loadJSON(filePath: string): any {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
}

export function loadDatafromExcel(filePath: string): any[] {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName]; 
    const jsonData = JSON.stringify(xlsx.utils.sheet_to_json(sheet), null, 2);
     return JSON.parse(jsonData);

}

