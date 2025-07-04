interface FeedbackPopProps {
  Feedback: boolean;
}
const Header=({Feedback}:FeedbackPopProps)=>{
    return(
        <>
        <header style={Feedback?{filter:'blur(20px) brightness(0.4)'}:{filter:'none'}} className="header_container">
          <div className="header">

            <div className="heading">
              <h3 style={{color:'gray'}}>Welcome! <br /></h3>
              <h5>Qoute Genrator App</h5>
              <div className="header_btn_container">
                <div id='#' className="header_button ">
                  <a href="#App" style={{textDecoration:'none',color:'white'}}><button id="#App" className="btn-grad" style={{border:'none'}}> Explore App</button></a>
                </div>
              </div>
            </div>
            <div className="header_imgs">

            </div>
          </div>
        </header>
        </>
    )
}

export default Header