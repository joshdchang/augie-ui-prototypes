export const CenterContent = ({ children }) => (
  <div className='grid justify-items-center'>
    {children}
  </div>
)
export const MainCard = ({ children }) => (
  <div className='bg-slate-800 w-full max-w-lg rounded-2xl p-11 grid gap-7 text-center'>
    {children}
  </div>
)
export const CardHeader = ({ children }) => (
  <h2 className='text-2xl font-semibold z-10'>
    {children}
  </h2>
)
export const CardDivider = ({ children }) => (
  <div className='text-lg text-slate-300 bg-slate-300 text-center border-b-[1px] border-b-slate-300 leading-[1px] my-4'>
    <span className='bg-slate-800 p-4'>
      {children}
    </span>
  </div>
)