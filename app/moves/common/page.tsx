import Collapsible from "@/app/components/collapsible";
import Section from "@/app/components/section";
import { LiaGreaterThanEqualSolid, LiaLessThanEqualSolid } from "react-icons/lia";

export default function Page() {  
return (
  <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Common</h1>
    <div className="flex flex-col gap-6">
      <Collapsible label="Common" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="РАСПОЗНАТЬ МОТИВЫ">
          <p>Когда ты хочешь понять что-то о человеке 
и его намерениях во время вашего разговора, 
проверь Эмпатию. В случае успеха ты можешь 
задавать вопросы о персонаже Zero или игроку 
в любое время в этой сцене, пока продолжается диалог.</p>
          <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Задай два вопроса.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Задай один вопрос</p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Ты случайно раскрыл свои намерения тому, кого 
пытался разговорить. Скажи Zero или игроку, 
каковы эти намерения. Zero делает ход</p>
          </li>
        </ul>
        <Collapsible label="Вопросы" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Чего ты хочешь на самом деле?</li>
            <li>Что ты знаешь о…?</li>
            <li>Что ты собираешься делать?</li>
            <li>Что я могу сделать, чтобы… ?</li>
            <li>Что собирается делать… ?</li>
            </ul>
          </Collapsible>     
        </Section>
        <Section heading="ОЦЕНИТЬ СИТУАЦИЮ">
        <p>Когда ты оцениваешь ситуацию, в которой оказался, проверь Анализ. При успехе ты можешь 
задать Zero вопросы о текущем положении вещей. Если ты действуешь на основе этих ответов, получи +1 к своим броскам:</p>
          <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Задай два вопроса.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Задай один вопрос</p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Ты всё равно можешь задать один вопрос, но 
что-то упустишь, привлечёшь нежелательное 
внимание или подвергнешь себя опасности. 
Zero делает ход.</p>
          </li>
        </ul>
        <Collapsible label="Вопросы" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Какой лучший способ преодолеть препятствие?</li>
            <li>Что в настоящее время представляет наибольшую угрозу?</li>
            <li>Что я могу использовать в своих интересах?</li>
            <li>Что скрыто от меня?</li>
            <li>Что в этом странного?</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="COUNT ZERO">
        <p>
        Когда твой показатель здоровья падает до нуля 
или ниже, проверь Организм:
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Ты находишься в сознании и можешь передвигаться, но отключишься от любой чрезмерной 
физической нагрузки.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Ты находишься в сознании, но скоро силы покинут тебя. Получи баг на все броски до тех 
пор, пока тебя не стабилизируют</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Твоя жизнь обрывается навсегда.</p>
            </li>
          </ul>    
        </Section>
        <Section heading="ПОИСК ИНФОРМАЦИИ">
          <p>
          Когда ты ищешь необходимую информацию, то 
определись, как ты это делаешь и что хочешь 
найти. Если ты задействуешь Сеть, базы данных и прочие информационные технологии, то 
проверь Анализ. Если ты собираешь сведения, 
разговаривая с людьми, то проверь Эмпатию:
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Ты нашёл нечто интересное, задай два вопроса.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Ты что-то нашёл, задай один вопрос</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Ты всё равно можешь задать один вопрос, но 
наживёшь себе проблемы. Zero делает ход.</p>
            </li>
          </ul>
          <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Что я могу узнать о… прямо сейчас?</li>
            <li>Где мне узнать больше о… ?</li>
            <li>Кто или что может быть связано с темой?</li>
            <li>Что мне подсказывает интуиция?</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="БЕЖАТЬ ПО ЛЕЗВИЮ">
          <p>Когда ты делаешь что-то рискованное, испытываешь нехватку времени или пытаешься избежать 
опасности, Zero объяснит, каковы последствия 
неудачи. Проверь:</p>
<Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Мускулы, если полагаешься на грубую силу.</li>
            <li>Рефлексы, если полагаешься на ловкость и проворство.</li>
            <li>Эмпатию, если чувствуешь эмоции собеседника.</li>
            <li>Анализ, если полагаешься на остроту ума и внимание к деталям.</li>
            <li>Стиль, если полагаешься на свои лидерские качества.</li>
            <li>Организм, если полагаешься на крепость тела</li>
            </ul>
          </Collapsible> 
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-32"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>У тебя получается.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-32 mr-1">10-14</p>
              <p>Ты исполняешь задуманное, но мешкаешь, задерживаешься или сталкиваешься с любым осложнением, которое решит выбрать Zero. Он 
предлагает неожиданный результат, высокую 
цену или трудный выбор.</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-32 mr-4"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Есть серьёзные последствия, ты подвергаешься 
опасности. Zero делает ход</p>
            </li>
          </ul>
        </Section>
          <Section heading="НЕЙТРАЛИЗАЦИЯИ">
          <p>
          Когда начинаешь ближний бой, проверь Мускулы. Если стреляешь — Рефлексы:
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Нанеси урон оружия и выбери одну опцию.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Нанеси урон оружия, но Zero выберет проблему.</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Ситуация разворачивается наихудшим образом. 
Zero делает ход.</p>
            </li>
          </ul>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>ты не столкнулся с проблемой;</li>
            <li>ты успел сделать что-то ещё;</li>
            <li>ты заставил противника совершить ошибку.</li>
            <li>Расскажи, какую именно.</li>
            </ul>
          </Collapsible> 
          <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>ты получаешь урон;</li>
            <li>ситуация осложнится</li>
            </ul>
          </Collapsible> 
        </Section>
        </div>
    </Collapsible>
    <Collapsible label="Extended" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="ПОКУПКА ТОВАРА">
          <p>Если покупка простая и легко для тебя доступна — ты её совершаешь. Для приобретения 
чего-либо серьёзного вычти стоимость покупки 
из своих финансов и сделай бросок, добавив 
разницу как модификатор. Ты можешь потратить 
актив для получения ≥15.</p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Всё прошло успешно.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Всё прошло успешно, но выбери одно последствие:</p>
            </li>
            <li>
            <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>ты получаешь не совсем то, что хотел;</li>
            <li>у тебя появятся проблемы с законом;</li>
            <li>тебе придётся принять долг или потратить финансы;</li>
            <li>ситуация осложняется другим образом.</li>
            </ul>
          </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Тебе кажется, что всё проходит успешно, но 
в итоге у тебя появляются серьёзные проблемы. Zero сделает ход.</p>
            </li>
          </ul>   
        </Section>
        <Section heading="НАЁМ СПЕЦИАЛИСТА">
        <p>Ты можешь нанять определённого специалиста 
для выполнения любых задач. Вычти стоимость 
услуги из своих финансов и сделай бросок 
с этим модификатором (стоимость назначает 
Zero). Ты можешь потратить актив для получения ≥15.</p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Специалист выполнит свою работу настолько 
хорошо, насколько может.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Специалист выполнит работу, но возникнут осложнения. Zero выберет одно:</p>
            </li>
            <li>
            <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>у специалиста неприятности с законом;</li>
            <li>специалист не так хорош, как хотелось бы;</li>
            <li>специалист потребует большего (долг или активы);</li>
            <li>ситуация осложняется другим образом.</li>
            </ul>
          </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Специалист начнёт делать свою работу, но чтото пойдёт не так. Zero делает ход.</p>
            </li>
          </ul>
        </Section>
        <Section heading="АПГРЕЙД">
        <p>Если хочешь поставить себе новую аугментику, 
тебе для начала следует произвести Покупку 
товара, а затем Нанять специалиста. После 
найма и оплаты его услуг проверь Организм. 
Ты можешь потратить актив для получения ≥15.</p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Операция прошла успешно.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Аугментика работает с перебоями, выбери одно:</p>
            </li>
            <li>
            <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>хром коротнуло, получи два пункта стресса;</li>
            <li>нужно привыкнуть, баг до конца сессии на броски, связанные с аугментикой;.</li>
            <li>имплант оказался бракованным, присвой ему тег «хлам».</li>
            </ul>
          </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Возникли серьёзные осложнения. Аугментика 
установлена неправильно. При каждом её использовании получи пункт стресса. Zero делает ход.</p>
            </li>
          </ul> 
        </Section>       
        
        </div>
    </Collapsible>
    <Collapsible label="Giri" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="ОКАЗАТЬ УСЛУГУ">
          <p>Когда ты оказываешь кому-то услугу, он становится тебе должен. Запиши имя персонажа 
игрока или Zero в свой буклет.</p>            
        </Section>
        <Section heading="ВОСТРЕБОВАТЬ ДОЛГ">
        <p>Когда ты хочешь получить долг, напомни персонажу о том, когда он успел задолжать тебе. 
Если это персонаж игрока, он должен:</p>
            
            <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>помочь тебе в… ;</li>
            <li>честно ответить на вопрос;</li>
            <li>простить кому-то долг.</li>
            </ul>
            </Collapsible> 
            <p>Если это NPC:</p>
            <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>честно ответить на вопрос об организации, в которой он состоит;</li>
            <li>предоставить тебе дорогое и полезное снаряжение, будь то аугментика или оружие;</li>
            <li>простить кому-то долг</li>
            </ul>
            </Collapsible> 
        </Section>
        <Section heading="ОТСРОЧИТЬ ДОЛГ">
        <p>Если ты захочешь отсрочить долг, то тебе потребуется проверить Стиль:</p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Ты всё ещё должен, однако на этот раз избегаешь платы.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Ты увязнешь в долгах ещё сильнее. Выбери одну опцию:</p>
            </li>
            <li>
            <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>запиши себе ещё один долг;</li>
            <li>тебя добавят в чёрный список организации,к которой принадлежит цель, до возмещения долга;</li>
            <li>тебе потребуется отдать в залог одну ступень своих финансов.</li>
            </ul>
          </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>У тебя не получается соскочить с крючка. 
Ты должен либо рассчитаться с долгом, либо 
столкнуться с последствиями: собеседник может выбрать для тебя два варианта из списка 
выше или заставить тебя удалить все записанные долги по отношению к себе.</p>
            </li>
          </ul> 
        </Section> 
    </div>  
    </Collapsible>
    </div>  
  </div>
  );
}