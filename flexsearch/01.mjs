import FlexSearch from 'flexsearch';
import fs from 'fs';

const options = {
    async: true,
    doc: {
        id: "id",
        field: ["title", "cat", "content"]
    }
}

const index = FlexSearch.create(options);

// console.log(FlexSearch);
// console.log(index);

const limit = 10;

const docs = [{
    id: 0,
    title: "Title",
    cat: "Category",
    content: "Body"
},{
    id: 1,
    title: "Title",
    cat: "Category",
    content: "Body"
}];

index.add(docs);

// index.add(10025, "John Doe");
// index.add(10026, "John Bull");
// index.add(10027, "John Jeferson");
// index.add(10028, "Jon");

// console.log(index.info());

const idx = index.export();
fs.writeFileSync("flexsearch/data.index", idx);
console.log(idx);

index.import(idx);

index.search("Body", limit)
    .then(console.log)


//1: save index to file
//2: load index from file and search
