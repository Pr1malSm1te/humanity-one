import Collapsible from "@/app/components/collapsible";
import Section from "@/app/components/section";
import { LiaGreaterThanEqualSolid, LiaLessThanEqualSolid } from "react-icons/lia";

export default function Page() {  
return (
  <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Pop Idol</h1>
    <div className="flex flex-col gap-6">
      <Collapsible label="Pop Idol : Начальные ходы" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="ТЫ ЖЕ НЕ ПОДНИМЕШЬ НА МЕНЯ РУКУ?">
          <p>Ты актриса, модель, художница — но уж точно 
не та, кто источает хоть какую-то опасность. 
В конфликтных ситуациях, которые могут перейти в столкновение, на тебя обращают внимание 
в последнюю очередь, если ты не проявляешь 
явные признаки агрессии. Если ты всё же решишь вступить в бой, то первая атака гарантированно будет успешной.</p>    
        </Section>
        <Section heading="ДАМСКАЯ СУМОЧКА">
        <p>Всякий раз, когда тебе необходим какой-то 
предмет, который не превышает уровень твоих 
финансов и может поместиться в твою сумочку, потрать снаряжение. Этот предмет окажется у тебя, но он придёт в негодность после 
первого использования.</p>
        </Section>
        <Section heading="YES, DADDY">
          <p>К сожалению, чтобы стать известной в мире 
мрачного будущего, приходится идти на сделки 
с дьяволом. В твоем же случае ты буквально 
принадлежишь какому-то влиятельному человеку, 
который вкладывает деньги и другие средства 
в твою раскрутку. Расскажи, кто бы это мог 
быть. В начале каждой сессии проверь Стиль:</p>  
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Daddy очень доволен твоими успехами. Выбери две опции.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Daddy доволен твоими успехами. Выбери одну 
опцию. Если захочешь воспользоваться ещё одной — возьми в долг.</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Ты расстраиваешь своего Daddy. Он замораживает твои активы и финансы до тех пор, пока 
ты не отработаешь появившийся у него долг.</p>
            </li>
          </ul>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>получи один актив;</li>
            <li>получи ответ на один любой вопрос, который может знать daddy;</li>
            <li>получи долг на персонажа, который мог бы задолжать/уже должен твоему daddy.</li>
            </ul>
          </Collapsible> 
        </Section>
        <Section heading="TWO-FACED">
          <p>
          В шоу-бизнесе и жизни, которая ему сопутствует, приходится либо играть по своим правилам, 
либо убеждать кого-то играть по твоим. Когда ты манипулируешь кем-то, проверь Стиль:
            </p>
            <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Он полностью доверяет тебе и делает всё, что 
ты его попросишь. Получи рычаг на будущее.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-24 mr-1">10-14</p>
              <p>Он полностью доверяет тебе и делает всё, что 
ты его попросишь, но появляется осложнение:</p>
            <li>
            </li>
            <Collapsible label="ПОСЛЕДСТВИЯ" openByDefault={false} duration={300} textSize="l">
              <ul className="list-disc list-inside pt-2">
              <li>он безнадёжно влюбляется в тебя, что повлечет за собой проблемы позже;</li>
              <li>он будет чувствовать себя преданным, отвергнутым или униженным, потому что тызлоупотребила его доверием;</li>
              <li>он столкнется с проблемами из-за своих действий, которые явно приведут к тебе</li>
              </ul>
            </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-14 pr-2"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Он видит тебя насквозь и будет поступать так, 
как ему заблагорассудится.</p>
            </li>
          </ul>          
        </Section>
        <Section heading="ВСЁ В ПОРЯДКЕ, ОН СО МНОЙ">
          <p>Тебе открыты почти все двери — на любое собрание, к любому человеку. Однако охрана не 
будет столь же любезна с теми, кого ты захочешь взять с собой, если их нет в списке 
приглашённых. Чтобы разрешить это недоразумение, проверь Стиль:</p>
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-32"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p >Ты уговариваешь охрану пропустить не только себя, но и всех, кто сейчас находится 
с тобой</p>
            </li>
            <li className="flex gap-2">
              <p className="w-32 mr-1">10-14</p>
              <p>Ты уговариваешь охрану пропустить вместе с тобой лишь одного человека.</p>
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-32 mr-4"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Охрана готова пропустить только тебя, к тому 
же ты попадёшь под пристальное наблюдение. 
Zero делает ход</p>
            </li>
          </ul>
        </Section>
        </div>
    </Collapsible>
    <Collapsible label="Pop Idol : Ходы повышенной квалификации" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
        <Section heading="SUPERSTAR">
          <p>Ты настолько известна, что у тебя есть фанаты практически везде. Один раз за сессию, 
когда тебя поймали, хотят причинить вред или 
получить с тебя долг, можешь сказать Zero, 
что оппонент — твой тайный фанат, и уйти из 
опасной сцены невредимой (одна).</p>    
        </Section>
        <Section heading="ONE HANDSHAKE">
        <p>Ты имеешь связи в шоу-бизнесе по всему миру. 
Один раз за игровую сессию, когда будет полезно узнать кого-то в этой или смежных 
сферах, укажи имя человека и расскажи, как 
вы познакомились друг с другом, затем проверь Стиль: </p>
        <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p>Этот человек — друг. Ты с ним в хороших отношениях. Он будет рад тебе помочь.</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Этот человек — твой знакомый</p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Вы знаете друг друга, но между вами старая 
вражда. Расскажи, в чём дело.</p>
          </li>
        </ul>
        </Section>
        <Section heading="CANCEL CULTURE">
          <p>Ты стала настолько известной, что одним своим 
словом можешь буквально уничтожить репутацию 
человека. Один раз за сессию, когда ты хочешь 
публично унизить кого-то, проверь Эмпатию:</p>
          <ul>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-4"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
            <p>Репутация человека полностью уничтожена: 
его исключают из всех социальных групп, он 
лишается работы и подвергается осуждению со 
стороны общественности</p>
          </li>
          <li className="flex gap-2">
            <p className="w-14 pr-2">10-14</p>
            <p>Репутация человека полностью уничтожена, но 
он всё ещё может вернуть её, а к тебе будут 
неудобные вопросы со стороны СМИ..</p>
          </li>
          <li className="flex gap-2">
            <p className="flex flex-row w-14 pr-3"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
            <p>Репутация человека пострадает, но также 
вскроется какой-то неприятный факт о тебе, 
который узнает общественность. Расскажи, какой. Zero делает ход.</p>
          </li>
        </ul>   
        </Section>
        <Section heading="BODYGUARD">
          <p>
          Ты стала знаменитой. Теперь у тебя есть телохранитель, который постоянно находится 
рядом — за определённую плату, разумеется. 
Расскажи Zero о том, кто это. В конце каждой 
игровой сессии соверши проверку финансов, где 
стоимость будет равняться количеству опций, 
использованных телохранителем
            </p>
          <Collapsible label="ОПЦИИ" openByDefault={false} duration={300} textSize="l">
            <ul className="list-disc list-inside pt-2">
            <li>Замес — один раз за боевую сцену наносит 3 урона (бронебойное);</li>
            <li>Прикрыть — если ты должна получить урон, он получает его вместо тебя (здоровье 3, броня 1);</li>
            <li>Надавить — угрожает насилием, из-за чего ты получаешь рычаг против NPC.</li>
            </ul>
          </Collapsible> 
          <p>При провале ты не можешь оплатить услуги Телохранителя вовремя и становишься ему должна. 
Zero делает ход</p>
        </Section>
        <Section heading="ЛЮБВЕОБИЛЬНАЯ НАТУРА">
          <p>Ты поддерживаешь отношения с многочисленными людьми, которые считают тебя своей второй 
половинкой, но не знают друг о друге. Назови 
хотя бы двоих из них и опиши в паре предложений. Один раз за сцену, когда тебе нужны 
деньги, безопасное убежище, защита или другая помощь, которую может предоставить одна 
из твоих жертв, проверь Стиль: </p>
          <ul>
            <li className="flex gap-2">
              <p className="flex flex-row w-32"><LiaGreaterThanEqualSolid className="text-2xl"/>15</p>
              <p>Они могут предоставить тебе всё, что нужно.</p>
            </li>
            <li className="flex gap-2">
              <p className="w-32 mr-1">10-14</p>
              <p>Один из них может помочь, но появится проблема:</p>
            </li>
            <li  className="mt-2 mb-2">
            <Collapsible label="ОСЛОЖНЕНИЯ" openByDefault={false} duration={300} textSize="l">
              <ul className="list-disc list-inside pt-2">
              <li>твой daddy узнает об этом;</li>
              <li>твои жертвы узнают друг о друге;</li>
              <li>кто-то из них пострадает, помогая тебе;</li>
              <li>ты ввяжешься в их проблемы.</li>
              </ul>
              </Collapsible> 
            </li>
            <li className="flex gap-2">
              <p className="flex flex-row w-32 mr-4"><LiaLessThanEqualSolid className="text-2xl"/>9</p>
              <p>Ты знаешь того, кто может помочь, но он уже 
видел твою грязную игру. Если ты хочешь получить его помощь, тебе потребуются угрозы 
или шантаж.</p>
            </li>
          </ul>
        </Section>
        </div>
    </Collapsible>
    </div>  
  </div>
  );
}