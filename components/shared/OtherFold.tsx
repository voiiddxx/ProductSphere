import { Box, Dices, Dot, Hash, Pyramid, Rabbit, Zap } from 'lucide-react'
import React from 'react'

const OtherFold = () => {
    const val = <Dot/>

    const userCases = [
        {
            icon:<Pyramid size={22} color='white' strokeWidth={1.5} />,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
        {
            icon:<Rabbit size={22} color='white' strokeWidth={1.5} />,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
        {
            icon:<Box size={22} color='white' strokeWidth={1.5} />,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
        {
            icon:<Zap size={22} color='white' strokeWidth={1.5} />,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
        {
            icon:<Dices size={22} color='white' strokeWidth={1.5} /> ,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
        {
            icon: <Hash size={22} color='white' strokeWidth={1.5} /> ,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
        {
            icon: <Hash size={22} color='white' strokeWidth={1.5} /> ,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
        {
            icon: <Hash size={22} color='white' strokeWidth={1.5} /> ,
            heading:'Learn Topic Complexity',
            desc:"Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral."
        },
    ]
  return (
    <div className='min-h-screen w-full flex flex-col py-10 items-center' >
      {/* upper div */}
      <div className=' flex flex-col items-center mt-12' >
        <h1 className='text-3xl font-medium text-zinc-900' >Real-world use-cases</h1>
        <p className='text-zinc-500 font-medium text-center mt-2' >Take a look at some of the ways you can use Afforai to your advantage, <br /> based on some real feedback from our users.</p>

        {/* mapping the data and the icons */}
        <div className=' flex gap-8 flex-wrap items-center justify-center px-10 mt-16' >
            {
                userCases.map((curr:any)=>{
                    return <div className='h-52 w-80  px-3 py-3' >
                        <div className='h-12 w-12 bg-gradient-to-b from-indigo-700 to-indigo-400 rounded-md flex items-center justify-center' >
                            {curr.icon}
                        </div>
                        <div>
                            <h1 className='text-lg font-medium mt-3' >{curr.heading}</h1>
                            <p className='text-sm font-medium text-zinc-500 mt-2' >{curr.desc}</p>
                        </div>
                    </div>
                })
                
            }
        </div>

      </div>
      {/* upper div end */}
    </div>
  )
}

export default OtherFold