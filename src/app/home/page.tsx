import { Header } from "@/components/Header";

export default function Page(){

    const img1 = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Winter-2021-10-Best-Anime-Of-The-Season-Ranked-featured-image.jpg"

    return (
        <div className="bg-base-100">
            <Header />
            <div className="w-screen h-screen overflow-hidden relative">
                <div>

                    <div className="absolute mt-0 ml-0 mb-0 mr-0">
                        <img src={img1} alt="Imagem 1" className="w-screen h-full object-cover" />
                        <div className="absolute top-1/4 w-[1140px] left-[40%] -translate-x-1/2 pr-[30%] box-border text-white">
                            <div className="font-bold tracking-[10px]">NEKOSYNC</div>
                            <div className="font-bold text-7xl">SLIDER</div>
                            <div className="font-bold text-7xl text-primary">ANIMAL</div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Tempore unde nisi optio, vitae impedit dolore nostrum dicta 
                                necessitatibus ducimus dignissimos, porro atque error. 
                                Dignissimos aperiam facere veritatis, obcaecati delectus repudiandae.
                            </div>
                            <div className="grid grid-cols-2 grid-rows-[40px] gap-[5px] mt-5">
                                <button className="bg-primary">SEE MORE</button>
                                <button className="border border-primary">SUBSCRIBE</button>
                            </div>
                        </div>

                    </div>
                    
                    <div className="absolute bottom-12 left-1/2 w-max flex gap-5">

                        <div className="w-[150px] h-56 shrink-0 relative">
                            <img src={img1} alt="" className="w-full h-full object-cover rounded-3xl" />
                            <div className="absolute bottom-2 left-2 right-2">
                                <div className="font-bold">
                                    Name Slider
                                </div>
                                <div>
                                    Description
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="absolute top-[80%] right-[52%] w-[450px] max-w-[30%] flex gap-3 items-center">
                        <button className="w-10 h-10 bg-base-100 rounded-[50%] font-bold duration-[.5s] hover:bg-white hover:text-black">{'<'}</button>
                        <button className="w-10 h-10 bg-base-100 rounded-[50%] font-bold duration-[.5s] hover:bg-white hover:text-black">{'>'}</button>
                    </div>

                </div>
            </div>

            

        </div>
    )
}