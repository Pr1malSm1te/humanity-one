import Link from "next/link";
import Section from "@/app/components/section";
import Collapsible from "@/app/components/collapsible";

export default function Page() {
    return (
      <div className="bg-slate-950 p-5 rounded-lg text-white">      
    <h1 className="text-6xl flex text-white mb-5">Mobs</h1>
      <div className=" grid grid-cols-3 gap-6 ">
      <Section heading="ПРАВИЛА СОЗДАНИЯ" className="col-span-3">
      <p> 
      Ниже представлен довольно подробный генератор персонажей Zero (NPC). С помощью него ты 
сможешь создать яркого и интересного героя, 
который запомнится игрокам надолго. 
</p>
<p>
Тебе не обязательно заполнять все пункты 
сразу. Для того, чтобы ввести персонажа 
в игру «на лету», достаточно придумать ему 
«Личность» и «Отличительные черты». Насколько подробно ты будешь его описывать — решать тебе.  
      </p>
    </Section>
    <Section heading="ЛИЧНОСТЬ">
        <p>
        Тут всё просто: назови персонажа и его род 
деятельности. Пример:
        </p>
        <ul className="list-disc list-inside">
<li>Кейс, хакер-фрилансер.</li>
<li>Декард, бегущий по лезвию в отставке.</li>
<li>Майор Кусанаги, глава оперативной группы девятого отдела МВД</li>
        </ul>
      </Section>
      <Section heading="ОТЛИЧИТЕЛЬНЫЕ ЧЕРТЫ">
        <p>
        Теперь подумай над тем, чем отличается персонаж от остальной серой массы. Это может быть 
вычурная одежда (даже для мира будущего), 
причудливый акцент или интересное занятие/
особенность. Пример: 
        </p>
        <ul className="list-disc list-inside"><li></li>известная личность в Сети;
<li>отказался от хрома;</li>
<li>постоянно себя модифицирует;</li>
<li>заикается, когда речь идет о… ;</li>
<li>часто сплёвывает;</li>
<li>развивает свой проект;</li>
<li>нет ни в одной базе данных;</li>
<li>невероятно богат;</li>
<li>другое.</li>
        </ul>
      </Section>
      <Section heading="ЦЕЛЬ И МОТИВАЦИЯ">
        <p>
        В мире ничего не происходит просто так. У любого разумного существа есть цель, к которой 
оно стремится. Пусть это и будет простое «не 
сдохнуть сегодня в сточной канаве». Придумай персонажу интересную цель и мотивацию, которая будет иметь значение для вашей игры. Примеры:
        </p>
        <ul className="list-disc list-inside">
<li>получить кого-то/что-то (власть, одобрение, опекунство над сыном);</li>
<li>справиться с кем-то/чем-то (наркозависимостью, личным врагом, конкурирующей корпорацией);</li>
<li>найти кого-то/что-то (пропавшего брата, смысл жизни, правду);</li>
<li>распространить (идею, рекламу, вещества);</li>
<li>исправить/поменять (ошибку, мнение, подход);</li>
<li>помочь кому-то (инвалидам, жертвам террора, семье).</li>
        </ul>
      </Section>
    <div className="flex flex-col gap-6 pt-6 col-span-3">
      <Section heading="ТЕГИ">
      <p>Теперь выбери от одного до пяти положительных тегов для своего персонажа. Помни: чем 
их больше, тем персонаж опытнее и значимее 
в мире игры. </p>
<p>Последним из этапов создания NPC будет выбор 
его слабостей, т.е. отрицательных тегов. Это 
те стороны, в которых твой персонаж очень 
плох. На них обязательно будут давить персонажи игроков, чтобы получить желаемое. 
Выбери от одного до трёх.</p>
      </Section>
      <Collapsible label="Положительные теги" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
      <table className="table-auto border-collapse w-full border-spacing-y-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Теги</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
<tr>
<td className="border border-slate-600 p-2">I WILL BE BACK </td>
<td className="border border-slate-600 p-2">Возвращается после смерти. Работает один раз за всю кампанию.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">БЕЗЭМОЦИОНАЛЬНЫЙ </td>
<td className="border border-slate-600 p-2">Практически невозможно узнать намерения по его поведению.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ВЛИЯТЕЛЬНЫЙ </td>
<td className="border border-slate-600 p-2">Обладает связями практически в любой сфере.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ИСКУССТВЕННЫЙ </td>
<td className="border border-slate-600 p-2">Не чувствует боли, всегда функционирует с максимальной эффективностью.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">РЕПУТАЦИЯ </td>
<td className="border border-slate-600 p-2">Обладает отличной репутацией, которую трудно очернить.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">СКРЫТНЫЙ </td>
<td className="border border-slate-600 p-2">Сложно заметить его или то, что он прячет.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ТЕЛОХРАНИТЕЛИ </td>
<td className="border border-slate-600 p-2">Под охраной профессиональных секьюрити.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ФАНАТИЧНЫЙ </td>
<td className="border border-slate-600 p-2">Потребуется что-то большее, чем простое убеждение, чтобы поменять его точку зрения.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ХИТРЫЙ </td>
<td className="border border-slate-600 p-2">На 10–14 может соврать. Действует по одному разу на каждого персонажа.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ХРОМИРОВАННЫЙ </td>
<td className="border border-slate-600 p-2">Сильно превосходит обычного человека в одном аспекте: сила, реакция, ум, устойчивость.</td>
</tr>
            </tbody>
        </table>
      </Collapsible>
      <Collapsible label="Негативные теги" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        
      <table className="table-auto border-collapse w-full border-spacing-y-4 mt-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Теги</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
<tr>
<td className="border border-slate-600 p-2">АЛЬТЕР ЭГО </td>
<td className="border border-slate-600 p-2">Имеет одну или несколько личностей, которые не может контролировать.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">БЕДНЫЙ </td>
<td className="border border-slate-600 p-2">Непонятно, где находит хотя бы еду.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ДОЛЖНИК </td>
<td className="border border-slate-600 p-2">По уши в долгах.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ЖАДНЫЙ </td>
<td className="border border-slate-600 p-2">Готов родную мать продать, если это будет выгодно.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ЗАВИСИМЫЙ </td>
<td className="border border-slate-600 p-2">Обладает серьёзной зависимостью.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ИЗГОЙ </td>
<td className="border border-slate-600 p-2">Находится в чёрном списке у какой-то корпорации/группы лиц.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ИНВАЛИД </td>
<td className="border border-slate-600 p-2">Имеет какое-либо ограничение, которое уже невозможно заменить аугментацией.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">КОДЕКС ЧЕСТИ </td>
<td className="border border-slate-600 p-2">Всегда верен своим принципам.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">НЕИЗЛЕЧИМЫЙ </td>
<td className="border border-slate-600 p-2">Болен смертельной болезнью, которую уже не вылечить.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">СОБСТВЕННОСТЬ </td>
<td className="border border-slate-600 p-2">Его жизнь буквально принадлежит кому-то.ТРУСЛИВЫЙ Быстро соглашается сотрудничать, если к нему применяют грубую силу.</td>
</tr>
            </tbody>
        </table>
      </Collapsible>
      </div>
    
    </div>  
  </div>
  
    );
  }
