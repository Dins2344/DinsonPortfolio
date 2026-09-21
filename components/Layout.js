//fonts
import { Sora } from 'next/font/google'

// font setting

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight:['100','200','300','400','500','600','700','800']
})

//components

import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'
import usePointerGlow from './usePointerGlow'

const Layout = ({children}) => {
  usePointerGlow()
  return (
  <div className={`page bg-site text-white bg-no-repeat bg-cover ${sora.variable} font-sora relative` }>
      {/* ambient colour for the glass to refract; transform-only, paused under reduced motion */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-[#4b3792] opacity-40 blur-3xl will-change-transform motion-safe:animate-drift" />
        <div className="absolute top-[30%] -right-[15%] w-[40vw] h-[40vw] rounded-full bg-accent opacity-20 blur-3xl will-change-transform motion-safe:animate-drift-slow" />
        <div className="absolute -bottom-[20%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-[#e68e2e] opacity-20 blur-3xl will-change-transform motion-safe:animate-drift" />
      </div>
      <Nav />
      <Header />
      <TopLeftImg />
      {children}
  </div>
  )
};

export default Layout;
