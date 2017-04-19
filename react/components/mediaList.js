import React, { Component } from 'react'

class MediaList extends Component {

    constructor(props) {
        super(props)
        console.log('media list got some props!', props.data.length)
    }

    render () {
        console.log('my props', this.props)
        let styles = {
            li: {
                listStyleType: 'none'
            },
            caption: {}
        }
        return (
            <ul>
                {this.props.data.map((item, idx) =>
                    // {!!i && ", "}
                    <li style={styles.li}>
                        <img src={item.images.thumbnail.url} key={item.id} />
                        <p style={styles.caption}>{item.caption.text}</p>
                    </li>
                )}
            </ul>
        )
    }
}

export default MediaList