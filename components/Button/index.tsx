import { MouseEventHandler } from 'react'

export default function Button({ content, className, children, onClick }: { content?: string, className?: string, children?: any, onClick?: any}) {
  return (
    <button onClick={onClick} className={`bg-[#7B61FF] p-3 px-8 pb-[0.4rem] rounded-md ${className}`}>{content}{children}</button>
  )
}
