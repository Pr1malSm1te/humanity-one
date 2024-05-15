import Link from "next/link";

export default function Page() {
    return (
    <div className="w-100">
      <div className=" bg-slate-950 p-5 rounded-lg text-white">
        <div className="flex flex-col gap-5">
          <div className="text-2xl text-wrap text-center flex flex-col items-center gap-4">
                <h2>ОБ АРХЕТИПАХ</h2>          
                <div className="text-base bg-slate-800 rounded-lg gap-6 text-left p-2 px-4 mt-2">
                  <p>Архетипы определяют начальные способности, снаряжение и задают характер персонажа.</p>
                  <p>На страницах архетипов будут указаны рекомендованное распределение характеристик, 
                  примеры заполнения черт характера и образа героя, 
                  вопросы на которые следует ответить чтобы лучше проработать поведение и личность вашего персонажа.
                  </p>
                </div>              
          </div>
          <div className="grid grid-cols-4 gap-5">
            <div className="text-2xl my-5 text-wrap col-span-1 text-center flex flex-col items-center gap-4">
                  <h2>Street Samurai</h2>          
                  <p className="text-base h-full bg-slate-800 rounded-lg gap-6 text-left p-2 px-4 mt-2">
                  Паркур как стиль жизни, бусидо как философия. 
                  Дерзкий городской ниндзя в окружении своих братьев и сестёр по духу — он несёт свою философию и правду в прогнивший город.
                  И хоть намерения его благи, он должен помнить, чем устлана дорога в ад.            
                  </p>              
            </div>
            <div className="text-2xl my-5 text-wrap col-span-1 text-center flex flex-col items-center gap-4">
                  <h2>Liqudator</h2>          
                  <p className="text-base h-full bg-slate-800 rounded-lg gap-6 text-left p-2 px-4 mt-2">
                  Тот, чья работа заключается в прерывании человеческих жизней за деньги.
                  Бескомпромиссный и жестокий профессионал, он принимает любые заказы.
                  Но Ликвидатору следует быть осторожным: когда-нибудь закажут и его.             
                  </p>              
            </div>
            <div className="text-2xl my-5 text-wrap col-span-1 text-center flex flex-col items-center gap-4">
                  <h2>Hacker</h2>          
                  <p className="text-base h-full bg-slate-800 rounded-lg gap-6 text-left p-2 px-4 mt-2">
                    Виртуозный сетевой взломщик, для которого виртуальный мир заменяет реальность.
                      Для него нет закрытых дверей и информации, которую нельзя достать.
                      Однако любопытство скоро заведет его туда, куда лезть не следует.             
                  </p>              
            </div>
            <div className="text-2xl my-5 text-wrap col-span-1 text-center flex flex-col items-center gap-4">
                  <h2>Pop-Idol</h2>          
                  <p className="text-base h-full bg-slate-800 rounded-lg gap-6 text-left p-2 px-4 mt-2">
                  Украшение любого вечера, звезда эстрады.
                  Эту яркую и живую девушку трудно не заметить, а остаться равнодушным попросту невозможно. 
                  И она с удовольствием пользуется своей притягательностью, чтобы манипулировать всеми в своих интересах. 
                  Только не стоит забывать, что она всё ещё собственность своего спонсора            
                  </p>              
            </div>
          </div>          
        </div>
      </div>
    </div>
      
    );
  }