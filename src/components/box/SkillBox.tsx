import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string,
    imageUrl: string,
    className?: string
}

const SkillBox = ({title, imageUrl, className}: Props) => {
  return (
    <div
      className={clsx(
        "w-full aspect-square border relative p-2 rounded-md shadow-md overflow-hidden",
        className
      )}
    >
      <p className='z-50 relative'>

      {title}
      </p>
      {/* <div className='-rotate-6'> */}

      <Image src={imageUrl} className='absolute -bottom-7 -right-3 rotate-6' width={1000} height={0} alt={title} />
      {/* </div> */}
    </div>
  );
}

export default SkillBox