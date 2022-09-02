import fs from 'fs';

const idx = fs.readFileSync("flexsearch/data3.index");

export default idx.toString();

export function getIndex()
{
    return idx.toString();
}
