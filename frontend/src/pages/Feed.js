import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Pedro Fellipe</span>
                            <span className="place">Anapolis</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3334/files/caio3.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like" />
                            <img src={comment} alt="Comment" />
                            <img src={send} alt="send" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Pescaria top!
                            <span> #naruto</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Pedro Fellipe</span>
                            <span className="place">Anapolis</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3334/files/caio3.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like" />
                            <img src={comment} alt="Comment" />
                            <img src={send} alt="send" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Pescaria top!
                            <span> #naruto</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;