import React from 'react'

function Card({post,onConnect }) {
  const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

  return (
   <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className=" my-5 w-80 h-96 md:w-180 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg"
        >
            {visible && (
                <div className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                    style={{ top: position.y - 120, left: position.x - 120,}}
                />
            )}

            <div className="relative z-10 bg-gradient-to-r from-[#ebf9ff] to-[#ffeefd] p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
                {/* <img src={post.imgl} alt="Profile Avatar" className="w-44 h-44 rounded-full shadow-md my-4" /> */}
                <img
                    src={post.imgl}
                    alt="Profile Avatar"
                    className="w-44 h-44 rounded-full shadow-md my-4"
                    onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop in case fallback also fails
                        e.target.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWHVaY-wRjLvQDY-FhyphenhyphenPKYH9Gb1Kz9nUz2Bu4zeEpRXDCfjBE7jyANtu_ZOxpzZD6tMoG3H62XDO5IrYZhPqBn3E0nnuD6IRvA6AcdNHHNsN3h_A6FsU0s4D7XSi8NzxIi50CHKrk_p4xVT1K4fgyDhIp1b9RycsVAd7-KrmbzXCzdcA7D2CDf3eocDwQ/s512/profile-user.png'; // Your fallback image path
                    }}
                    />
                <h2 className="text-1xl font-semibold text-gray-800 mb-1">{post.name}</h2>
                <p className="text-sm text-indigo-500 font-medium mb-4">{post.bio}</p>
                {/* <p className="text-sm text-gray-500 mb-4 px-4">
                    {post.nature}
                </p> */}
                <div className="flex space-x-4 mb-4 text-xl text-indigo-600">
                    <button type="button"
                    onClick={() => onConnect(post._id)}
                    className="bg-gradient-to-r from-[#c0e9fb] to-[#fcbff5] text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border hover:bg-gray-50 border-gray-500/30 cursor-pointer"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.665 1.333 7.332 8.667m7.333-7.334L10 14.666l-2.667-6m7.333-7.333L1.332 6l6 2.667" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Connect Now
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Card


