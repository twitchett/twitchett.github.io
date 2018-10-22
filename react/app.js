import React from 'react'
import ReactDOM from 'react-dom'
import MediaList from './components/mediaList'

class ReactApp extends React.Component {
    render () {
        const { media } = this.props;

        if (media) {
            return (
                <MediaList data={media} />
            )
        } else {
            return (
                <div>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span className="sr-only">Loading...</span>
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