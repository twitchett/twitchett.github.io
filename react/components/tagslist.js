import React, { Component } from 'react'

class TagsList extends Component {
    render () {
        console.log('my props', this.props)
        let styles = {
            li: {
                display: 'inline',
                listStyleType: 'none'
            }
        }
        return (
            <ul>
                {this.props.tags.map((tag, i) =>
                    // {!!i && ", "}
                    <li style={styles.li} key={tag}>{tag}</li>
                )}
            </ul>
        )
    }
}

export default TagsList