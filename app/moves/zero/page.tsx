import Collapsible from "@/app/components/collapsible";
import Section from "@/app/components/section";
import { LiaGreaterThanEqualSolid, LiaLessThanEqualSolid } from "react-icons/lia";

export default function Page() {  
return (
  <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">ZER0</h1>
    <div className="flex flex-col gap-6">
      <Collapsible label="ZER0 : Принципы" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-cols-4 gap-5 mt-5">
          <Section heading="КОГДА ДЕЙСТВОВАТЬ">
            <p>Ты должен совершать ходы, когда:</p>
            <ul className="list-disc list-inside">
            <li>Наступило долгое затишье;</li>
            <li>Персонаж провалил бросок;</li>
            <li>Игрок дал тебе для этого возможность;</li>
            <li>Когда это интересно для вашей истории</li>
            </ul>
          </Section>
          <Section heading="КОНФЛИКТЫ И ИНТРИГИ">
          <p>Обостряй конфликты и интриги или создавай новые.</p>
<p>Открой неприятную правду:</p>
            <ul className="list-disc list-inside">
  <li>Cоюзник окажется врагом;</li>
  <li>У противника есть запасной план;</li>
  <li>Их привели в ловушку;</li>
</ul>

<p>Покажи приближающуюся опасность:</p>
            <ul className="list-disc list-inside">
<li>«Интерфейс идёт глитчами, тебя взламывают!»</li>
<li>«Тебя выхватывают лазерные прицелы, что ты делаешь?»</li>
<li>«В ховеркар попадает ЭМП выстрел. Вся электроника отключается, а машина начинает резко снижаться. Что вы делаете?»</li>
</ul>
          </Section>
          <Section heading="МИР ДВИЖЕТСЯ">
          <p>Покажи, как их действия отражаются на мегаполисе:</p>
            <ul className="list-disc list-inside">
<li>По новостям передают, что районы нижнего города тонут в массовых беспорядках;</li>
<li>Район закрывают на карантин;</li>
<li>В городе вводят военное положение;</li>
</ul>
<p>Что-то произошло, пока их не было:</p>
            <ul className="list-disc list-inside">
<li>«В офисе никого не осталось в живых».</li>
<li>«Преступник совершил самоубийство».</li>
<li>«Ты можешь поклясться, что вчера тут была подпольная клиника!».</li>
</ul>
          </Section>
          <Section heading="У ВСЕГО ЕСТЬ ЦЕНА">
          <p>Причиняй вред их близким из-за их действий:</p>
            <ul className="list-disc list-inside">
<li>«Твоего друга избили до полусмерти, пытаясь выяснить, где ты».</li>
<li>«Магазин твоего знакомого спалили дочиста».</li>
<li>«Твою дочь похитили неизвестные».</li>
</ul>
<p>Предложи возможность и назначь цену:</p>
            <ul className="list-disc list-inside">
<li>«Ты сможешь это взломать, но твой кибермозг перегреется».</li>
<li>«Ты можешь попытаться попасть выстрелом, но это твой последний патрон».</li>
<li>«Можешь попробовать уговорить его, но одно неверное слово — и тебя арестуют».</li>
</ul>
<p>Опиши последствия и предложи выбор:</p>
            <ul className="list-disc list-inside">
<li>«Теперь тебе необходимо либо сообщить в дирекцию о несостоявшейся сделке, либо решить вопрос насильственным методом».</li>
<li>«Тебя отбрасывает на край балкона, ремень автомата соскальзывает у тебя с плеча. Придётся распрощаться с оружием, либо сорваться вниз вместе с ним».</li>
<li>«Тебя засёк охранный антивирус и включил тревогу. Либо ретируйся сейчас, либо попробуй что-то успеть до прихода охраны».</li>
</ul>
          </Section>
        </div>
    </Collapsible>
    <Collapsible label="ZER0 : Ходы NPC" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg grid grid-rows-3 gap-5 mt-5">
          <Collapsible label="ГРУППИРОВКИ" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-800 rounded-lg p-5 text-white">
            <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
              <Section heading="ЗАДАЧИ">
              <ul className="list-disc list-inside">
              <li>Увеличение зоны влияния;</li>
              <li>Наращивание сил;</li>
              <li>Доминация в своей сфере;</li>
              <li>Продвижение своих интересов;</li>
              <li>Следование принципам;</li>
              <li>Террор</li>
</ul>
              </Section>
              <Section heading="ХОДЫ">
              <ul className="list-disc list-inside">
              <li>Внезапное и жестокое нападение;</li>
              <li>Защита интересов ценой жизни;</li>
              <li>Агрессивная пропаганда;</li>
              <li>Захват кого или чего-либо;</li>
              <li>Захват интересующей территории;</li>
              <li>Угрожать разоблачением или уничтожением</li>
              <li>собственности;</li>
              <li>Взять под защиту/крышу;</li>
              <li>Выдвинуть требования</li>
</ul>
              </Section>
              <Section heading="СИТУАТИВНЫЕ ХОДЫ">
              <ul className="list-disc list-inside">
              <li>Искать корпоративного покровительства;</li>
              <li>Устроить дерзкий и безумный перфоманс;</li>
              <li>Провозгласить независимость подконтрольных дистриктов;</li>
              <li>Объединение в крупный альянс с другими группировками;</li>
              <li>Навязывание собственного образа жизни.</li>
</ul>
              </Section>
            </div>
          </Collapsible>
          <Collapsible label="КОРПОРАЦИИ" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-800 rounded-lg p-5 text-white">
            <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
              <Section heading="ЗАДАЧИ">
              <ul className="list-disc list-inside">
              <li>Единоличный контроль рынка в своей сфере;</li>
              <li>Вербовка талантливых специалистов;</li>
              <li>Максимизация прибыли, минимизация расходов;</li>
              <li>Отрицание ответственности и подавление несогласия;</li>
              <li>Эксплуатация технологий и человеческих ресурсов;</li>
              <li>Сокрытие истины под слоем постправды.</li>
</ul>
              </Section>
              <Section heading="ХОДЫ">
              <ul className="list-disc list-inside">
              <li>Отправить предупреждение;</li>
              <li>Вербовка новых сотрудников;</li>
              <li>Ликвидировать проблему;</li>
              <li>Воспользоваться связями и коррупцией;</li>
              <li>Развернуть корпоративные технологии или человеческие ресурсы;</li>
              <li>Шпионаж за конкурентами и уничтожение слабых игроков;</li>
              <li>Поглощение малого и среднего бизнесов;</li>
              <li>Подрыв репутации чужого бренда;</li>
              <li>Создание частной армии;</li>
              <li>Запуск новой продукции.</li>
</ul>
              </Section>
              <Section heading="СИТУАТИВНЫЕ ХОДЫ">                
              <ul className="list-disc list-inside">
              <li>Тестирование разработок на улицах;</li>
              <li>Создание монополии;</li>
              <li>Манипуляция рынком;</li>
              <li>Слежка за клиентами и сотрудниками;</li>
              <li>Спланированная катастрофа.</li>
</ul>
              </Section>
            </div>
          </Collapsible>
          <Collapsible label="ВИРУСЫ И ЭНГРАММЫ" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-800 rounded-lg p-5 text-white">
          <div className="p-5 rounded-lg grid grid-cols-3 gap-5 mt-5">
              <Section heading="АЛГОРИТМЫ">
              <ul className="list-disc list-inside">
              <li>Контроль;</li>
              <li>Ликвидация;</li>
              <li>Блокировка;</li>
              <li>Шпионаж;</li>
              <li>Отслеживание;</li>
              <li>Саботаж систем.</li>
</ul>
              </Section>
              <Section heading="ХОДЫ">
              <ul className="list-disc list-inside">
              <li>Создать или подвинуть счётчик ассимиляции систем;</li>
              <li>Заражение других интегрируемых систем;</li>
              <li>Остановка/диверсия важных процессов;</li>
              <li>Мимикрическое поведение;</li>
              <li>Скачивание важных данных;</li>
              <li>Вывод большой суммы средств;</li>
              <li>Информационная атака;</li>
              <li>Пробитие бреши в защите;</li>
              <li>Перегрев аппаратуры.</li>
</ul>
              </Section>
              <Section heading="СИТУАТИВНЫЕ ХОДЫ">               
              <ul className="list-disc list-inside">
              <li>Создать или подвинуть счётчик ассимиляции личности;</li>
              <li>Запуск самоликвидации носителя;</li>
              <li>Атака нервной системы;</li>
              <li>Поиск новых носителей;</li>
              <li>Подмена данных.</li>
</ul>
              </Section>
            </div>
          </Collapsible>
        </div>
    </Collapsible>
    </div>  
  </div>
  );
}