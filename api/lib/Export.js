const xlsx = require("node-xlsx");

class Export {

    constructor(){

    }
    /**
     * 
     * @param {Array} titles Exxxcel tablosunun basliklari
     * @param {Array} columns Exxxcel tablosunayazilacak verilerin isimleri
     * @param {Array} data excel tablosuna yazilacak veriler
     */

    toExcel(titles, columns, data){
        let rows = [];

        rows.push(titles);
        for(let i =  0; i<data.length; i++){
            let item = data[i];
            let cols = [];

            for(let j = 0; j<columns.length; j++){
                cols.push(item[columns[j]]);
            }

            rows.push(cols);       
        }

        return xlsx.build([{name: "Sheet", data: rows}])

    }
}

module.exports = Export;