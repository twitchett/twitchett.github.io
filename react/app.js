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
            return (
                <div>
                    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>
                </div>
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