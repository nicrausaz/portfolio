import BasilSettingsAltSolid from "@/assets/BasilSettingsAltSolid";

export default function Switcher() {
  return (
    <div className='fixed top-4 right-4 p-2 bg-slate-500 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full'>
      <a href='#' className='text-white hover:text-slate-400 transition-all duration-300'>
          <BasilSettingsAltSolid width={'2em'} height={'2em'} />
        </a>
    </div>
  )
}
