import Link from "next/link";
import Section from "@/app/components/section";
import Collapsible from "@/app/components/collapsible";

export default function Page() {
    return (
      <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Guide Book</h1>
    <div className="flex flex-col gap-6 pt-6">
    <Collapsible label="Советы по игре" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
      <div className="grid grid-cols-3 gap-4">
        <Section heading="ЦЕЛИ">
          <ul className="list-disc list-inside">
<li>Создавать атмосферу мрачного технологического будущего победившего капитализма.</li>
<li>Делать жизнь персонажей напряжённой и драматичной на фоне общественных проблем.</li>
<li>Играть, чтобы узнать, что будет дальше</li>
          </ul>
        </Section>
        <Section heading="ПРИНЦИПЫ" className="row-span-2">
          <p>
<li>Показывай город целиком — от мегаскрёбов до уличных трущоб.</li>
<li>Будь фанатом персонажей игроков.</li>
<li>Обращайся к персонажам, а не к игрокам.</li>
<li>Добавь корпоративной эстетики и пропаганды.</li>
<li>Помещай персонажей в центр политических и личных конфликтов.</li>
<li>Проводи пугающие параллели с реальным миром.</li>
<li>Говори о проблемах общества на фоне высоких технологий.</li>
<li>Покажи сильные и слабые стороны технологического прогресса.</li>
<li>Затрагивай моральные убеждения персонажей.</li>
<li>Наделяй всех именами и мотивами.</li>
<li>Назначай цену для всего, даже для дружбы и человечности.</li>
<li>Задавай много вопросов, используй ответы.</li>
<li>Хороший вопрос тот, на который нет правильного ответа.</li>
<li>Используй визуальный нарратив, описывай сцены вместе с игроками, добавляй кинематографичности.</li>
          </p>
        </Section>
        <Section heading="КОРПОРАТИВНЫЕ КВАРТАЛЫ:">
          <p>
          Бесконечно высокие мегаскрёбы, стильный минимализм, матовая сталь, экзотические животные, хорошо охраняется, стерильные офисы 
компаний, иностранная архитектура, автономное 
строение, высокотехнологичное оборудование, 
живые растения, тонированные стёкла, эстакады 
в соседние здания, недавно отремонтировано, 
серьёзные протоколы безопасности, стены из 
одностороннего стекла, утончённая гравировка, 
зоны с климат-контролем, натуральные продукты 
питания, строгая униформа.
          </p>
        </Section>
        <Section heading="ДИСТРИКТЫ">
          <p>
          Недостроенные многоэтажки, зона боевых действий, покрыто граффити, нелегалы и незаконные жильцы, необычно людно, катастрофическое 
загрязнение, явно проспонсировано корпорацией, выставлено на продажу, место преступления, обставлено строительными лесами, 
ожидает сноса, повреждено недавним пожаром, 
скопившиеся кучи мусора, плохая электропроводка, наспех отремонтировано строительной 
пеной, очаг распространения одной из религий, 
покрыт рекламными экранами.
          </p>
        </Section>
        <Section heading="ТЕХНОЛОГИИ И КИБЕРИЗАЦИЯ">
          <p>
          Рекламные/курьерские/патрульные дроны, корпоративные ховеркары, новейшие системы распознавания лиц, анти-дрон система, плагин умного 
дома, транспорт под контролем искусственного 
интеллекта, терминалы мультикультурных религий, QR-коды для дополненной реальности, 
капсульные отели криосна, монолитные принтеры 
3D-печати, суррогатная органика, медицинские 
нано-боты с посуточной оплатой, охранные андроиды, специально оборудованные места для 
подключения к Матрице
          </p>
        </Section>
      </div>
      </Collapsible>
      <Collapsible label="Термины" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
      <table className="table-auto border-collapse w-full border-spacing-y-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Термини</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
<tr>
<td className="border border-slate-600 p-2">d10 </td>
<td className="border border-slate-600 p-2">десятигранная игральная кость. </td>
</tr>
<tr>
<td className="border border-slate-600 p-2">DARK NET </td>
<td className="border border-slate-600 p-2">запретный интернет-ресурс.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">FIREWALL </td>
<td className="border border-slate-600 p-2">защита от взлома.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">NPC </td>
<td className="border border-slate-600 p-2">неигровой персонаж (от англ. NonPlayer Character). Персонаж, которым управляет не игрок, а мастер.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ZERO </td>
<td className="border border-slate-600 p-2">Мастер.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">АКТИВЫ </td>
<td className="border border-slate-600 p-2">крупная денежная сумма.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">АУГМЕНТИКА/АУГМЕНТАЦИЯ/ХРОМ </td>
<td className="border border-slate-600 p-2">кибернетическое улучшение или протез.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">БАГ/БАГОВАННЫЙ </td>
<td className="border border-slate-600 p-2">бросок 3d10 с выбором двух минимальных значений.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">БРОНЯ </td>
<td className="border border-slate-600 p-2">физическая защита.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">БРОСОК/ПРОВЕРКА </td>
<td className="border border-slate-600 p-2">бросок двух игральных костей d10 (далее 2d10).</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ДИСТАНЦИЯ </td>
<td className="border border-slate-600 p-2">расстояние, на котором оружие функционирует в полную силу.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ДОЛГ </td>
<td className="border border-slate-600 p-2">долговое обязательство, денежное или моральное (giri).</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ДРАЙВ/ДРАЙВОВЫЙ </td>
<td className="border border-slate-600 p-2">бросок 3d10 с выбором двух максимальных значений.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">КВАЛИФИКАЦИЯ </td>
<td className="border border-slate-600 p-2">личный рост персонажа.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">КИБЕРМОЗГ </td>
<td className="border border-slate-600 p-2">технический апгрейд человеческого мозга, позволяющий выходить в Сеть и общаться силой мысли.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">МАТРИЦА </td>
<td className="border border-slate-600 p-2">необъятная и скрытая часть интернета, хранящая в себе всю информацию, которая когда-либо была в Сети.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ПОКАЗАТЕЛЬ ЗДОРОВЬЯ </td>
<td className="border border-slate-600 p-2">показатель физического состояния персонажа. </td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ПОКАЗАТЕЛЬ СТРЕССА </td>
<td className="border border-slate-600 p-2">показатель ментального состояния персонажа.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">РЫЧАГ </td>
<td className="border border-slate-600 p-2">мера воздействия на персонажа, по типу шантажа или выгодного предложения. Некий «рычаг давления».</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">СЕТЬ</td>
<td className="border border-slate-600 p-2">интернет.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">СНАРЯЖЕНИЕ </td>
<td className="border border-slate-600 p-2">расходуемые предметы.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ТЕГ </td>
<td className="border border-slate-600 p-2">свойство снаряжения, аугментики или NPC.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ТРАВМА </td>
<td className="border border-slate-600 p-2">физический или ментальный урон, оказывающий постоянное давление на персонажа, пока не будет вылечен.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">УРОН </td>
<td className="border border-slate-600 p-2">нанесение физического или ментального вреда.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ФАКТ </td>
<td className="border border-slate-600 p-2">утверждение игрока, которое становится истиной в игре.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ФИНАНСЫ </td>
<td className="border border-slate-600 p-2">уровень достатка персонажа.</td>
</tr>
<tr>
<td className="border border-slate-600 p-2">ЭНГРАММА </td>
<td className="border border-slate-600 p-2">информационный слепок человеческого сознания.</td>
</tr>
            </tbody>
        </table>
      </Collapsible>
    </div>  
  </div>
  
    );
  }
