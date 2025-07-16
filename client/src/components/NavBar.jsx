import React from 'react'

function NavBar() {
  return (
    <div>
      <header 
      className="fixed top-1 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/30 backdrop-blur-md shadow-lg rounded-full z-50 px-6 py-3 flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white">
    <a href="https://prebuiltui.com">
        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg" />
    </a>
    <nav id="menu" class="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal">
        <a class="hover:text-indigo-600" href="#">
            Products
        </a>
        <a class="hover:text-indigo-600" href="#">
            Customer Stories
        </a>
        <a class="hover:text-indigo-600" href="#">
            Pricing
        </a>
        <a class="hover:text-indigo-600" href="#">
            Docs
        </a>
        <button id="closeMenu" class="md:hidden text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </nav>
    <div class="flex items-center space-x-4">
        {/* <button class="size-8 flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded-md">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
                    stroke="#353535" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button> */}
        <a class="hidden md:flex  bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-900 transition" href="#">
            Sign up
        </a>
        <button id="openMenu" class="md:hidden text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>
</header>
    </div>
  )
}

export default NavBar
