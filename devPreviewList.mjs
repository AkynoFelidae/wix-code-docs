import { getAllFilesSync } from 'get-all-files'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import fs from 'fs';



function findDevPreviewFunctions() {
    let modules = {};
    for (const file of getAllFilesSync('./')) {
        if (file.slice(-13) === '.service.json') {
            const previewFunctions = []
            let jsonData = require(file);
            for(const operation of jsonData.operations) {
                if (operation.hasOwnProperty('customLabels') && operation['customLabels'].some(e => e.id === 'maturity-beta')) {
                    previewFunctions.push(operation.name);
                }
            };
            if (previewFunctions.length > 0) {
               const moduleName = jsonData.memberOf.split('.')[0];
               if (!modules.hasOwnProperty(moduleName)) {
                   modules[moduleName] = {};
               }
               modules[moduleName][jsonData.name] = {
                functions : previewFunctions,
                memberOf : jsonData.memberOf.split('.').slice(1)
               }
            }
        }
    };
    return modules;
}

function generateMDTable(data) {
    let table = '| Module | Submodule | Function |\n|---|---|---|';
    for(const module in data){
        for(const submodule in data[module]){
            let formattedFunctions = '';
            for(const func of data[module][submodule].functions){
                const submodulePath = data[module][submodule].memberOf.length > 0 ? data[module][submodule].memberOf.join('/').toLowerCase() + '/' : '';
                formattedFunctions += `[${func}](https://www.wix.com/velo/reference/${module}/${submodulePath}${submodule.toLowerCase()}/${func.toLowerCase()})<br>`;
            }
            table += `\n| ${module.replace(/(\S+)-(v[1-9])/gm, "$1.$2")} | ${submodule} | ${formattedFunctions} |`;
        }
    }
    return table;
}

function appendTableToArticle(table) {
    const article = fs.readFileSync('./guides/developer-preview.md', 'utf8');
    const tableStart = article.indexOf('<!-- START TABLE -->');
    const tableEnd = article.indexOf('<!-- END TABLE -->');
    const newArticle = article.slice(0, tableStart) +'<!-- START TABLE -->\n' + table + '\n' + article.slice(tableEnd);
    fs.writeFileSync('./guides/developer-preview.md', newArticle);
}

let result = findDevPreviewFunctions();
let table = generateMDTable(result);
appendTableToArticle(table);