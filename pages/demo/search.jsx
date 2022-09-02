// import {useState} from './React';
import FlexSearch from 'flexsearch';
import { useState } from 'react';
import {getIndex} from '../../flexsearch/readIndex.mjs'


export async function getStaticProps()
{
    const idx = getIndex();   

    return {
        props: { idx },
    };
}


export default function Search(props)
{
    const options = {
        async: true
    }
    
    const index = new FlexSearch(options);
    index.import(props.idx);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    async function handleSearch(ev)
    {
        const val = ev.target.value;
        setQuery(val);
        // console.log(val);
        const res = await index.search(val);
        // console.log(res);
        setResults(res);
    }

    function formatResults()
    {
        return results.map(res => <li key={res}>{res}</li>)
    }


    return (
        <>
        <input onChange={handleSearch} type="search" name="search" id="search" value={query} />
        <button onClick={handleSearch}>Search</button>
        <ul>
            {formatResults()}
        </ul>
        </>
    );
}
