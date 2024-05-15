import Collapsible from "@/app/components/collapsible";
import Section from "@/app/components/section";
import { LiaGreaterThanEqualSolid, LiaLessThanEqualSolid } from "react-icons/lia";

export default function Page() {  
return (
  <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Liqudator</h1>
    <div className="flex flex-col gap-6">
      <Collapsible label="Liqudator : Начальные ходы" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="ИНСТИНКТ ВЫЖИВАНИЯ">
          <p>Твои рефлексы и чувство опасности обострены 
до предела. Всякий раз, когда на тебя нападают и ты не был к этому готов, ты действуешь первым.</p>   
        </Section>
        <Section heading="PAIN POINTS">
        <p>От взгляда профессионального убийцы ничто не скроется. В начале боя задай один из вопросов. Можешь потратить снаряжение и задать оба:</p>
        <Collapsible label="ВОПРОСЫ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Какие слабости врагов я могу использовать в своих интересах?</li>
            <li>На какие сильные стороны врагов я долженобратить внимание?</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="ЗАМЕСТИ СЛЕДЫ">
          <p>Всякий раз, когда ты кого-то убиваешь или 
          совершаешь нечто незаконное, что желаешь 
          скрыть, и покидаешь место преступления, проверь Анализ:</p>
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Ты получаешь все три опции</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Выбери две опции</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Выбери одну опцию, но ты рискуешь столкнуться с неожиданными препятствиями. Zero делает ход</p>
            </li>
          </ul>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Ты покидаешь место преступления незамеченным и достигаешь безопасного места по своему выбору в непосредственной близости. Опиши, как именно.</li>
            <li>Ты не оставил никаких улик, которые могли бы вывести на тебя.</li>
            <li>Тело или другие крупные объекты хорошо спрятаны и не будут найдены в течение довольно долгого времени</li>
            </ul>
          </Collapsible>     
        </Section>
        <Section heading="BLOOD MONEY">
          <p>
          Твоими услугами пользуются все, начиная от 
          уличных банд и заканчивая корпоративной дирекцией. Выбери, на кого сейчас ты работаешь, 
          и расскажи о них подробнее:</p>
          <Collapsible label="КЛИЕНТЫ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Синдикат. У преступных группировок есть
глаза и уши по всему городу. Раз в сессию,
когда попадаешь в новую часть города, можешь задать вопросы из Оценить ситуацию,
как если бы у тебя было ≥15</li>
            <li>Органы правопорядка. Власти заинтересованы в том, чтобы ты выполнил свою работу чётко и без лишнего шума. Раз в сессию
у тебя есть возможность попасть в закрытое место, где имеет вес пропуск органов
правопорядка.</li>
            <li>Корпорация. Крупные фирмы имеют связи
везде, где им выгодно. Раз за сессию, когда
тебя серьёзно прижали, можешь воспользоваться связями корпорации и выйти сухим из воды.</li>
            </ul>
          </Collapsible> 
          <p>Когда ты используешь уникальные возможности 
работодателя, ты становишься ему должен. 
После выполнения задания ты получаешь актив 
и можешь сменить работодателя.</p>
        </Section>
        <Section heading="ЭТО ВАС СО МНОЙ ЗАПЕРЛИ!">
          <p>Ты прекрасно знаешь, что в твоей работе важно качество, а не количество. Именно поэтому 
ты считаешься лучшим из лучших, а остальные 
не успевают пожалеть о своей ошибке. Всякий 
раз, когда враги оказываются в зоне поражения твоего оружия (не дальше средней дистанции), проверь Мускулы, сражаясь в ближнем 
бою, и Рефлексы, если в дальнем</p>
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-32"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Ты обрушиваешь на них град ударов и выстрелов. Все враги получают урон от твоего оружия</p>
            </li>
            <li className="flex gap-2">
              <p className="w-32 mr-1">10-14</p>
              <p>Ты обрушиваешь на них град ударов и выстрелов. Все враги получают урон от твоего оружия, но появляется осложнение</p>
            </li>
            <li>
            <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>задай Zero один вопрос об этом месте;</li>
            <li>здесь у тебя есть убежище, где ты можешь ненадолго «залечь на дно» и отдохнуть;</li>
            <li>ты что-то знаешь об этом месте. Расскажи остальным, что;</li>
            <li>у тебя есть контакт в этом месте, который может помочь тебе, если ты убедишь его</li>
            </ul>
          </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-32 mr-4"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Ты обрушиваешь на них град ударов и выстрелов, но врагов слишком много или появляется 
другое серьёзное осложнение. Zero делает ход.</p>
            </li>
          </ul>
          
        </Section>
        </div>
    </Collapsible>
    <Collapsible label="Liqudator : Ходы повышенной квалификации" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="GUN-FU">
          <p>Ты в совершенстве изучил стрельбу из одноручного оружия, такого как «Узи», пистолеты 
или револьверы. Теперь ты можешь использовать это оружие в упор при помощи Мускулов. 
Помимо этого, если используешь в перестрелке 
одинаковый тип оружия в каждой руке — наноси 
урон двум целям.</p>    
        </Section>
        <Section heading="ПЛАНИРОВАНИЕ">
        <p>Ты не любишь внезапных сюрпризов, поэтому 
всегда проводишь тщательную подготовку перед 
тем, как пойти на задание. Всякий раз, когда 
ты начинаешь опасную миссию, проверь Анализ:</p>
        <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Выбери три опции в любой момент во время 
миссии.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Выбери две опции в любой момент во время 
миссии. </p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>В любой момент во время миссии выбери одну 
опцию, но ты не смог учесть всего. Zero делает ход.</p>
          </li>
        </ul>
        <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Помни о том, что выгодно в переговорах.
Получи рычаг.</li>
            <li>У тебя есть некоторое оборудование, которое ты можешь использовать, чтобы выйти из трудной ситуации</li>
            <li>У тебя есть специальная полевая подготовка,
которая будет полезна при обходе одного
из препятствий.</li>
            </ul>
          </Collapsible>    
        </Section>
        <Section heading="РЕПУТАЦИЯ">
          <p>Ты знаменит в своём ремесле. Всякий раз, когда ты сталкиваешься с кем-то, кто, вероятно, 
слышал о тебе, проверь Стиль:</p>
            <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Они знают о твоей репутации. Ты можешь решить, что конкретно они слышали. Zero заставит их действовать соответственно. Получи драйв или рычаг, чтобы повлиять на них</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Они знают о твоей репутации. Ты можешь решить, что конкретно они слышали.</p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Они знают самые тёмные стороны твоей репутации. Zero решает, что они слышали.</p>
          </li>
        </ul> 
        </Section>
        <Section heading="SHARPSHOOTER">
          <p>
          Всякий раз, когда ты стреляешь по цели на 
дальней дистанции, используя винтовку с оптическим прицелом, проверь Рефлексы
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Выстрел находит свою цель. Выбери две опции. </p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Выстрел находит свою цель. Выбери одну опцию.</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Выстрел не попал туда, куда ты намеревался, 
или ты открываешь свою позицию противнику. 
Ожидай свидетелей, противников, преследующих 
тебя, когда ты покидаешь сцену, или других 
проблем. Zero делает ход. </p>
            </li>
          </ul>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>нанеси +2 урона;</li>
            <li>порази ещё одну цель пулей, прошедшей</li>
            <li>навылет;</li>
            <li>обездвижь свою цель;</li>
            <li>заставь цель потерять контроль над чем-то;</li>
            <li>ты не раскрываешь свою позицию.</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="FACE/OFF">
          <p>Иногда твоя цель находится под слишком серьёзной охраной, поэтому тебе приходится подобраться к ней поближе. Всякий раз, когда 
ты имитируешь чужую внешность или скрываешь 
свою личность, чтобы обмануть кого-то, проверь Стиль:</p>
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-32"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Твоя маскировка убедительна, пока ты продолжаешь её поддерживать.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-32 mr-1">10-14</p>
              <p>Тебе удаётся обмануть всех, кто не рассматривает тебя внимательно, но выбери одно 
осложнение:</p>
            </li>
            <li className="mt-2 mb-2">
              <Collapsible label="ОСЛОЖНЕНИЯ" openByDefault={false} duration={300} textSize="l">
              <ul className="list-disc list-inside pt-2">
              <li>Ты не сможешь долго продолжать этот обман. Ты должен действовать быстро, если не
хочешь, чтобы тебя разоблачили.</li>
              <li>Ты оставляешь за собой следы и улики, которые впоследствии могут связать с тобой.</li>
              </ul>
              </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-32 mr-4"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Твоя маскировка эффективна только на расстоянии. Если ты привлечёшь к себе внимание, то 
будешь разоблачён. Zero делает ход</p>
            </li>
          </ul>  
        </Section>
        </div>
    </Collapsible>
    </div>  
  </div>
  );
}