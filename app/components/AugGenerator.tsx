'use client'
import React, { useState } from 'react';
import { Tag } from '../lib/tags';

export interface Props extends React.HTMLProps<HTMLDivElement>{
  postags: Tag[];
  negtags: Tag[];
}

const AugGenerator: React.FC<Props> = (props) =>  
{
    let postags  = props.postags;
    let negtags  = props.negtags;
    let min = 0;
    let goodTags: Tag[] = [];
    let badTags: Tag[] = [];
    const [goodtags, settags] = useState(goodTags);
    const [badtags, setbadtags] = useState(badTags);
    const [part, setpart] = useState('Голова');

    const myClick = () => {
        goodTags = [];
        badTags = [];
        let good = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let bad = Math.floor(Math.random() * (2 + 1));
        do{
            let temp = postags[Math.floor(Math.random() * (postags.length - 1 - min + 1)) + min];
            if(temp.slot.includes(part) && !goodTags.includes(temp)){
                goodTags.push(temp);
            }
        }while(goodTags.length < good)

        do{
            let temp = negtags[Math.floor(Math.random() * (negtags.length - 1 - min + 1)) + min];
            if(!badTags.includes(temp)){
            badTags.push(temp);
            }
        }while(badTags.length < bad)
        
        settags(goodTags);
        setbadtags(badTags);
    }

    function setHead() {
        setpart('Голова')
    }
    function setBody() {
        setpart('Торс')
    }
    function setArms() {
        setpart('Руки')
    }
    function setLegs() {
        setpart('Ноги')
    }

    return (
    <div className={'text-2xl text-wrap text-center flex flex-col items-center gap-4 ' + props.className}>
        <button onClick={myClick} className='text-2xl text-wrap text-center bg-slate-700 rounded-lg p-2 px-4 mt-2 hover:bg-slate-600'>СГЕНЕРИРОВАТЬ</button>
        <p>Слот аугментации: {part}</p>
        <ul className="flex w-full gap-6 justify-items-stretch justify-around">
        <li>
            <input type="radio" className="hidden peer" id="head" name='part' onClick={setHead} defaultChecked={true}/>
            <label htmlFor="head" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <p>Голова</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="body" name='part' onClick={setBody}/>
            <label htmlFor="body" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>Торс</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="arms" name='part' onClick={setArms}/>
            <label htmlFor="arms" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>Руки</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="legs" name='part' onClick={setLegs}/>
            <label htmlFor="legs" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>Ноги</p>
            </label>
        </li>
    </ul>
        <div className='flex gap-6'>
            <div>
                <p>Положительные</p>
                <ul className='list-disc text-left list-inside'> 
                {
                    goodtags.map((tag)=>(<li key={Math.random()}>{tag.tag}</li>))
                }
                </ul>
            </div>
            <div>
                <p>Негативные</p>
                <ul className='list-disc text-left list-inside'>
                {
                    badtags.map((tag)=>(<li key={Math.random()}>{tag.tag}</li>))              
                }
                </ul>
            </div>
        </div>  
    </div>
);
}

export default AugGenerator;