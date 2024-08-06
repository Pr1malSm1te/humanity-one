import Section from "@/app/components/section";
import Collapsible from "@/app/components/collapsible";
import { executeTagsCrudOperations } from "@/app/lib/tags";
import WeaponGenerator from "@/app/components/WeaponGenerator";
export default async function Page() {
    return (
      <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Weapons</h1>
    <Section heading="СЛУЧАЙНОЕ СОЗДАНИЕ">
      <WeaponGenerator 
      postags={JSON.parse(JSON.stringify(await executeTagsCrudOperations(3)))}
      negtags={JSON.parse(JSON.stringify(await executeTagsCrudOperations(4)))}
      ></WeaponGenerator>
    </Section>
    <Section heading="ПРАВИЛА СОЗДАНИЯ">
      <p> 
      В мире мрачного будущего у людей существует 
невероятное количество способов убивать друг 
друга. Данный генератор поможет вам описать 
уникальное оружие, которым вы хотите пользоваться. 
      </p>
      <ul className="list-disc list-inside">
      <li>Выбери мощность оружия, за каждый урон выше 1 прибавь 1 к стоимости: 1 урон, 2 урона, 3 урона, 4 урона.</li>
      <li>Выбери дистанцию: в упор, ближняя, средняя, дальняя.</li>
      <li>Можешь добавить к оружию один любой тег из списка ниже. Добавление других тегов повысит стоимость оружия на один пункт за каждый тег (максимум 3).</li>
      <li>Спроси у Zero, нужно ли добавить один негативный тег. Если это необходимо, выбери из списка ниже.</li>
      <li>Обязательно придумай своему оружию крутое название и скажи, какая корпорация производит его.</li>
      </ul>
      <p>
      Оружие может появиться у тебя в самом начале 
игры, или же тебе придётся совершить покупку 
товара. Посоветуйся с Zero об этом.
      </p>
    </Section>
    <div className="flex flex-col gap-6 pt-6">
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
              <td className="border border-slate-600 p-2">БЕСШУМНОЕ</td>
              <td className="border border-slate-600 p-2">Не производит шума.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">БРОНЕБОЙНЫЙ</td>
              <td className="border border-slate-600 p-2">Игнорирует 1 ед. брони противника.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">БРОНЕБОЙНЫЙ +</td>
              <td className="border border-slate-600 p-2">Игнорирует 2 ед. брони противника (необходимо иметь тег Бронебойный).</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ЗАЗУБРЕННОЕ</td>
              <td className="border border-slate-600 p-2">При попадании на 15+ уничтожает у цели 1 ед. брони.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ЗАЗУБРЕННОЕ +</td>
              <td className="border border-slate-600 p-2">При попадании на 15+ уничтожает у цели 2 ед. брони (необходимо иметь тег Зазубренное).</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ИНСТРУМЕНТ</td>
              <td className="border border-slate-600 p-2">Можно использовать как инструмент по назначению.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ИНЪЕКТОР</td>
              <td className="border border-slate-600 p-2">Позволяет использовать шприцы с препаратом как снаряды.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">МАССОВОЕ</td>
              <td className="border border-slate-600 p-2">Наносит урон в небольшом радиусе рядом с целью.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">МЕТАТЕЛЬНОЕ</td>
              <td className="border border-slate-600 p-2">Есть возможность кидать на определённую дистанцию.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">МОЩНОЕ</td>
              <td className="border border-slate-600 p-2">Оружие буквально сбивает противников с ног, а также отлично подходит для уничтожения препятствий.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">МЯСОРУБКА</td>
              <td className="border border-slate-600 p-2">Повреждения могут быть чрезвычайно жестокими.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">НЕЛЕТАЛЬНЫЙ</td>
              <td className="border border-slate-600 p-2">Может не наносить повреждений здоровью.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОПТИКА</td>
              <td className="border border-slate-600 p-2">Оптический прицел для дальней дистанции.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">РАЗБОРНЫЙ</td>
              <td className="border border-slate-600 p-2">Можно разобрать на составные части и собрать снова. В разобранном состоянии привлекает намного меньше внимания.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">РАЗБРОС</td>
              <td className="border border-slate-600 p-2">Позволяет нанести урон нескольким противникам в зоне поражения.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">СКРЫТЫЙ</td>
              <td className="border border-slate-600 p-2">Сложно найти при обыске.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">СМЕННЫЕ</td>
              <td className="border border-slate-600 p-2">СТВОЛЫ Добавь ещё одну дистанцию на свой выбор.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ТОЧНЫЙ</td>
              <td className="border border-slate-600 p-2">+1 на попадание.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ТРАНСФОРМЕР</td>
              <td className="border border-slate-600 p-2">Может складываться, принимая форму совершенно другой вещи.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ШОКЕР</td>
              <td className="border border-slate-600 p-2">При попадании цель теряет сознание или испытывает дезориентацию.</td>
              </tr>

            </tbody>
        </table>
      </Collapsible>
      <Collapsible label="Негативные теги" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <Section heading="ПРИЧИНА НЕГАТИВНЫХ ТЕГОВ" className="mt-4">
          <p>При покупке товара ты можешь получить «не 
совсем то, что хотел». Это означает, что Zero 
может добавить негативные теги на оружие по 
своему усмотрению (в сумме максимум 3).</p>
        </Section>
      <table className="table-auto border-collapse w-full border-spacing-y-4 mt-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Теги</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>              
              <td className="border border-slate-600 p-2">ВОЕННОЕ</td>
              <td className="border border-slate-600 p-2">Армейское вооружение, на которое нужны особые документы.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ГРОМКОЕ</td>
              <td className="border border-slate-600 p-2">Очень громкие выстрелы, которые могут привлечь нежелательное внимание.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ДВУРУЧНОЕ</td>
              <td className="border border-slate-600 p-2">Для использования без штрафов необходимо использовать две руки.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОДНОРАЗОВОЕ</td>
              <td className="border border-slate-600 p-2">После использования необходимо потратить снаряжение для перезарядки.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОТДАЧА</td>
              <td className="border border-slate-600 p-2">−1 на попадание, если стрелок не использует упор или удобную позицию для выстрела.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ТЯЖЁЛОЕ</td>
              <td className="border border-slate-600 p-2">Замедляет передвижение при совершении ловких манёвров.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ХЛАМ</td>
              <td className="border border-slate-600 p-2">На –9 может буквально рассыпаться в руках. Выглядит дёшево и убого.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ЧИПОВАННЫЙ</td>
              <td className="border border-slate-600 p-2">По ID оружия можно определить твоё местоположение.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ЭКСКЛЮЗИВНЫЙ</td>
              <td className="border border-slate-600 p-2">Лимитированное, возможно штучное дорогое изделие, которое явно привлечёт внимание.</td>
              </tr>
            </tbody>
        </table>
      </Collapsible>
    </div>  
  </div>
  
    );
  }
