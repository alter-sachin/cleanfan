import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Button from "react-bootstrap/Button"

class ChatBot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "https://buildar.in/vid/1615800618.4738576.mp4",
            isHeadClicked: false,
            transitionClass: ''
        }
        this.changeToSofa = this.changeToSofa.bind(this)
        this.changeToLeather= this.changeToLeather.bind(this)
        this.changeToCarpet= this.changeToCarpet.bind(this)
        this.changeToHouse= this.changeToHouse.bind(this)
        this.changeToKitchen= this.changeToKitchen.bind(this)
        this.changeToBathroom= this.changeToBathroom.bind(this)
        this.changeToFullHouse= this.changeToFullHouse.bind(this)
        this.showBot = this.showBot.bind(this)
    }

    changeToSofa() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToLeather() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToCarpet() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToHouse() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToKitchen() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToBathroom() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToFullHouse() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-email").style.display = "block"
        this.setState({
            url: "https://buildar.in/vid/1615801043.2547426.mp4"
        })
    }
   

    showBot() {
        if (this.state.transitionClass === '') {
            document.getElementById("chathead").style.display = "none"
            this.setState({
                transitionClass: 'animate',
                isHeadClicked: !this.state.isHeadClicked
            })
        }
        else {
            this.setState({
                transitionClass: '',
                isHeadClicked: !this.state.isHeadClicked
            })
        }
    }

    render() {
        const { url, isHeadClicked } = this.state
        return (
            <div id="main">
                <div id="chat-bot" className={this.state.transitionClass}>
                    
                    <ReactPlayer
                        id="video-bot"
                        className="videoInsert"
                        playing={isHeadClicked}
                        controlsList="nodownload"
                        width="320px"
                        // height="180px"
                        // onContextMenu={(e) => e.preventDefault()}
                        /* style={{width: "160px",height:"90px"}}*/
                        url={url}
                    />
                    
                    
                    <div className="overlay" >
                        <div id="overlay-intro">
                        <button className="btn btn-primary2" onClick={this.changeToSofa}>Sofa</button>
                             <button className="btn btn-primary2" onClick={this.changeToLeather}>Leather Sofa</button>
                            <button className="btn btn-primary2" onClick={this.changeToCarpet}>Carpet</button>
                             <button className="btn btn-primary2" onClick={this.changeToHouse}>House Cleaning</button>
                              <button className="btn btn-primary2" onClick={this.changeToKitchen}>Kitchen</button>
                               <button className="btn btn-primary2" onClick={this.changeToBathroom}>Bathroom</button>
                                <button className="btn btn-primary2" onClick={this.changeToFullHouse}>FullHouse</button>
                        </div>
                        <div id="overlay-SODA">
                            <a type="button" className="btn btn-primary2 " href="#">Fake News</a>
                            <a type="button" className="btn btn-primary2 " href="#">Meditation</a>
                            <a type="button" className="btn btn-primary2" href="#">Selling Twitch</a>
                        </div>
                        <div id="overlay-email">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div id="overlay-twitter">
                            <button type="button" className="btn" href="#twitter">
                                <p>Here's my Twitter  </p>
                                <i className="fa fa-twitter fa-10x" aria-hidden="true">  </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="chathead" className="chatbot-head">
                
                    <button type="button" className="btn" onClick={this.showBot}>
                        <ReactPlayer
                            id="video-bot"
                            className="videoInsert"
                            playing
                            muted
                            loop={true}
                            height="128px"
                            width="128px"
                            controlsList="nodownload"
                            // onContextMenu={(e) => e.preventDefault()}
                            url="https://buildar.in/vid/1615800618.4738576.mp4"
                        />
                        <div className="initial_overlay">Want to talk to AI me?</div>
                    </button>

                    
                </div>
            </div>
        )
    }
}

export default ChatBot
