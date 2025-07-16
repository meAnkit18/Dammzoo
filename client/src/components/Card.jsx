import React from 'react'

function Card({post,onConnect}) {
    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className="relative w-80 h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
        >
            {visible && (
                <div className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                    style={{ top: position.y - 120, left: position.x - 120,}}
                />
            )}

            <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
                <img src={post.imgl} alt="Profile Avatar" className="w-24 h-24 rounded-full shadow-md my-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{post.name}</h2>
                <p className="text-sm text-indigo-500 font-medium mb-4">Online</p>
                <p className="text-sm text-gray-500 mb-4 px-4">
                    {post.bio}
                </p>
                <div className="flex space-x-4 mb-4 text-xl text-indigo-600">
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
            
            <button type="button" className="w-40 py-3 active:scale-95 transition text-sm text-white rounded-full bg-indigo-500 flex items-center justify-center gap-1"
            onClick={() => onConnect(post._id)}
            >
                <svg className="mt-0.5" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.568 10.304c0 .1-.02.195-.047.285l-4.403-4.735 4.45-3.46zm-13.074.962 4.462-4.754 1.69 1.278 1.618-1.286 4.535 4.762c-.071.016-12.234.016-12.305 0m-.769-.962v-7.91l4.45 3.46-4.403 4.735a1 1 0 0 1-.047-.285m13.349-8.9L8.647 6.35 2.219 1.404zm-.495-.988H2.714A1.98 1.98 0 0 0 .736 2.393v7.91c0 1.093.886 1.978 1.978 1.978h11.865a1.98 1.98 0 0 0 1.978-1.977v-7.91A1.98 1.98 0 0 0 14.579.415" fill="#fff"/>
                </svg>
                <p className="mb-0.5">connect</p>
            </button>
            
        </div>
                </div>
            </div>
        </div>
  )
}

export default Card


