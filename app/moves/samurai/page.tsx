import Collapsible from "@/app/components/collapsible";
import Section from "@/app/components/section";
import { LiaGreaterThanEqualSolid, LiaLessThanEqualSolid } from "react-icons/lia";

export default function Page() {  
return (
  <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Street Samurai</h1>
    <div className="flex flex-col gap-6">
      <Collapsible label="Street Samurai : Начальные ходы" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="CLAN">
          <p>Принимая путь самурая, ты вступаешь в уличный клан, становясь его частью. Теперь ты 
          один из них. Придумай название своему клану, 
          опиши отличительную символику и выбери <b>две специализации.</b></p>
          <Collapsible label="СПЕЦИАЛИЗАЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>количество.</li>
            <li>контрабанда.</li>
            <li>обширные базы данных.</li>
            <li>профессионализм.</li>
            <li>серьёзная репутация.</li>
            <li>скрытность.</li>
            <li>слухи.</li>
            <li>финансы.</li>
            <li>шантаж</li>
            </ul>
          </Collapsible>     
        </Section>
        <Section heading="YAMAKASHI">
        <p>Всякий раз, когда ты выполняешь акробатические манёвры, брось <b>Рефлексы</b>:</p>
        <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Выбери <b>две</b> опции. Ты можешь сохранить одну до конца сцены.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Выбери <b>одну опцию.</b> </p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Ты всё ещё можешь выбрать <b>одну опцию</b>, но 
            возникает осложнение — потребуется цена для 
            успеха или появится новая угроза. Zero делает ход. </p>
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
        <Section heading="BUSHIDO">
          <p>Выбери три правила, которых ты обязан придерживаться. Когда ты выполняешь одно из 
          них, получи очко признания. Если нарушаешь 
          правило — отними очко признания. К тому же, 
          если твоё признание не снизилось в течение 
          сессии, — получи очко опыта.</p>
          <Collapsible label="ПРАВИЛА" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Безопасность клана превыше всего.</li>
            <li>Находи достойных последователей.</li>
            <li>Не бойся смерти, рискуй.</li>
            <li>Никогда не отказывайся от долга, если принял его на себя.</li>
            <li>Помогай нуждающимся.</li>
            <li>Слово Сэнсэя — закон.</li>
            <li>Щади сдавшихся противников</li>
            </ul>
          </Collapsible>     
        </Section>
        <Section heading="ПОМОЩЬ СТАИ">
          <p>
            Твой клан всегда готов прийти к тебе на помощь в трудную минуту. Расскажи, какая помощь 
            в рамках специализации клана тебе необходима, а затем соверши стандартный бросок.Ты 
            можешь потратить от 1 до 5 очков признания и добавить их к результату 
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Используй <b>две</b> специализации своего клана. 
              Самураи выполнят просьбу настолько хорошо, 
              насколько это возможно</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Используй <b>одну</b> специализацию своего клана, но ты останешься <b>должен</b></p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Клан не может тебе помочь прямо сейчас. Zero скажет, почему, и выберет одно последствие</p>
            </li>
          </ul>
          <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>в клане завелась крыса;</li>
            <li>вскрылся важный секрет;</li>
            <li>положение клана под угрозой;</li>
            <li>союзники в опасности.</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="Я ВЫРОС НА ЭТИХ УЛИЦАХ">
          <p>Всякий раз, когда ты направляешься в другой район или часть города, проверь Эмпатию:</p>
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-32"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Ты был здесь раньше. Выбери <b>две</b> опции в любой момент во время своего визита.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-32 mr-1">10-14</p>
              <p>Ты слышал об этом месте. Выбери <b>одну</b> опцию в любой момент во время своего визита.</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-32 mr-4"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Ты уже бывал здесь раньше, но пока тебя не 
              было, появилась новая проблема/обострилась 
              старая. Выбери <b>одну</b> опцию в любой момент свого визита. Zero объясняет, какая проблема 
              ждёт тебя здесь, и делает ход.</p>
            </li>
          </ul>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>задай Zero один вопрос об этом месте;</li>
            <li>здесь у тебя есть убежище, где ты можешь ненадолго «залечь на дно» и отдохнуть;</li>
            <li>ты что-то знаешь об этом месте. Расскажи остальным, что;</li>
            <li>у тебя есть контакт в этом месте, который может помочь тебе, если ты убедишь его</li>
            </ul>
          </Collapsible> 
        </Section>
        </div>
    </Collapsible>
    <Collapsible label="Street Samurai : Ходы повышенной квалификации" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="NEO-BUDDHISM">
          <p>Ты в совершенстве овладел своим телом с помощью продолжительных физических и духовных 
          практик. Можешь потратить Свободное время на 
          тренировки и получить +2 к любой своей характеристике. Польза от тренировки проходит 
          в конце игровой сессии.</p>
          <p>Помимо этого ты всегда считаешься вооружённым, что позволяет тебе сражаться против 
          холодного оружия голыми руками и совершать 
          все проверки Нейтрализации через Рефлексы.</p>    
        </Section>
        <Section heading="URBAN NINJA">
        <p>Когда тебе необходимо куда-то прокрасться, спрятаться или взломать физический замок, проверь Рефлексы:</p>
        <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Получи три опции.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Получи две опции.</p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Получи одну опцию, но что-то пойдёт не так. 
              Возможно, тебя заметят в последний момент, 
              или твои действия будут слишком шумными. 
              Zero делает ход.</p>
          </li>
        </ul>
        <p>Потрать опции один к одному, чтобы проследить, осмотреть, открыть или стащить. Опции 
          сгорают, если ты создаёшь шум или попадаешь 
          в прямую видимость.</p>
        </Section>
        <Section heading="ГЛАЗА И УШИ КАМЕННЫХ ДЖУНГЛЕЙ">
          <p>У тебя есть связи среди бездомных, сумасшедших и других социальных аутсайдеров и изгоев, которым ты иногда помогаешь. Всякий 
            раз, когда тебе нужно что-то узнать от твоих 
            контактов, проверь Эмпатию:</p>
            <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p >Задай три вопроса.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Задай два вопроса.</p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Можешь задать один вопрос, но кто-то из контактов становится подозрительным или агрессивным. Zero делает ход</p>
          </li>
        </ul>
        <Collapsible label="ВОПРОСЫ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Что вы знаете о…?</li>
            <li>Какие слухи сейчас ходят на улице?</li>
            <li>Как я могу попасть в…?</li>
            <li>Кто в этом городе знает больше о цели моих поисков?</li>
            </ul>
          </Collapsible>    
        </Section>
        <Section heading="СЛИТЬСЯ С ТОЛПОЙ">
          <p>
          Всякий раз, когда ты собираешься уйти от погони в людном месте,
          слившись с толпой и не привлекая внимания, проверь Эмпатию:
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Преследователи потеряли тебя из виду или их внимание отвлекли прохожие, ты можешь спокойно покинуть это место</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Преследователи потеряли тебя из виду, но появляется осложнение</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Тебе удалось оторваться от преследователей, но это ненадолго. Zero делает ход.</p>
            </li>
          </ul>
          <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>из-за тебя пострадает невинный;</li>
            <li>в этом районе ещё какое-то время будетнебезопасно;</li>
            <li>преследователи запомнили, из какого тыклана, проблемы возникнут позже;</li>
            <li>ситуация осложняется другим образом.</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="KENJUTSU">
          <p>Если используешь холодное колющее или режущее оружие в драке, проверь свои Рефлексы</p>
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-32"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Ты разрубаешь противника пополам. Если это невозможно, то выбери одно</p>
            </li>
            <li className="mt-2 mb-2">
              <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
              <ul className="list-disc list-inside pt-2">
              <li> Нанеси удвоенный урон.</li>
              <li>Нанеси урон, игнорируя всю броню цели</li>
              </ul>
              </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="w-32 mr-1">10-14</p>
              <p>Ты наносишь урон от оружия, но ситуация осложняется:</p>
            </li>
            <li  className="mt-2 mb-2">
            <Collapsible label="ОСЛОЖНЕНИЯ" openByDefault={false} duration={300} textSize="l">
              <ul className="list-disc list-inside pt-2">
              <li>оружие выбили из твоих рук;</li>
              <li>ты получаешь урон;</li>
              <li>разрушено что-то важное;</li>
              <li>ситуация осложняется другим образом</li>
              </ul>
              </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-32 mr-4"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Всё оборачивается куда хуже, чем ты предполагал. Zero делает ход.</p>
            </li>
          </ul>
          
        </Section>
        </div>
    </Collapsible>
    </div>  
  </div>
  );
}