import React from 'react'
import {render} from 'react-dom'
import jsonp from 'jsonp'
import MediaList from './components/mediaList'

const clientId = "71e0eb821e2e489dbb6bd5e5cb9bc0fa"
const redirectUri = "http://localhost:4000/art"
const url = "https://api.instagram.com/oauth/authorize/?client_id=" + clientId + "&redirect_uri=" + redirectUri +"&response_type=token"
const apiRoot = "https://api.instagram.com/v1"

class ReactApp extends React.Component {


    constructor (props) {
        super(props)
        this.state = {}
        // this.state = { token: null }
        this.fetchImages = this.fetchImages.bind(this)
    }

    componentDidMount () {
        console.log('in hook')
        const token = this.getAccessParam('access_token')
        if (!token) {
            console.warn('did not find access token, redirecting to oauth endpoint')
            window.location = url
        } else {
            this.token = token
            console.log('success! got token', token)
            this.fetchImages()
        }
    }

    getAccessParam (param) {
        let reg = new RegExp('[#]' + param + '=([^&#]*)', 'i')
        let string = reg.exec(window.location.href)
        console.log('found ', string, ' in ' + window.location.href)
        return string ? string[1] : null
    }

    fetchImages () {
        const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + this.token
        jsonp(url, null, (err, data) => {
            if (err) {
                console.error(err.message)
            } else {
                console.log(data)
                // check code data.meta.code == 200?
                this.setState({ media: data })
            }
        })
    }   

    render () {
        console.log('hello from react')

        if (this.state.media) {
            console.log('got some media! let\'s display them')
            return (
                <MediaList data={this.state.media.data} />
            )
        } else {
            console.log('no media to display :(')
            return (
                <div>No media to display booo</div>
            )
        }
    }   
}

render(<ReactApp />, document.getElementById('galleryContainer'))