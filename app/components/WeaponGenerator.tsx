'use client'
import React, { useEffect, useState } from 'react';
import { Tag } from '../lib/tags';

export interface Props extends React.HTMLProps<HTMLDivElement>{
 postags: Tag[];
negtags: Tag[];
}

const WeaponGenerator: React.FC<Props> = (props) =>  
{
    let postags  = props.postags;
    let negtags  = props.negtags;
    let min = 0;
    let goodTags: Tag[] = [];
    let badTags: Tag[] = [];
    const [goodtags, settags] = useState(goodTags);
    const [badtags, setbadtags] = useState(badTags);
    const [damage, setdamage] = useState(1);
    const [range, setrange] = useState('');
    const ranges = ['в упор', 'ближняя', 'средняя', 'дальняя'];

    const myClick = () => {
        goodTags = [];
        badTags = [];
        let good = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let bad = Math.floor(Math.random() * (3 + 1));
        let tempDamage = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        let tempRange = ranges[Math.floor(Math.random() * (3 + 1))];
        if(tempDamage >=2){
            let temp = negtags.find((x)=> x.tag === 'ДВУРУЧНОЕ')
            console.log(temp);
            if( temp !== undefined){
            badTags.push(temp);
            }
        }
        do{
            let temp = postags[Math.floor(Math.random() * (postags.length - 1 - min + 1)) + min];
            if(!goodTags.includes(temp)){
                goodTags.push(temp);
            }
        }while(goodTags.length < good)

        do{
            let temp = negtags[Math.floor(Math.random() * (negtags.length - 1 - min + 1)) + min];
            if(!badTags.includes(temp)){
            badTags.push(temp);
            }
        }while(badTags.length < bad)
        setrange(tempRange);
        setdamage(tempDamage);
        settags(goodTags);
        setbadtags(badTags);
    }

    return (
    <div className={'text-2xl text-wrap text-center flex flex-col items-center gap-4 ' + props.className}>
        <button onClick={myClick} className='text-2xl text-wrap text-center bg-slate-700 rounded-lg p-2 px-4 mt-2 hover:bg-slate-600'>СГЕНЕРИРОВАТЬ</button>
        <p>Урон: {damage}</p>
        <p>Дальность: {range}</p>
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

export default WeaponGenerator;