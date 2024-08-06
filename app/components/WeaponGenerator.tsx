'use client'
import React, { useState } from 'react';
import { Tag } from '../lib/tags';
import { Input } from 'postcss';

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
    const [range, setrange] = useState('В упор');

    const myClick = () => {
        goodTags = [];
        badTags = [];
        let good = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let bad = Math.floor(Math.random() * (3 + 1));
        if(damage >=2){
            let temp = negtags.find((x)=> x.tag === 'ДВУРУЧНОЕ')
            if( temp !== undefined){
            badTags.push(temp);
            }
        }
        if(range==='Дальняя'){
            let temp = postags.find((x)=> x.tag === 'ОПТИКА')
            console.log(temp);
            if( temp !== undefined){
            goodTags.push(temp);
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
        settags(goodTags);
        setbadtags(badTags);
    }

    function set1Damage() {
        setdamage(1)
    }
    function set2Damage() {
        setdamage(2)
    }
    function set3Damage() {
        setdamage(3)
    }
    function set4Damage() {
        setdamage(4)
    }
    function setHandRange() {
        setrange('В упор')
    }
    function setCloseRange() {
        setrange('Ближняя')
    }
    function setMidRange() {
        setrange('Средняя')
    }
    function setFarRange() {
        setrange('Дальняя')
    }


    return (
    <div className={'text-2xl text-wrap text-center flex flex-col items-center gap-4 ' + props.className}>
        <button onClick={myClick} className='text-2xl text-wrap text-center bg-slate-700 rounded-lg p-2 px-4 mt-2 hover:bg-slate-600'>СГЕНЕРИРОВАТЬ</button>
        <p>Урон: {damage}</p>
        <ul className="flex w-full gap-6 justify-items-stretch justify-around">
        <li>
            <input type="radio" className="hidden peer" id="damage1" name='damage' onClick={set1Damage} defaultChecked={true}/>
            <label htmlFor="damage1" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <p>1</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="damage2" name='damage' onClick={set2Damage}/>
            <label htmlFor="damage2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>2</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="damage3" name='damage' onClick={set3Damage}/>
            <label htmlFor="damage3" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>3</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="damage4" name='damage' onClick={set4Damage}/>
            <label htmlFor="damage4" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>4</p>
            </label>
        </li>
        </ul>
        <p>Дальность: {range}</p>
        <ul className="flex w-full gap-6 justify-items-stretch justify-around">
        <li>
            <input type="radio" className="hidden peer" id="hand" name='range' onClick={setHandRange} defaultChecked={true}/>
            <label htmlFor="hand" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <p>В упор</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="close" name='range' onClick={setCloseRange}/>
            <label htmlFor="close" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>Ближняя</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="mid" name='range' onClick={setMidRange}/>
            <label htmlFor="mid" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>Средняя</p>
            </label>
        </li>
        <li>
            <input type="radio" className="hidden peer" id="far" name='range' onClick={setFarRange}/>
            <label htmlFor="far" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p>Дальняя</p>
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

export default WeaponGenerator;