import {archetypesData, statsName} from "@/app/lib/archetype";


export default function Page() {  
  return (
    <div className=" bg-slate-950 p-5 rounded-lg text-white pb-0">
        <h1 className="text-6xl flex ">{archetypesData[3].names[0]} 
          <h1 className="text-sm text-slate-700 pl-4">{archetypesData[3].names[1] + ' / ' + archetypesData[3].names[2] + ' / ' + archetypesData[3].names[3]}</h1>
        </h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="text-2xl my-5 text-wrap col-span-1 text-center flex flex-col items-center gap-4">
            <div className="w-full">
              <h2>ХАРАКТЕРИСТИКИ</h2>          
              <div className="flex justify-between col-2 bg-slate-800 rounded-lg gap-6 text-left p-2 px-4 mt-2 win-w-40">
                <ul className="flex flex-col justify-between">{statsName.map((stat) => (
                  <li key={stat} className="text-xl list-none">
                    {stat}
                  </li>))}
                </ul>
                <ul className="flex flex-col justify-between">{archetypesData[3].recScores.map((stat, index) => (
                  <li key={statsName[index]} className="flex justify-between items-center text-center">
                    <div className="text-xl">[</div>
                    <div className="text-base">{stat}</div>
                    <div className="text-xl">]</div>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <h2>HUMANITY</h2>
              <p className="bg-slate-800 rounded-lg text-base p-2 px-4 text-justify mt-2">
              Когда открываешь свою душу другому персонажу или испытываешь с ним близость, получи с ним <b className="text-blue-300">связь</b>. Всякий раз, когда персонажу необходимо вернуть кому-то долг, можешь потратить <b className="text-blue-300">связь</b> и заявить, что с этим долгом разберется твой daddy
                </p>
            </div>  
          </div>
          <div className="text-2xl my-5 text-wrap col-span-2 text-center flex flex-col items-center gap-4">
            <div className="w-full">
              <h2>ЖИЗНЕННЫЕ ПРИНЦИПЫ</h2>
              <div className="bg-slate-800 rounded-lg text-base p-2 px-4 text-justify mt-2">
                <ul className="list-disc list-inside">{archetypesData[3].life.map((life, index) => 
                  <li key={index} className="">
                    {life}
                  </li>)}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg text-base p-2 px-4 text-justify mt-2 flex justify-between items-center text-center">
                <ul className="flex flex-col w-full">
                  <li className="flex flex-row justify-between">
                    <p className="basis-24">Кличка</p>
                    <ul className="flex flex-row justify-between w-full">[{archetypesData[3].subnames.map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-center">
                        {item},
                      </li>
                      ))}]
                    </ul>
                  </li>
                  <li className="flex flex-row justify-between">
                    <p className="basis-24">Взгляд</p>
                    <ul className="flex flex-row justify-between w-full">[{archetypesData[3].look.map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-center">
                        {item},
                      </li>
                      ))}]
                    </ul>
                  </li>
                  <li className="flex flex-row justify-between">
                    <p className="basis-24">Черта</p>
                    <ul className="flex flex-row justify-between w-full">[{archetypesData[3].feature.map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-center">
                        {item},
                      </li>
                      ))}]
                    </ul>
                  </li>
                  <li className="flex flex-row justify-between">
                    <p className="basis-24">Одежда</p>
                    <ul className="flex flex-row justify-between w-full">[{archetypesData[3].clothes.map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-center">
                        {item},
                      </li>
                      ))}]
                    </ul>
                  </li>
                  <li className="flex flex-row justify-between">
                    <p className="basis-24">Характер</p>
                    <ul className="flex flex-row justify-between w-full">[{archetypesData[3].character.map((item, index) => (
                      <li key={index} className="flex justify-between items-center text-center">
                        {item},
                      </li>
                      ))}]
                    </ul>
                  </li>
                </ul>            
              </div>
            </div>
            <div className="w-full">
              <h2>КОДЕКС</h2>
              <div className="bg-slate-800 rounded-lg text-base p-2 px-4 text-justify mt-2">
                <ul className="flex flex-col justify-between">{archetypesData[3].questions.map((item) => (
                  <li key={item} className="text-base list-none">
                    {item}
                  </li>))}
                </ul>
              </div>          
            </div>
            <div className="w-full">
              <h2>НЕЗАКОНЧЕННЫЕ ДЕЛА</h2>
              <div className="bg-slate-800 rounded-lg text-base p-2 px-4 text-justify mt-2">
                <ul className="list-disc list-inside">{archetypesData[3].deals.map((item, index) => 
                  <li key={index} className="">
                    {item}
                  </li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-2xl my-5 text-wrap col-span-1 text-center flex flex-col items-center gap-4">
            <div>
              <h2>СТАРТОВОЕ СНАРЯЖЕНИЕ</h2>
              <p className="bg-slate-800 rounded-lg text-base p-2 px-4 text-justify mt-2">
                У тебя есть кибермозг «Ono Sendai» с уникальным ID, кредитный чип, несколько выбранных 
                комплектов одежды на каждый день и уникальная авторучка с твоей электронной подписью.</p>
              <div className="bg-slate-800 rounded-lg text-base p-2 px-4 text-justify mt-2">
                <p>Помимо этого добавь в инвентарь нужное из нижеследующих списков:</p>
                <div className="p-2 px-4 text-justify mt-2">
                  <p className="text-xl">Выбери одно</p>
                  <ul className="list-disc list-inside">{archetypesData[3].startGear.pickOne.map((life, index) => 
                    <li key={index} className="">
                      {life}
                    </li>)}
                  </ul>
                </div>
                <div className="p-2 px-4 text-justify mt-2">
                  <p className="text-xl">Выбери два</p>
                  <ul className="list-disc list-inside">{archetypesData[3].startGear.pickTwo.map((life, index) => 
                    <li key={index} className="">
                      {life}
                    </li>)}
                  </ul>
                </div>           
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }