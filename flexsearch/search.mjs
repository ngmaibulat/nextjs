import FlexSearch from 'flexsearch';
import fs from 'fs';

const options = {
    async: false,
    doc: {
        id: "id",
        field: ["title", "cat", "content"]
    }
}

const index = FlexSearch.create(options);
// const index = new FlexSearch();

// console.log(FlexSearch);
// console.log(index);

const limit = 10;


const idx = fs.readFileSync("flexsearch/data.index");

console.log(idx.toString());

await index.import(idx.toString());

console.log(index.export());

// index.search("Body", limit)
//     .then(console.log);


const n = index.search("Title", limit);
console.log(n);

//1: save index to file
//2: load index from file and search
