
import React from 'react';

export interface Props extends React.HTMLProps<HTMLDivElement>{
  heading: string;
}

const Section: React.FC<Props> = (props) =>  
{

  return (
    <div className={'text-2xl text-wrap text-center flex flex-col items-center gap-4  ' + props.className}>
          <h2>{props.heading}</h2>          
          <article className="text-base bg-slate-800 flex flex-col rounded-lg gap-4 text-left p-2 px-4 mt-2 w-full h-fit">
            {props.children}
          </article>              
    </div>
  );
}

export default Section;