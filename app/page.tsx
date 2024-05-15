import H0Logo from '@/app/ui/topnavbar/h0-logo';
import Link from 'next/link';
import Section from '@/app/components/section'

export default function Page() {
  return (
    <main>
      <div className='flex w-fit flex-row pt-8 md:px-2 md:space-x-10 text-white'>
        <Link
        className="mb-2 flex h-10 items-center justify-start p-4"
        href="/">
          <H0Logo />
        </Link>
      </div>
      <div className="flex-grow p-2 pb-0 md:overflow-y-auto text-white pt-4">
        <div className="grid grid-cols-4 gap-6 p-2 pb-4">
          <Link href="/archetypes" className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Архетипы</Link>
          <Link href="/moves"      className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Ходы</Link>
          <Link href="/equipment"  className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">Снаряжение</Link>
          <Link href="/zero"       className="text-white text-2xl p-10 text-center bg-slate-900 mt-4 rounded-lg hover:bg-slate-700 hover:text-blue-600">ZER0</Link>
        </div>
        <div className=' bg-slate-950 p-5 rounded-lg text-white'>
          <Section heading='ОБ ИГРЕ'>
              <p>
              <b>Humanity Zero</b> — это настольная ролевая игра 
              в жанре киберпанк. Это мир, в котором человеческая жизнь давно перешла в область легкодоступных ресурсов, корпоративная хватка 
              взяла за горло общественную мораль и денежные 
              активы, а шагнувшие далеко вперёд технологии 
              лишь продолжают развращать человеческое Я. 
              </p>
              <p>
              Игра создана для того, чтобы задавать вопросы, на которые нет правильных ответов, 
              заставлять делать сложные выборы, при этом 
              поднимая остросоциальные проблемы: деградацию морали общества, экзистенциальный кризис, коррумпированность власти, загрязнение 
              окружающей среды, безработицу, кровопролитные войны за крохи ресурсов. В <b>Humanity Zero </b> 
              всё это постепенно доходит до своего апогея.
              </p>
              <p>
              Игроки возьмут на себя роль людей, чьи судьбы 
              переплетаются по тем или иным причинам. Они 
              могут быть наёмниками, работать в органах 
              власти или на корпорацию, служить одной из 
              криминальных семей, но в какой-то момент их 
              жизнь резко меняется. У них не остаётся выбора, кроме как объединиться и действовать 
              сообща, пока они полезны друг другу — лишь 
              до этих пор. Это игра не про героев. Это игра 
              про людей, которые хотят выжить в холодном, 
              мрачном и высокотехнологичном будущем. На 
              пути у них будут стоять не только вооружённые силы корпораций и обезумевшие уличные 
              панки, но и ужасы, что скрывает океан матричной информации, а также их собственные 
              искалеченные души. Им придётся заплатить 
              дорогую цену. Цену куда более весомую, чем 
              человеческая жизнь.
              </p>
              <p>
              Humanity Zero — это игра на основе <b>Powered 
              by the Apocalypse (или хак *W)</b> в жанре киберпанк, поддерживающая все вытекающие темы: 
              нео-нуарный детектив, боевик, трансгуманизм, 
              драму, триллер
              </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
