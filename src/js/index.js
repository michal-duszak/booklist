import * as mdb from 'mdb-ui-kit';
import { initialData } from '../data/initialData';
import { buildTable } from '../js/fill-table';
const tableBody = document.querySelector(".table-body");

buildTable(tableBody, initialData)

export default {
  mdb,
};
