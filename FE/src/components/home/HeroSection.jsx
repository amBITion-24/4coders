import vid from '../../assets/img/3.mp4';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
    const navigate=useNavigate();
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        pauseOnFocus: true,
      };
      const handleClick=()=>{
        navigate('/proposal')
      }
    return (
        <section {...settings}
        
        className="relative text-white text-center py-20 px-4 overflow-hidden min-h-screen">
            <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 bg-none bg-opacity-50 h-full flex flex-col justify-center items-center">
                <h1
                data-aos='zoom-out'
                data-aos-once='true'
                data-aos-duration='500'
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold animateanimated animatefadeInDown mb-6">Blockchain Based Voting System</h1>
                <p data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='100'
                
                className="my-4 text-lg md:text-xl lg:text-2xl font-semibold animateanimated animatefadeInUp ">A decentralised voting system that is built on ethereum blockchain</p>
                <div className="flex justify-center gap-4 mt-6">
                    {/* <button
                    
                    className="bg-white text-black py-3 px-6 rounded-full transform transition duration-500 hover:bg-gray-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                        Browse on the Web3 Store
                    </button>  */}
                    <button onClick={handleClick} className="bg-white text-black py-3 px-6 rounded-full transform transition duration-500 hover:bg-gray-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white translate-y-5">
                        Enter The Voting System
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;