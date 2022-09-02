import FlexSearch from 'flexsearch';
import idx from './readIndex.mjs'

const options = {
    async: true
}

const index = new FlexSearch(options);
index.import(idx);

const n = index.search("John").then(console.log)
