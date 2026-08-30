import { type ReactNode } from 'react'

type Props = {
    title : string
    children : ReactNode
}

export default function Card({title,children}: Props) {
  return (
    <div className="p-4 rounded-xl bg-zinc-900 shadow-md">
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <div>{children}</div>
    </div>
  )
}