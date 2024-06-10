import Section from "@/app/components/section";
import Collapsible from "@/app/components/collapsible";
import AugGenerator from "@/app/components/AugGenerator";
import { executeTagsCrudOperations } from "@/app/lib/tags";

export default async function Page() {
    return (
      <div className="bg-slate-950 p-5 rounded-lg text-white">        
    <h1 className="text-6xl flex text-white mb-5">Augmentations</h1>
    <Section heading="СЛУЧАЙНОЕ СОЗДАНИЕ">
      <AugGenerator 
      postags={JSON.parse(JSON.stringify(await executeTagsCrudOperations(1)))}
      negtags={JSON.parse(JSON.stringify(await executeTagsCrudOperations(2)))}
      ></AugGenerator>
    </Section>
    <Section heading="ПРАВИЛА СОЗДАНИЯ" className="mt-4">
      <p> 
        подавляющем большинстве произведений в жанре киберпанк люди пользуются достижениями 
        имплантологии и робототехники, улучшая своё 
        тело с помощью железа. Данный генератор поможет вам создать собственную уникальную аугментику, которую вы хотите видеть у вашего 
        персонажа.
      </p>
      <ul className="list-disc list-inside">
        <li>Выбери часть тела, которую хочешь аугментировать: голова, торс, руки или ноги. Изначальная стоимость аугментации равна 0. </li>
        <li>При добавлении тегов (максимум 3) её стоимость будет увеличиваться на единицу. </li>
        <li>Обязательно круто назови аугментацию и скажи, какая корпорация производит её. </li>
      </ul>
      <p>
        Аугментика может появиться у тебя в самом 
        начале игры, или же тебе придётся совершить 
        покупку товара. Обсудите это с Zero.
      </p>
    </Section>
    <div className="flex flex-col gap-6 pt-6">
      <Collapsible label="Голова" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <div className="p-5 rounded-lg mt-5">
          <table className="table-auto border-collapse w-full border-spacing-y-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Теги</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td className="border border-slate-600 p-2">FIREWALL</td>
              <td className="border border-slate-600 p-2">При аугментации кибермозга даёт +1 firewall.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">HACK</td>
              <td className="border border-slate-600 p-2">При аугментации кибермозга появляется возможность хакинга.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">TURBO</td>
              <td className="border border-slate-600 p-2">При аугментации кибермозга позволяет быстрее производить взлом.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">БАЗА ДАННЫХ</td>
              <td className="border border-slate-600 p-2">В кибермозг встроен блок базы данных, который может вмещать в себя огромные объёмы информации.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">ВИЗОР</td>
              <td className="border border-slate-600 p-2">При аугментации глаз даёт на выбор один из визоров: инфракрасный, ночной, датчик движения, ультрафиолетовый и т.д. Тег можно брать несколько раз.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">ЗАПИСЬ</td>
              <td className="border border-slate-600 p-2">При аугментации глаз даёт возможность записывать происходящее.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">ЗУМ</td>
              <td className="border border-slate-600 p-2">При аугментации глаз позволяет использовать трёхкратное увеличение зрения.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">ИНЪЕКТОР</td>
              <td className="border border-slate-600 p-2">При аугментации челюсти позволяет впрыскивать необходимый препарат через зубы.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">РЕТРАНСЛЯТОР</td>
              <td className="border border-slate-600 p-2">При аугментации кибермозга позволяет ретранслировать информацию на большое расстояние.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">СКРЫТОЕ</td>
              <td className="border border-slate-600 p-2">Аугментику сложно обнаружить без специальных датчиков и сканеров.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">СТИЛЬ +</td>
              <td className="border border-slate-600 p-2">При аугментации лица добавляет +1 к характеристике Стиль (до максимума в 4).</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">ХАМЕЛЕОН</td>
              <td className="border border-slate-600 p-2">При аугментации кожи лица позволяет изменять внешность. На это требуется определённое время.</td>
            </tr>
            <tr>
              <td className="border border-slate-600 p-2">ЭМПАТИЯ +</td>
              <td className="border border-slate-600 p-2">При аугментации глаз добавляет +1 к характеристике Эмпатия (до максимума в 4).</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      <Collapsible label="Торс" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
      <div className="p-5 rounded-lg mt-5">
          <table className="table-auto border-collapse w-full border-spacing-y-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Теги</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className="border border-slate-600 p-2">БРОНИРОВАННЫЙ </td>
              <td className="border border-slate-600 p-2">При аугментации торса добавляет +1 к броне.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ИММУНИТЕТ</td>
              <td className="border border-slate-600 p-2">При аугментации торса позволяет выработать иммунитет к любому виду яда, наркотика и т.д. Тег можно брать несколько раз.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ИНЪЕКТОР</td>
              <td className="border border-slate-600 p-2">При аугментации торса позволяет моментально впрыскивать необходимый препарат в тело.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">МАНИПУЛЯТОРЫ</td>
              <td className="border border-slate-600 p-2">При аугментации торса позволяет встроить дополнительные манипуляторы, такие как руки, щупальца и т.д.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОПТОКАМУФЛЯЖ </td>
              <td className="border border-slate-600 p-2">При аугментации торса позволяет владельцу становиться практически невидимым.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОРГАНИЗМ + </td>
              <td className="border border-slate-600 p-2">При аугментации торса добавляет +1 к характеристике Организм (до максимума в 4).</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ПОЛЁТ</td>
              <td className="border border-slate-600 p-2">При аугментации лопаток позволяет пользоваться как крыльями.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">СКРЫТОЕ</td>
              <td className="border border-slate-600 p-2">Аугментику сложно обнаружить без специальных датчиков и сканеров.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ТРАНСФОРМЕР</td>
              <td className="border border-slate-600 p-2">Возможность трансформировать имплант в рабочее состояние и обратно.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
      <Collapsible label="Руки" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
      <div className="p-5 rounded-lg mt-5">
      <table className="table-auto border-collapse w-full border-spacing-y-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Теги</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className="border border-slate-600 p-2">ИНСТРУМЕНТ </td>
              <td className="border border-slate-600 p-2">При аугментации рук можно использовать как инструмент по назначению. Опиши, что  это за инструмент.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">МУСКУЛЫ + </td>
              <td className="border border-slate-600 p-2">При аугментации обеих рук добавляет +1 к характеристике Мускулы (до максимума в 4).</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОРУЖИЕ </td>
              <td className="border border-slate-600 p-2">При аугментации рук есть возможность вставить любое оружие. Оно покупается отдельно.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">СКРЫТОЕ </td>
              <td className="border border-slate-600 p-2">Аугментику сложно обнаружить без специальных датчиков и сканеров.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ТРАНСФОРМЕР </td>
              <td className="border border-slate-600 p-2">Возможность трансформировать имплант в рабочее состояние и обратно.</td>
              </tr>
            </tbody>
        </table>
        </div>
      </Collapsible>
      <Collapsible label="Ноги" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
      <div className="p-5 rounded-lg mt-5">
      <table className="table-auto border-collapse w-full border-spacing-y-4">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Теги</th>
                <th className="border border-slate-600 p-2">Значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className="border border-slate-600 p-2">АМОРТИЗАТОР </td>
              <td className="border border-slate-600 p-2">При аугментации обеих ног позволяет совершать прыжки на 15 метров и приземляться  без повреждений.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">МАГНИТНОЕ </td>
              <td className="border border-slate-600 p-2">При аугментации обеих ног позволяет бегать по стенам.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОРУЖИЕ </td>
              <td className="border border-slate-600 p-2">При аугментации ног есть возможность вставить любое оружие. Оно покупается отдельно.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">РЕФЛЕКСЫ + </td>
              <td className="border border-slate-600 p-2">При аугментации обеих ног добавляет +1 к характеристике Рефлексы (до максимума в 4).</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">СКРЫТОЕ </td>
              <td className="border border-slate-600 p-2">Аугментику сложно обнаружить без специальных датчиков и сканеров</td>
              </tr>
            </tbody>
        </table>
        </div>
      </Collapsible>
      <Collapsible label="Негативные теги" openByDefault={false} duration={300} textSize="2xl" className="bg-slate-900 rounded-lg p-5 text-white">
        <Section heading="ПРИЧИНА НЕГАТИВНЫХ ТЕГОВ" className="mt-4">
          <p>При покупке товара ты можешь получить «не 
совсем то, что хотел». Это означает, что 
Zero может добавить негативные теги на твою 
аугментику по своему усмотрению (в сумме 
максимум 3).</p>
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
              <td className="border border-slate-600 p-2">ВОЕННОЕ </td>
              <td className="border border-slate-600 p-2">Военная разработка, на которую нужны специальные документы.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ГРОМКОЕ </td>
              <td className="border border-slate-600 p-2">Может привлечь нежелательное внимание.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ЗАМЫКАНИЕ </td>
              <td className="border border-slate-600 p-2">Может замкнуть при использовании в критичных ситуациях.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ОТТОРГАЕМЫЙ </td>
              <td className="border border-slate-600 p-2">При получении стресса может начаться отторжение организмом.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ТЯЖЁЛОЕ </td>
              <td className="border border-slate-600 p-2">Замедляет передвижение при совершении ловких маневров.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ХЛАМ </td>
              <td className="border border-slate-600 p-2">Выглядит дёшево и убого, может сломаться в критичных ситуациях.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ЧИПОВАННЫЙ </td>
              <td className="border border-slate-600 p-2">По ID аугментики можно определить твоё местоположение.</td>
              </tr>
              <tr>
              <td className="border border-slate-600 p-2">ЭКСКЛЮЗИВНЫЙ </td>
              <td className="border border-slate-600 p-2">Лимитированное, возможно штучное дорогое изделие, которое явно привлечёт внимание</td>
              </tr>
            </tbody>
        </table>
      </Collapsible>
    </div>  
  </div>
  
    );
  }
