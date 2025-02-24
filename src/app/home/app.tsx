import { useEffect, useRef } from 'react';

const Carousel = () => {
    const nextDom = useRef<HTMLButtonElement | null>(null);
    const prevDom = useRef<HTMLButtonElement | null>(null);
    const carouselDom = useRef<HTMLDivElement | null>(null);
    const sliderDom = useRef<HTMLDivElement | null>(null);
    const thumbnailBorderDom = useRef<HTMLDivElement | null>(null);
    const timeDom = useRef<HTMLDivElement | null>(null);

    const timeRunning = 3000;
    const timeAutoNext = 8000;

    let runTimeOut: ReturnType<typeof setTimeout>;
    let runNextAuto: ReturnType<typeof setTimeout>;

    const showSlider = (type: 'next' | 'prev') => {
        const sliderItemsDom = sliderDom.current?.querySelectorAll('.carousel .list .item');
        const thumbnailItemsDom = thumbnailBorderDom.current?.querySelectorAll('.carousel .thumbnail .item');

        if (sliderItemsDom && thumbnailItemsDom) {
            if (type === 'next') {
                sliderDom.current?.appendChild(sliderItemsDom[0]);
                thumbnailBorderDom.current?.appendChild(thumbnailItemsDom[0]);
                carouselDom.current?.classList.add('next');
            } else {
                sliderDom.current?.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderDom.current?.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.current?.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.current?.classList.remove('next');
                carouselDom.current?.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.current?.click();
            }, timeAutoNext);
        }
    };

    useEffect(() => {
        nextDom.current?.addEventListener('click', () => showSlider('next'));
        prevDom.current?.addEventListener('click', () => showSlider('prev'));

        runNextAuto = setTimeout(() => {
            nextDom.current?.click();
        }, timeAutoNext);

        return () => {
            clearTimeout(runNextAuto);
            clearTimeout(runTimeOut);
        };
    }, []);

    const car = [
        { id: 1, author: "NekoSync", title: "Design", topic: "Outono", desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", name: "Name Slider", des: "Description", img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Winter-2021-10-Best-Anime-Of-The-Season-Ranked-featured-image.jpg" },
        { id: 2, author: "NekoSync2", title: "Design2", topic: "Outono", desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", name: "Name Slider", des: "Description", img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/summer-2023-anime-complete-guide.jpg" },
    ]

    return (
<div className="carousel" ref={carouselDom}>
                <div ref={sliderDom} className="list">
                {car.map((car, index) => (
                    <div key={index} className="item">
                        <img src={car.img} alt="" />
                        <div className="content">
                            <div className="author">{car.author}</div>
                            <div className="title">{car.title}</div>
                            <div className="topic">{car.topic}</div>
                            <div className="des">
                            {car.desc}
                            </div>
                            <div className="buttons">
                                <button className="bg-primary">SEE MORE</button>
                                <button className="border border-inherit">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                <div ref={thumbnailBorderDom} className="thumbnail">
                    {car.map((car, index) => (
                    <div key={index} className="item">
                       <img src={car.img} alt="" />
                        <div className="content">
                            <div className="title">
                                {car.name}
                            </div>
                            <div className="description">
                                {car.des}
                            </div>
                        </div>
                    </div>
                    ))} 
                </div>

                <div className="arrows">
                    <button ref={prevDom} id="prev">{"<"}</button>
                    <button ref={nextDom} id="next">{">"}</button>
                </div>
                <div ref={timeDom} className="time"></div>
            </div>
    );
};

export default Carousel;