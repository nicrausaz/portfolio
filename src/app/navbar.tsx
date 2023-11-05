type NavbarProps = {
  links: Array<{
    label: string,
    to: string,
    hidden: boolean,
    active: boolean,
  }>
  onMenuClick: (to: string) => void
}

export default function Navbar({ links, onMenuClick }: NavbarProps) {
  const linkClass = (active: boolean) => {
    return active ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'
  }

  const textClass = (active: boolean) => {
    return active ? 'text-slate-200' : 'text-slate-500'
  }

  return (
    <nav className='flex flex-col justify-center fixed h-screen'>
      <div id='scroll-progress'></div>
      <ul className='w-max'>
        {links &&
          links.map((l) => (
            <li key={l.label}>
              <a className='group flex items-center py-3' href={l.to} onClick={() => onMenuClick(l.to)}>
                <span className={`nav-indicator mr-4 h-px ${linkClass(l.active)} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest ${textClass(l.active)} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
                  {l.label}
                </span>
              </a>
            </li>
          ))}

        {/* <li>
          <a className='group flex items-center py-3' href='#experience'>
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Experience
            </span>
          </a>
        </li>
        <li>
          <a className='group flex items-center py-3 active' href='#projects'>
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Projects
            </span>
          </a>
        </li>
        <li>
          <a className='group flex items-center py-3 active' href='#contact'>
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              Contact
            </span>
          </a>
        </li> */}
      </ul>
    </nav>
  )
}
