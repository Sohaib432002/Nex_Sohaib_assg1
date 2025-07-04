"use client";
import React from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CommentIcon from '@mui/icons-material/Comment';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { randomInt } from 'node:crypto';
import Feedback__pop from './Feedback__pop';
const Qoutes = [
    {
        name: 'Sohaib',
        Qoute: 'Make a joke on yourself unless or until people will start judging you on that joke',
        bg_img: 'https://i.pinimg.com/736x/f3/2e/1d/f32e1d1153a41cf771f5dfc4fc4909fb.jpg'
    }
    ,
    {
        name: 'Dr. Seuss',
        Qoute: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    }
    ,
    {
        name: 'Mae West',
        Qoute: "You only live once, but if you do it right, once is enough.",
    }
    ,
    {
        name: ' Mahatma Gandhi',
        Qoute: "Be the change that you wish to see in the world.",
    }
    ,
    {
        name: 'Robert Frost',
        Qoute: "In three words I can sum up everything I've learned about life: it goes on.",
    }
    ,
    {
        name: ' J.K. Rowling, Harry Potter and the Goblet of Fire',
        Qoute: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    }
    ,
    {
        name: ' Mark Twain',
        Qoute: "If you tell the truth, you don't have to remember anything",
    }
]
function App_section({Feedback,setFeedback}:any) {
    const [selected, setselected] = useState(0)
    const handle = () => {
        const list = [0, 1, 2, 3, 4, 5, 6]
        const randomIndex = Math.floor(Math.random() * list.length);
        setselected(randomIndex)}
    return (
        <>
            <div className='App_container' id='App'style={Feedback?{filter:'blur(20px) brightness(0.4)'}:{filter:'none'}}  >
              <div className="bg" style={{width:'100%',background:'rgba(0,0,0,0.7)'}}>
              <div className="heading_app"> <h1>APP</h1></div>
                <div className="Q_container">
                    <div className="btn-left">
                        <button onClick={()=>{handle()}} style={{ rotate: ('180deg') }}>{<DoubleArrowIcon className='svg btn-grad' style={{ fontSize: 20 }} />}</button>
                    </div>
                    <div className="container">

                        <div className="App_card" style={{ backgroundImage: `url('q_bg.png')` }} >
                            <p>
                                " {Qoutes[selected].Qoute}"
                            </p>
                            <span style={{ color: 'yellow', fontFamily: 'math', fontSize: 15, fontWeight: 900 }}>
                                ― {Qoutes[selected].name}
                            </span>
                        </div>

                    </div>
                    <div className="btn-right">
                        <button onClick={() => { handle() }}>{<DoubleArrowIcon className='svg btn-grad' style={{ fontSize: 20 }} />}</button>
                    </div>

                </div>
                <div className="btn_feedback">
                    <button onClick={()=>setFeedback(true)} className='btn-grad btn-fb' >
                        Feedback {<FeedbackIcon style={{ margin: 10 }} />}
                    </button>

                </div>
                
            </div>
            </div>
            {
                    Feedback?<Feedback__pop  setFeedback={setFeedback} Feedback={Feedback}/>:null
                }
        </>
    )
}

export default App_section