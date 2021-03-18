import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class ChatBot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "https://buildar.in/clean/sophie.mp4",
            isHeadClicked: false,
            transitionClass: ''
        }
        this.changeToSofa = this.changeToSofa.bind(this)
        this.changeToSofa1 = this.changeToSofa1.bind(this)
        this.changeToSofa2 = this.changeToSofa2.bind(this)
        this.changeToLeather = this.changeToLeather.bind(this)
        this.changeToCarpet = this.changeToCarpet.bind(this)
        this.changeToHouse = this.changeToHouse.bind(this)
        this.changeToKitchen = this.changeToKitchen.bind(this)
        this.changeToBathroom = this.changeToBathroom.bind(this)
        this.changeToFullHouse = this.changeToFullHouse.bind(this)
        this.showBot = this.showBot.bind(this)
    }

    changeToSofa() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/sofacharges.mp4"
        })
    }
    changeToSofa1() {
        this.setState({
            url: "https://buildar.in/clean/sofa1.mp4"
        })
    }
    changeToSofa2() {
        this.setState({
            url: "https://buildar.in/clean/sofa2.mp4"
        })
    }
    changeToLeather() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Leather-Sofa").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/sofa3.mp4"
        })
    }
    changeToCarpet() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Carpet").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/carpetcharges.mp4"
        })
    }
    changeToHouse() {
        document.getElementById("overlay-intro").style.display = "none"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToKitchen() {
        document.getElementById("overlay-intro").style.display = "none"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToBathroom() {
        document.getElementById("overlay-intro").style.display = "none"
        this.setState({
            url: "https://buildar.in/vid/1615800834.2182198.mp4"
        })
    }
    changeToFullHouse() {
        document.getElementById("overlay-intro").style.display = "none"
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
                        height="300px"
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
                        <div id="overlay-Sofa" style={{ display: "none" }}>
                            <button type="button" className="btn btn-primary2 " href="#" onClick={this.changeToSofa1}>Sofa 1</button>
                            <button type="button" className="btn btn-primary2 " href="#" onClick={this.changeToSofa2}>Sofa 2</button>
                        </div>
                        <div id="overlay-Leather-Sofa" style={{ display: "none" }}>
                        </div>
                        <div id="overlay-Carpet" style={{ display: "none" }}>
                            <a type="button" className="btn btn-primary2 " href="#">Carpet 1</a>
                            <a type="button" className="btn btn-primary2 " href="#">Carpet 2</a>
                            <a type="button" className="btn btn-primary2" href="#">Carpet 3</a>
                        </div>
                    </div>
                </div>
                <div id="chathead" className="chatbot-head">

                    <button className="btn btn-primary2" onClick={this.showBot}>
                        <ReactPlayer
                            id="video-bot"
                            className="videoInsert"
                            playing
                            muted
                            loop={true}
                            height="128px"
                            width="170px"
                            controlsList="nodownload"
                            // onContextMenu={(e) => e.preventDefault()}
                            url="https://buildar.in/clean/sophie.mp4"
                        />
                        <div className="initial_overlay">Hi!! How can I help you?</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatBot
