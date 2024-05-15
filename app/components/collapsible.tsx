import clsx from 'clsx'
import {LuChevronDown} from 'react-icons/lu'

export interface Props extends React.HTMLProps<HTMLDivElement>{
  label: string,
  openByDefault: boolean, 
  duration: number,
  textSize: string ;
}

const Collapsible: React.FC<Props>  = (props) => {
  const id = `collapsible-${Math.random().toString(36).substring(2, 9)}`
  return (
    <div className={clsx('relative', props.className)}>
      <input type="checkbox" id={id} className="sr-only peer" defaultChecked={props.openByDefault} />
      <label htmlFor={id} className={'cursor-pointer flex items-center group text-'+props.textSize}>
        {props.label}
        <span
          style={{ '--animation-duration': `${props.duration}ms` } as React.CSSProperties}
          className={clsx('ml-auto rounded-sm p-1 outline-none rotate-90 ',
          'peer-checked:group-[]:rotate-0 transition-transform duration-[{var(--animation-duration)}]')}>
          <LuChevronDown />
        </span>
      </label>
      <div
        style={{ '--animation-duration': `${props.duration}ms` } as React.CSSProperties}
        className={clsx(
          'group grid transition-all duration-[var(--animation-duration)] ease-in-out overflow-hidden origin-top transform-gpu',
          'peer-checked:grid-rows-[1fr] peer-checked:scale-100 peer-checked:opacity-100',
          'scale-95 opacity-0 grid-rows-[0fr]'
        )}>
        <div className="min-h-0 transition-all duration-300 ease-in-out peer-checked:group-[]:visible invisible">{props.children}</div>
      </div>
    </div>
  )
}

export default Collapsible