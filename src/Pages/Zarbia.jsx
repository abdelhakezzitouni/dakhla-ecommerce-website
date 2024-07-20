import React, { useEffect, useRef } from 'react'
import { ZarbiaData } from '../Assets/Data/Data'
import { Link } from 'react-router-dom'




function Zarbia() {
  
  const funMap = (item) => {
    return (
        <Link to={`/zarbia/${item.slug}`}>
            <div key={item.id} className='w-full bg-transparent cursor-pointer rounded-xl flex flex-col items-center shadow-md hover:shadow-2xl duration-300 relative'>
                <img src={item.img} className=' w-36 rotate-90 object-cover' />
                <div className='bg-[#2B2D42] w-full text-white h-20 rounded-b-xl flex justify-between items-center px-8'>
                    <div>
                    <h1 className='font-bold text-xl'>{item.price}<span>Dhs</span></h1>
                    <h1>{item.title}</h1>
                    </div>
                    <div className='bg-white size-9 rounded-full grid place-items-center'>
                        <svg className='size-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2B2D42"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                    </div>
                </div>
                <svg className='size-7 absolute top-4 right-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
            </div>
        </Link>
    );
}

    const toTopRef = useRef(null);
    useEffect(()=>{
        window.scroll(0,0)
    },[])

  return (
    <>
    <span ref={toTopRef}></span>
    <div className='grid lg:grid-cols-lg grid-cols-sm sm:grid-cols-md justify-center  gap-8  mt-12'>
        {ZarbiaData.map(funMap)}
    </div>
    </>
  )
}

export default Zarbia