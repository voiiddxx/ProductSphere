import Image from "next/image";

const Layout = ({children}: {children:React.ReactNode})=>{
    return (
        <div className="h-screen w-full flex justify-center items-center" >


            {/* left div */}
            <div className="w-1/2 h-screen  flex  flex-col justify-start items-center " >
                {/* logo section */}
                <div className="w-full pl-10" >
                    <Image className="h-[80px] w-auto"  src={`/MainLogo.svg`} height={900} width={900} alt="logo" />
                </div>

                {/* small heading */}
                {/* <div className="mt-10 mb-10" >
                    <h1 className="text-xl font-medium" >Innovation Takes Place here</h1>
                    <p className="text-sm font-medium text-zinc-600" >Enter your credential to create</p>
                </div> */}
                {/* auth components */}
                <div className="h-full flex justify-center items-center" >
                {children} 
                </div>

                <div>
                    <p className="text-sm font-medium text-zinc-600 mb-5" >2023 , Productsphere , all rights resevred</p>
                </div>
            </div>
            {/* right div */}
            <div className="w-1/2 h-screen  p-2" >
                <div className="h-full w-full bg-indigo-700 flex justify-center items-center rounded-xl  flex-col" >
                    <div>
                        
                    <h1 className="text-white font-medium text-xl" >Innovate and create cool products</h1>
                    <p className="text-xs font-normal text-white mt-1" >Create your account to start innovation</p>
                    <Image className="h-[600px] w-auto mt-5" src={`/dashboard.svg`} height={1500} width={1500} alt="dashoboard" />
                    </div>

                   


                </div>
            </div>

            
        </div>
    )
}
export default Layout;