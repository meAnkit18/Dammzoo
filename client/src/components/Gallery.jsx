import React from 'react'

function Gallery() {
  return (
    <div>
       <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>
        <h1 className="text-2xl md:text-2xl text-center font-medium max-w-1xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">Our Latest Creations</h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
        <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 mx-auto">
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop"
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDKrs9u5I5SAwRvVJbQ_i5lU8wQpNLxYCULblNx4N2h5i_KV1fMadGu23cbq3LDxl5iKa5ASKHE5okqmCsFohZk9LSWS0SF2nuKfeoPi3RlLLlcQxfzY32pyF_7dyQ3IzLjz275b4wsNDRNrlNAfNX_ej_xIy7ZU75p0ru4Rf5kYJ-6VAdxnd5dbMRQOg/s1024/image%20(14).png"
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop"
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop"
                    alt="image" />
            </div>
            <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                <img className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop"
                    alt="image" />
            </div>
            
            
        </div>
    </div>
  )
}

export default Gallery
