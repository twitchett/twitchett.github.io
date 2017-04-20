import React from 'react'
import ReactDOM from 'react-dom'
import jsonp from 'jsonp'
import MediaList from './components/mediaList'

class ReactApp extends React.Component {

    constructor (props) {
        super(props)
        this.state = {} 
        this.fetchImages = this.fetchImages.bind(this)
        this.doOauthRedirect = this.doOauthRedirect.bind(this)
    }

    componentDidMount () {
        const token = this.getQueryParam('access_token')
        if (!token) {
            this.doOauthRedirect()
        } else {
            this.token = token
            this.fetchImages()
        }
    }

    getQueryParam (param) {
        // regex to match against #param=, not ?param=, because of the strange
        // way instagram implements their api 
        const reg = new RegExp('[#]' + param + '=([^&#]*)', 'i')
        const string = reg.exec(window.location.href)
        return string ? string[1] : null
    }

    doOauthRedirect() {
        const url = `https://api.instagram.com/oauth/authorize/
            ?client_id=${this.props.config.instagram_client_id}
            &redirect_uri=${this.props.config.url + this.props.config.oauth_redirect_uri}
            &response_type=token`
        window.location = url // yeah...
    }

    fetchImages () {
        // NOTE: Instagram does not support CORS!! We have to use JSONP :'(
        const url = `https://api.instagram.com/v1/users/${this.props.config.instagram_user_id}/media/recent/?access_token=${this.token}`
        jsonp(url, null, (err, data) => {
            if (err) {
                console.error(err.message)
                this.setState({ error: true })
            } else {
                console.log(data)
                // check code data.meta.code == 200?
                this.setState({ media: data })
            }
        })
    }   

    render () {
        if (this.state.media) {
            return (
                <MediaList data={this.state.media.data} />
            )
        } else if (this.state.error) {
            return (
                <div>error! :( </div>
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
const root = document.getElementById('galleryContainer')
if (root) {
    ReactDOM.render(
        <ReactApp config={JSON.parse(root.getAttribute("data-config"))} />,
        root
    )
}