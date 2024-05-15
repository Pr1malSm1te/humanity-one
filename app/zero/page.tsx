import Link from "next/link";
import Section from "../components/section";

export default function Page() {
    return (
    <div className="w-100">
      <div className=" bg-slate-950 p-5 rounded-lg text-white flex flex-col gap-6">       
        <div className="grid grid-cols-3 gap-6 p-2">
          <Section heading="MOBS">
            <p>
              На странице с мобами будет представлена информация для создания неигровых персонажей и противников при помощи тегов.
            </p>
          </Section>
          <Section heading="GUIDE BOOK">
            <p>
              На странице с книги правли будет представлена общая информация по правилам игры, терминам, ходу игры, а так же советы для ZER0.
            </p>
          </Section>
          <Section heading="QUICK START">
          <p>
            На странице быстрого старта будут представлены несколько завязок для кампаний с необходимыми персонажами ZER0 и противниками.
          </p>
        </Section>
        </div>
      </div>
    </div>
      
    );
  }