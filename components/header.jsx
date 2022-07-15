import Image from 'next/image';

export default function Header() {
  return (
    <div className="relative">
      <div className="h-3 bg-[#FFC18E]"></div>
      <div className="h-3 bg-[#CA4E79]"></div>
      <div className="h-3 bg-[#7A4069] w-[calc(100%-14rem)] rounded-[0_0_1rem_0]"></div>
      <div className="h-3 bg-[#513252] w-[calc(100%-16rem)] rounded-[0_0_1rem_0]"></div>
      <img src="/augie-logo.svg" className="absolute right-24 w-32 top-8" />
    </div>
  )
}