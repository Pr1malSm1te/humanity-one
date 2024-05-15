import Link from "next/link";
import Section from "../components/section";

export default function Page() {
    return (
    <div className="w-100">
      <div className=" bg-slate-950 p-5 rounded-lg text-white flex flex-col gap-6">       
        <div className="grid grid-cols-2 gap-6 p-2">
          <Section heading="ОРУЖИЕ">
            <p>
              На странице с оружием будут представлены таблицы для создания экземпляров оружия
            </p>
          </Section>
          <Section heading="АУГМЕНТАЦИИ">
            <p>
              На странице с аугментациями будут представлены таблицы для создания экземпляров агументаций для всех частей тела
            </p>
          </Section>
        </div>
        <Section heading="ОБЩАЯ ИНФОРМАЦИЯ">
          <p>
            У любого оружия и аугментации есть своя стоимость. Если уровень жизни персонажа ниже стоимости то он не может приобрсти данный предмет.
          </p>
        </Section>
      </div>
    </div>
      
    );
  }