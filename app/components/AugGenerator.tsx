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
    const [part, setpart] = useState('');
    const parts = ['Голова', 'Торс', 'Руки', 'Ноги'];

    const myClick = () => {
        goodTags = [];
        badTags = [];
        let good = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let bad = Math.floor(Math.random() * (2 + 1));
        let tempPart = parts[Math.floor(Math.random() * (3 + 1))];
        do{
            let temp = postags[Math.floor(Math.random() * (postags.length - 1 - min + 1)) + min];
            if(temp.slot.includes(tempPart) && !goodTags.includes(temp)){
                goodTags.push(temp);
            }
        }while(goodTags.length < good)

        do{
            let temp = negtags[Math.floor(Math.random() * (negtags.length - 1 - min + 1)) + min];
            if(!badTags.includes(temp)){
            badTags.push(temp);
            }
        }while(badTags.length < bad)
        setpart(tempPart);
        settags(goodTags);
        setbadtags(badTags);
    }

    return (
    <div className={'text-2xl text-wrap text-center flex flex-col items-center gap-4 ' + props.className}>
        <button onClick={myClick} className='text-2xl text-wrap text-center bg-slate-700 rounded-lg p-2 px-4 mt-2 hover:bg-slate-600'>СГЕНЕРИРОВАТЬ</button>
        <p>Слот аугментации: {part}</p>
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