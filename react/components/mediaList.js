import React from 'react'
import Lightbox from 'react-images'

class MediaList extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            currentImage: 0,
            lightboxIsOpen: false
        }
        this.images = []
        for (const item of props.data) {
            this.images.push({
                src: item.images.standard_resolution.url,
                title: 'image title',
                caption: item.caption.text
            })
        }
        this.openLightbox = this.openLightbox.bind(this)
        this.closeLightbox = this.closeLightbox.bind(this)
        this.goToNext = this.goToNext.bind(this)
        this.goToPrevious = this.goToPrevious.bind(this)
        this.goToIndex = this.goToIndex.bind(this)

    }

    openLightbox (idx, event) {
        event.preventDefault()
        this.setState({
            currentImage: idx,
            lightboxIsOpen: true
        })
    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        })
    }

    goToNext () {
        this.goToIndex(this.state.currentImage + 1)
    }

    goToPrevious () {
        this.goToIndex(this.state.currentImage - 1)
    }

    goToIndex (idx) {
        this.setState ({ currentImage: idx })
    }

    render () {
        console.log('my props', this.props)
        let styles = {
            img: {
                display: 'inline-block',
                padding: 5
            }
        }
        return (
            <div>
                <div class="lightbox_container">
                    <Lightbox images={this.images}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                        onClose={this.closeLightbox}
                        onClickNext={this.goToNext}
                        onClickPrev={this.goToPrevious}
                        onClickThumbnail={this.goToIndex}
                        showThumbnails={true}
                    />
                </div>
                {this.props.data.map((item, idx) =>
                    <a href="#"  onClick={evt => this.openLightbox(idx, evt)}>
                        <img src={item.images.thumbnail.url} style={styles.img} />
                    </a>
                )}
            </div>
        )
    }
}

export default MediaList
