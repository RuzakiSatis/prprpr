import React, { useEffect, useState } from 'react';
import CanvasAnimation from "../components/Animation_Pixel";
import { Header } from "../components/Header";
import "./Home.scss"
import { Typing_animation } from '../components/Typing_animation';
import { FollowersGame } from '../components/FollowersGame';
import { posts } from '../components/postFollowers';
import {CyberGameHub} from '../components/CyberGameHub';
import { cyber } from '../components/postCyberGameHub';

export const Home = () =>{
    const [chooseNumber, setChooseNumber] = useState(3);
    
    useEffect(() => {

        const windowResize = () => {
            if (window.innerWidth < 1350){
                setChooseNumber(4);
            } 
        };

        window.addEventListener('load', windowResize);

        return () => {
            window.removeEventListener('load', windowResize);
        };
    }, []);
    
    return(
        <section>
            <Header />
            <main className="main">
                <div className="main_hat">
                    <div className="main_hat_title">
                        <p className="main_hat_title_Dev">3D game Dev</p>
                        <h1 className="main_hat_title_big">Thank you for playing <br /> with us</h1>
                        <p className="main_hat_title_text">Welcome to our gaming platform where your
                        gaming dreams <br /> become a reality. Join the largest community of gamers <br />and immerse 
                        yourself in the best games, the latest releases, and <br /> unforgettable adventures. Are 
                        you ready to embark on <br /> your gaming journey? Let{`'`}s make games great together!</p>
                        <button className="main_hat_title_button main_hat_title_btn">Get more details</button>
                    </div>
                    <CanvasAnimation />
                </div>
                <div className='main_TrendingGame'>
                    <div className='main_TrendingGame_ControlsBlock'>
                        <h2 className='main_TrendingGame_ControlsBlock_title'>Currently Trending Game</h2>
                        <button onClick={() => setChooseNumber(chooseNumber === 100 ? (window.innerWidth < 1350 ? 4 : 3) : 100) } className='main_TrendingGame_ControlsBlock_button main_TrendingGame_ControlsBlock_btn'>SEE ALL</button>
                    </div>
                    <div className='main_TrendingGame_listGame'>
                        {posts.slice(0, chooseNumber).map(post => 
                            <section key={post.id}>
                                <FollowersGame image={post.img} Game={post.Game} aboutGame={post.aboutGame} />  
                            </section>
                        )}
                    </div>
                </div>
                <div className='main_mission'>
                    <Typing_animation/>
                    <div className='main_mission_block'>
                        <div className='main_mission_block_about'>
                            <h3 className='main_mission_block_about_title'>Our mission</h3>
                            <p className='main_mission_block_about_text'>We aim not only to create games but to transport you to a cyberpunk future where you 
                                feel the atmosphere of technological progress and emotional tension. Our mission is to reveal 
                                the beauty of this genre, remaining at the forefront of technical game production.
                                The cyberpunk genre is an enthralling realm where the graphic aesthetics of high technology and social 
                                degradation converge to create futuristic masterpieces of art. These games not only entertain but also transport you 
                                to a contemporary metropolis, saturated with dazzling neon lights and reflections of technological advancements. 
                            </p>
                        </div>
                        <iframe 
                            className='main_mission_block_video' width="560" height="315" src="https://www.youtube.com/embed/zBn8Az_ZAqw?si=emUMKo1uGWpSD6T4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className='main_CyberGameHub'>
                    <h4 className='main_CyberGameHub_title'>Cybernetic Scenario: Game Development for Different Platforms</h4>
                    <p className='main_CyberGameHub_text'>
                        Immerse yourself in the cybernetic world of development, where your ideas become reality on 
                        different devices! On our site you will <br />find solutions for mobile, PC and PS4, as well as find 
                        out which gadgets support the best cyberpunk games.
                    </p>
                    {cyber.slice(0, chooseNumber).map(post =>
                        <section key={cyber.id}>
                            <CyberGameHub image ={post.image} game = {post.game}/>
                        </section>
                    )}
                </div>
            </main>
        </section>
    )
}