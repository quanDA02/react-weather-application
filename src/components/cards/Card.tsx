import { type ReactNode } from 'react'

type Props = {
    title : string
    children : ReactNode
}

export default function Card({title,children}: Props) {
  return (
    <div className="relative p-4 rounded-xl bg-zinc-900 shadow-md border">
        <h2 className='absolute backdrop-blur-[2px] px-2 text-2xl font-semibold -top-5'>{title}</h2>
        <div>{children}</div>
    </div>
  )
}