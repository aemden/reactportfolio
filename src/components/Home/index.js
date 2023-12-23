import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','A', 'i', 'd', 'a', 'n']
    const schoolArray = ['C','S',' ','S','t','u','d','e','n','t',' ','G','e','o','r','g','e',' ','M','a','s','o','n',' ','U','n','i','v','e','r','i','s','t','y']

    useEffect(() => {
        return setLetterClass(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>
               
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={schoolArray}
                idx={22}/>
                </h1>
                <h2>Seeking Internship</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    );


}

export default Home