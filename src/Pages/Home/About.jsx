import library2 from '../../assets/images/about/library1.jpg';
import library1 from '../../assets/images/about/library2.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 pt-8 pb-16 mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={library1} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={library2} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-orange-400 font-bold'>Shop wide range of collections</h3>
                    <h1 className="text-7xl font-bold">Book festival</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;