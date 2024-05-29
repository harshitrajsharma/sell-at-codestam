
import C1 from './C1'
import C2 from './C2'

const outer = () => {
  return (
    <div className=' bg-customBlue text-white px-8 md:px-16 lg:px-16 py-8  flex flex-col gap-6'>
      <div className=' text-center flex flex-col items-center justify-center gap-4 py-12'>
        <h1 className=' text-4xl font-bold'>Sell <span className=' text-[#2462e9]'>Digital Products </span>and Earn</h1>
        <p className=' text-gray-300 w-[50%]'>
          List your digital product for free on codetam store and reach our 10000+ customers.
        </p>
      </div>
      <div>
        <C1 />
      </div>
      <div>
        <C2 />
      </div>
    </div>
  )
}

export default outer
