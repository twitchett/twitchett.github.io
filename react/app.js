import React from 'react'
import ReactDOM from 'react-dom'
import MediaList from './components/mediaList'

class ReactApp extends React.Component {

    constructor (props) {
        super(props)
        this.state = {} 
    } 

    render () {
        if (this.props.media) {
            return (
                <MediaList data={this.props.media} />
            )
        } else {
            console.log('no media to display :(')
            return (
                <div>No media to display booo</div>
            )
        }
    }   
}

// bootstrap app with properties from _config.yml
const root = document.getElementById('reactApp')
if (root) {
    ReactDOM.render(
        <ReactApp
            config={JSON.parse(root.getAttribute("data-config"))}
            media={window.twitchett.instadump}
        />,
        root
    )
}