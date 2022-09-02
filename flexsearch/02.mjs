import FlexSearch from 'flexsearch';
import fs from 'fs';


const index = FlexSearch.create();


index.add(10025, "John Doe");
index.add(10026, "John Bull");
index.add(10027, "John Jeferson");
index.add(10028, "Jon");

// console.log(index.info());

const idx = index.export();
fs.writeFileSync("flexsearch/data2.index", idx);
