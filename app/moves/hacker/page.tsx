import Collapsible from "@/app/components/collapsible";
import Section from "@/app/components/section";
import { LiaGreaterThanEqualSolid, LiaLessThanEqualSolid } from "react-icons/lia";

export default function Page() {  
return (
  <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Hacker</h1>
    <div className="flex flex-col gap-6">
      <Collapsible label="Hacker : Начальные ходы" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="HACK YOU!">
          <p>Всякий раз, когда ты хочешь произвести взлом 
в боевой ситуации, проверь Анализ:</p>
          <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Взлом прошел успешно, можешь запустить две
программы в любой момент сцены.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Тебе удалось произвести взлом, можешь запустить одну программу, но что-то пошло не так:</p>
          </li>
          <li>
          <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>в твой кибермозг тоже запускают программу;</li>
            <li>программа отработала не полностью;</li>
            <li>ты становишься приоритетной целью;</li>
            <li>ситуация осложнилась другим образом.</li>
            </ul>
          </Collapsible> 
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Взлом прошёл не совсем гладко. Ты всё ещё 
можешь запустить одну программу, но ситуация 
моментально обостряется. Zero делает ход.</p>
          </li>
        </ul>
        </Section>
        <Section heading="ДОСТУП В DARK NET">
        <p>Всякий раз, когда ты ищешь запрещённую информацию, редкие предметы или слухи, проверь Анализ:</p>
        <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Ты обнаруживаешь то, что ищешь, и можешь 
также выбрать один из вариантов:</p>
          </li>
          <li>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>ты обнаруживаешь того, кто выложил эти данные. Расскажи, кто это, и получи рычаг;</li>
            <li>ты находишь что-то ценное и важное помимо того, что искал. Расскажи, что бы это могло быть</li>
            </ul>
          </Collapsible> 
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Ты находишь искомое, но помимо этого оставляешь свои следы в Dark Net. </p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Ты находишь то, что ищешь, но также контактируешь с чем-то очень опасным. Оно может 
попытаться удержать тебя в Сети или получить 
доступ к твоей памяти. Zero делает ход.</p>
          </li>
        </ul>
        <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>преодолеть серьёзное препятствие;</li>
            <li>совершить опасный для жизни прыжок, неполучая вреда;</li>
            <li>успешно избежать угрозы.</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="СЕТЕВОЙ ВЗЛОМ">
          <p>Всякий раз, когда ты взламываешь программное 
обеспечение, технику, базу данных, отключаешь системы безопасности или используешь 
программу, проверь Анализ:</p>
<ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Взлом прошел успешно, можешь запустить две 
программы</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Тебе удалось произвести взлом, можешь запустить одну программу, но что-то пошло не так:</p>
            </li>
            <li>
            <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>кибермозг сильно коротнуло, получи два пункта стресса;</li>
            <li>ты что-то подцепил в системе — вирус или дрянь похуже;</li>
            <li>система напала на твой след в реале и в Сети;</li>
            <li>программа отработала не полностью;</li>
            <li>ты потратил больше времени, чем рассчитывал, и ситуация изменилась в неприятную сторону</li>
            </ul>
          </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Взлом прошёл не совсем гладко. Возможно, ты 
не смог выполнить то, что задумал, или тебя 
обнаружили личные враги, правоохранительные 
органы или что-то ещё, скрывающееся в Сети. 
Zero делает ход.</p>
            </li>
          </ul>

        </Section>
        <Section heading="ПРИЗРАК МЕГАПОЛИСА">
          <p>
          Всякий раз, когда ты прячешься и стараешься не привлекать к себе внимания, проверь 
Рефлексы: 
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Выбери две опции и используй в любой момент 
во время сцены. </p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Выбери одну опцию, но те, от кого ты хочешь 
укрыться, станут что-то подозревать.</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Выбери одну опцию. Возможно, ты привлечёшь 
чьё-то внимание — сейчас или после. Zero 
делает ход</p>
            </li>
          </ul>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>ты находишь безопасное укрытие на некоторое время;</li>
            <li>ты находишь альтернативный маршрут, чтобы избежать встречи с людьми;</li>
            <li>тебе удается обойти систему безопасности</li>
            <li>или другое препятствие незаметно.</li>
            </ul>
          </Collapsible> 
        </Section>
        </div>
    </Collapsible>
    <Collapsible label="Hacker : Ходы повышенной квалификации" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="ВОСТРЕБОВАННАЯ СПЕЦИАЛЬНОСТЬ">
          <p>Хакеров много, но хороших — единицы. Знающие люди такими талантами не разбрасываются. 
В безвыходной ситуации ты можешь попробовать 
договориться с теми, кто тебя прижал. </p>   
<Collapsible label="ВЫБЕРИ ОДНО" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>поработай на них прямо сейчас. Тебя отпустят, но в следующий раз этот трюк не сработает;</li>
            <li>поработай на них некоторое время. Тебя отпустят, но в следующий раз так просто не отделаешься.</li>
            </ul>
          </Collapsible>  
        </Section>
        <Section heading="0/1">
        <p>Один раз за сцену потратив снаряжение, 
ты можешь буквально взломать реальность 
вокруг себя, визуализируя окружение как 
матричный код. Выбери опцию.</p>
<Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>перебрось любой свой результат или результат напарника;</li>
            <li>заставь появиться предмет окружения (контейнер, столб, рекламный билборд и т.д.);</li>
            <li>полностью избеги угрозы, расскажи, как это произошло.</li>
            </ul>
          </Collapsible>  
        </Section>
        <Section heading="CODE WIZARD">
          <p>Улучшает ход Library. Теперь тебе не требуется время для перераспределения программ. 
Заявленное распределение появится уже в следующей сцене.</p>
          <p>Помимо этого количество одновременного использования программ повышается на две,
            а максимум использованных программ при успехе взлома — на одну</p>
        </Section>
        <Section heading="CYBER GOD">
          <p>
          Ты и Матрица — одно целое. Всякий раз, когда 
ты занимаешься Матричным дайвингом, ты получаешь на одно последствие меньше. Помимо 
этого при успехе ты можешь дополнительно заявить два факта о цели своих поисков, а также 
удалить один из фактов, который сообщил Zero.
            </p>            
        </Section>
        </div>
    </Collapsible>
    <Collapsible label="Hacker : Progs" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-2 gap-5 mt-5">
        <Section heading="LIBRARY">
          <p>Хакеров много, но хороших — единицы. Знающие люди такими талантами не разбрасываются. 
В безвыходной ситуации ты можешь попробовать 
договориться с теми, кто тебя прижал. </p>   
 
        </Section>
        <Section heading="BLACK HAT">
        <p>У тебя есть набор разнообразных программ для 
запуска их в Сеть, Матрицу и прочие информационные пространства. Выбери две программы 
из списка. Ты можешь брать этот ход несколько раз, выбирая новые программы. Для перераспределения программ тебе нужно потратить 
Свободное время. Количество ячеек для одновременного использования программ равняется 
твоему Анализу. Программы имеют неограниченное количество использований.</p>
<p>Хоть программ и великое множество, в мусоре 
инфопространства редко можно найти что-то 
стоящее и полезное. Поэтому не забывай, что 
с помощью хода Black hat ты можешь написать 
свою программу.</p>
        </Section>
        <Collapsible label="ПРОГРАММЫ" openByDefault={false} duration={300} textSize="l" className="col-span-2">
          <div className="p-5 rounded-lg grid grid-cols-4 gap-5 mt-5">
            <Section heading="ALARM!">
              <p>программа предупреждает тебя
о любом простом событии, триггер которого ты обозначил заранее, если оно происходит в той локации, где есть покрытие
данной Сети.</p>
            </Section>
            <Section heading="Amnesia">
              <p>программа-паразит проникает
в базу данных, уничтожая всё, до чего в состоянии дотянуться.</p>
            </Section>
            <Section heading="Bite">
              <p> программа атакует нейроны кибермозга
противника, нанося ему 2 урона.</p>
            </Section>
            <Section heading="Blindness">
              <p>позволяет на некоторое время
«ослепить» камеру. Для неё будет повторяться зацикленный отрывок записи, которую
программа автоматически компилирует по
своему алгоритму</p>
            </Section>
            <Section heading="Guard">
              <p>программа защищает тебя во время
подключения к Матрице. Пока она активна,
ты нивелируешь одно последствие Матричного дайвинга.</p>
            </Section>
            <Section heading="Hunter">
              <p> программа-паразит внедряется в кибермозг противника, пингуя его местонахождение на 3D-карту раз в пять секунд</p>
            </Section>
            <Section heading="ICE">
              <p>программа защищает тебя и твои системы от взлома. Пока она активна, подними
свой Firewall на один пункт.</p>
            </Section>
            <Section heading="Puppeteer">
              <p> позволяет на короткое время
брать под контроль простую технику (автомобили, квадрокоптеры, дроны и т.д.). Задействуя эту программу, чётко отдай приказ
технике: «атакуй», «следуй за…», «защищай»
и т.п</p>
            </Section>
          </div>
          </Collapsible>  
        </div>
    </Collapsible>
    </div>  
  </div>
  );
}