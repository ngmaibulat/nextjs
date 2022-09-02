import FlexSearch from 'flexsearch';
import fs from 'fs';
import {getSortedPostsData, getPostData} from '../lib/posts.mjs';


const index = FlexSearch.create();
const posts = getSortedPostsData();

for (const item of posts) {
    console.log(item);
    const post = await getPostData(item.id);
    index.add(item.id, post.contentHtml);
    // console.log(post);
}

// console.log(index.info());

const idx = index.export();
fs.writeFileSync("flexsearch/data3.index", idx);

const res = index.search("this");

console.log(res);
