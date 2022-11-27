import React, {SVGProps} from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement> ) => JSX.Element
    title: string
}

function SideBarRow({Icon, title}:Props) {
  return (
    <div className='  flex max-w-fit items-center space-x-4 px-4 py-3 cursor-pointer rounded-full hover:bg-gray-100 transition-all duration-200 group'>
        <Icon className=' h-6 w-6'/>
        <p className=' group-hover:text-twt hidden md:inline-flex text-base lg:text-lg'>{title}</p>
    </div>
  )
}

export default SideBarRow