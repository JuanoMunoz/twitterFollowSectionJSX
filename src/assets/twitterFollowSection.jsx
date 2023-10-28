import { Children } from "react";
import {useState} from "react"

export function TwitterFollowSection({ children, user, initialIsFollowing }) {
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing);
    const textFollow = isFollowing ? 'Siguiendo' : 'seguir';
    console.log(isFollowing,setIsFollowing);
    return (
        <article className='bg-[#16181C] font-sans w-96 h-16 cursor-pointer hover:bg-gray-800 flex gap-4 justify-between px-2.5 py-4 items-center '>
            <header className="flex gap-3">
                <img src={`https://unavatar.io/${user}`} className="  rounded-full w-10 h-10 " alt={`Foto de ${name}`} />
                <div className="flex flex-col">
                    <strong className="font-semibold col-start-2 text-white hover:underline  text-start">{children}</strong>
                    <span className=" self-start text-gray-400 col-start-2">{`@${user}`}</span>
                </div>
            </header>
            <aside>
                <button onClick={() =>{setIsFollowing(!isFollowing)}} className="rounded-full  bg-white font-semibold hover:underline
             px-4 py-1 text">{textFollow}</button>
            </aside>
        </article>)
}