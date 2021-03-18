import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class ChatBot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "https://buildar.in/clean/sophie.mp4",
            isHeadClicked: false,
            transitionClass: '',
        }
        this.changeToSofa = this.changeToSofa.bind(this)
        this.sofaCharges = this.sofaCharges.bind(this)
        this.sofaProcess = this.sofaProcess.bind(this)
        this.changeToLeather = this.changeToLeather.bind(this)
        this.changeToCarpet = this.changeToCarpet.bind(this)
        this.carpetCharges = this.carpetCharges.bind(this)
        this.carpetProcess = this.carpetProcess.bind(this)
        this.changeToHouse = this.changeToHouse.bind(this)
        this.changeToKitchen = this.changeToKitchen.bind(this)
        this.changeToBathroom = this.changeToBathroom.bind(this)
        this.changeToFullHouse = this.changeToFullHouse.bind(this)
        this.showBot = this.showBot.bind(this)
        this.closeBot = this.closeBot.bind(this)
        this.resetBot = this.resetBot.bind(this)
    }

    changeToSofa() {
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("intro-text").style.display = "none"
        document.getElementById("overlay-Sofa-options").style.display = "block"
        document.getElementById("video-bot").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/base.mp4",
            isHeadClicked: true
        })
    }
    sofaCharges() {
        document.getElementById("sofa-intro-text").style.display = "none"
        document.getElementById("sofa-charges").style.display = "block"
        document.getElementById("video-bot").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/sofacharges.mp4",
            isHeadClicked: true
        })
    }
    sofaProcess() {
        document.getElementById("sofa-intro-text").style.display = "block"
        document.getElementById("sofa-charges").style.display = "none"
        document.getElementById("video-bot").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/process1.mp4",
            isHeadClicked: true
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
        document.getElementById("intro-text").style.display = "none"
        document.getElementById("overlay-intro").style.display = "none"
        document.getElementById("overlay-Carpet-options").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/base.mp4",
            isHeadClicked: true
        })
    }
    carpetCharges() {
        document.getElementById("carpet-intro-text").style.display = "none"
        document.getElementById("carpet-charges").style.display = "block"
        this.setState({
            url: "https://buildar.in/clean/carpetcharge.mp4"
        })
    }
    carpetProcess() {
        document.getElementById("carpet-intro-text").style.display = "block"
        document.getElementById("carpet-charges").style.display = "none"
        this.setState({
            url: "https://buildar.in/clean/process2.mp4"
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
        document.getElementById("chat-bot").style.display = "none"
        this.setState({
            url: "https://buildar.in/vid/1615801043.2547426.mp4"
        })
    }


    showBot() {
        if (this.state.transitionClass === '') {
            document.getElementById("chathead").style.display = "none"
            document.getElementById("intro-text").style.display = "block"
            document.getElementById("overlay-intro").style.display = "block"
            document.getElementById("carpet-intro-text").style.display = "block"
            document.getElementById("carpet-charges").style.display = "none"
            document.getElementById("sofa-intro-text").style.display = "block"
            document.getElementById("sofa-charges").style.display = "none"
            document.getElementById("overlay-Sofa-options").style.display = "none"
            // document.getElementById("overlay-Leather-Sofa").style.display = "none"
            document.getElementById("overlay-Carpet-options").style.display = "none"
            this.setState({
                transitionClass: 'animate',
                url: "https://buildar.in/clean/sophie.mp4",
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
    resetBot() {
        document.getElementById("intro-text").style.display = "block"
        document.getElementById("overlay-intro").style.display = "block"
        document.getElementById("overlay-Sofa-options").style.display = "none"
        // document.getElementById("overlay-Leather-Sofa").style.display = "none"
        document.getElementById("carpet-intro-text").style.display = "block"
        document.getElementById("sofa-intro-text").style.display = "block"
        document.getElementById("sofa-charges").style.display = "none"
        document.getElementById("carpet-charges").style.display = "none"
        document.getElementById("overlay-Carpet-options").style.display = "none"
        this.setState({
            url: "https://buildar.in/clean/sophie.mp4",
            isHeadClicked: true
        })
    }
    closeBot() {
        document.getElementById("chathead").style.display = "block"
        this.setState({
            transitionClass: '',
            isHeadClicked: !this.state.isHeadClicked
        })
    }

    render() {
        const { url, isHeadClicked } = this.state
        return (
            <div id="main">
                <div id="chat-bot" className={this.state.transitionClass}>
                    <button className="close" onClick={this.closeBot} />
                    <a className="arrow-left" onClick={this.resetBot}>Back</a>
                    <ReactPlayer
                        id="video-bot"
                        className="videoInsert"
                        playing={isHeadClicked}
                        controlsList="nodownload"
                        width="320px"
                        height="185px"
                        // onContextMenu={(e) => e.preventDefault()}
                        /* style={{width: "160px",height:"90px"}}*/
                        url={url}
                    />
                    <p id="intro-text">Hi, I'm Sophie from CleanFanatic.<br /> What type of services do you need?</p>

                    <div className="overlay" >
                        <div id="overlay-intro">
                            <button className="btn btn-primary2" onClick={this.changeToSofa}>Sofa</button>
                            {/* <button className="btn btn-primary2" onClick={this.changeToLeather}>Leather Sofa</button> */}
                            <button className="btn btn-primary2" onClick={this.changeToCarpet}>Carpet</button>
                            {/* <button className="btn btn-primary2" onClick={this.changeToHouse}>House Cleaning</button>
                            <button className="btn btn-primary2" onClick={this.changeToKitchen}>Kitchen</button>
                            <button className="btn btn-primary2" onClick={this.changeToBathroom}>Bathroom</button>
                            <button className="btn btn-primary2" onClick={this.changeToFullHouse}>FullHouse</button> */}
                        </div>
                        {/* <div id="overlay-Sofa" style={{ display: "none" }}>
                            <button type="button" className="btn btn-primary2 " onClick={this.changeToSofa1}>Process 1 for cleaning sofa</button>
                            <button type="button" className="btn btn-primary2 " onClick={this.changeToSofa2}>Process 2 for cleaning sofa</button>
                        </div> */}
                        <div id="overlay-Sofa-options" style={{ display: "none" }}>
                            <h5 id="sofa-intro-text">What do you want to know about<br /> sofa services?</h5>
                            <h5 id="sofa-charges" style={{ display: "none" }}>Charges are<br />350 Rupees per seat</h5>
                            <button type="button" className="btn btn-primary2" onClick={this.sofaProcess}>Process of Cleaning</button>
                            <button type="button" className="btn btn-primary2" onClick={this.sofaCharges}>Charges</button>
                        </div>
                        <div id="overlay-Carpet-options" style={{ display: "none" }}>
                            <h5 id="carpet-intro-text">What do you want to know about<br /> carpet services?</h5>
                            <h5 id="carpet-charges" style={{ display: "none" }}>Charges are <br /> 25 Rupees per square feet</h5>
                            <button type="button" className="btn btn-primary2" onClick={this.carpetProcess} >Process of Cleaning</button>
                            <button type="button" className="btn btn-primary2" onClick={this.carpetCharges} >Charges</button>
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
