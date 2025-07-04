import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';

interface FeedbackPopProps {
  setFeedback: React.Dispatch<React.SetStateAction<boolean>>;
}
const Feedback__pop=({setFeedback}: FeedbackPopProps)=> {
  return (
    <>
    <div className="fb_pop_container"  >
        <div className="btn_closing">
            <button onClick={()=>{setFeedback(false)}}>
            <CloseIcon/>
            </button>
        </div>
        <div className="txt1">
            <h1>Give Feedback</h1>
            <p>Do you Have any thought you would like to share?</p>
            <textarea placeholder='Enter your Thougt...' style={{height:'23vh',border:'1px solid #1e6bad'}} ></textarea>
        </div>
        <div className="rating_txt">
            <h1>How much you will rate this Qoute?<StarIcon style={{color:'#d5d510'}}/></h1>
            <div className="radio">
                <div   className="ration_class" ><input type='radio' value={1}/>1</div>
                <div  className="ration_class"><input type='radio' value={2}/>2</div>
                <div  className="ration_class"><input type='radio' value={3}/>3</div>
                <div  className="ration_class"><input type='radio' value={4}/>4</div>
                <div  className="ration_class"><input type='radio' value={5}/>5</div>
                </div>
        </div>
        <div className=" btns_closing">
            <button className='btn-grad'>Send</button>
            <button className='btn-grad'>Cancel</button>
        </div>
    </div>
    </>
  )
}

export default Feedback__pop