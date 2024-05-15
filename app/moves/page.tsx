import Link from "next/link";
import Section from "../components/section";

export default function Page() {  
return (
    <div>
        <div className=" bg-slate-950 p-5 rounded-lg text-white grid grid-cols-3 gap-5">
            <Section heading="О ХОДАХ" className="col-span-3">
                <p>
                    Ходы - это пассивные/активные способности архетипов, а также общие действия.
                    Некоторые ходы требуют проверки характеристики для срабатывания, 
                    при этом исход может быть: 
                </p>
                <ul className="list-disc list-inside">
                    <li>Крайне успешным - у героя получается действие, которое он задумал, в некоторых ходах герой так же получает дополнительные возможности.</li>
                    <li>Успешным - у героя получается действие, которое он задумал, в некоторых ходах герой так же негативные последствия.</li>
                    <li>Неудачным - у героя не получается действие, которое он задумал, а также он сталкивается с негативными последствиями.</li>
                </ul>
            </Section>
            <Section heading="ОБЩИЕ ХОДЫ">
                <p>
                    Общие ходы - ходы доступные всем героям. В эти ходы входят ходы на нанесение урона, поиск информации, покупку аугментаций и т. д.
                </p>
            </Section>
            <Section heading="НАЧАЛЬНЫЕ ХОДЫ">
                <p>
                    Начальные ходы - это уникальные ходы архетипов доступные с создания персонажа.
                </p>
            </Section>
            <Section heading="ХОДЫ ПОВЫШЕННОЙ КВАЛИФИКАЦИИ">
                <p>
                    Ходы повышенной квалификации - это уникальные ходы архетипов доступные с повышением уровня.
                </p>
            </Section>
            <Section heading="ХОДЫ ZER0" className="col-span-3">
                <p>
                    Ходы ZER0 - ходы совершаемые ведущим в ответ на ходы игроков или во время затишься. Эти ходы могут совершаться как отдельными персонажами ведущего, бандами, районами и корпорациями.
                </p>
            </Section>
        </div>
    </div>
    );
}