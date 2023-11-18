/* eslint-disable react/prop-types */
// import XLSX from 'sheetjs-style';
import { utils, write } from 'xlsx';
import * as Fileserver from 'file-server';
import Button from '../components/Button';
// import { CSVLink } from 'react-csv';

export default function ExportToExcel(excelData, fileName) {
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToExcel = async (excelData, fileName) => {
        const ws = utils.json_to_sheet(excelData);
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        Fileserver.saveAs(data, fileName + fileExtension);
    };

    // const header = [
    //     {
    //         label: 'Station Code',
    //         key: 'stationCode',
    //     },
    //     {
    //         label: 'Species',
    //         key: 'species',
    //     },
    //     {
    //         label: 'AGB',
    //         key: 'agb',
    //     },
    //     {
    //         label: 'BGB',
    //         key: 'bgb',
    //     },
    //     {
    //         label: 'Carbon AGB',
    //         key: 'carbonAgb',
    //     },
    //     {
    //         label: 'Carbon BGB',
    //         key: 'carbonBgb',
    //     },
    //     {
    //         label: 'Carbon Tree',
    //         key: 'carbonTotal',
    //     },
    // ];

    return (
        <Button onClick={() => exportToExcel(excelData, fileName)}>
            ExportToExcel
        </Button>
    );
}
