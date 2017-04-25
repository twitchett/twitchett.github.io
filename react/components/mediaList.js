import React from 'react'
import Lightbox from 'react-images'

class MediaList extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            currentImage: 0,
            lightboxIsOpen: false
        }
        // prepare images array for lightbox viewer
        this.images = []
        for (const item of props.data) {
            this.images.push({
                src: item.imageHighResolutionUrl,
                caption: item.caption
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
                        backdropClosesModal={true}
                        showCloseButton={false}
                    />
                </div>
                {this.props.data.map((item, idx) =>
                    <a href="#"  onClick={evt => this.openLightbox(idx, evt)}>
                        <img src={item.imageSquareThumbnailUrl} style={styles.img} />
                    </a>
                )}
            </div>
        )
    }
}

export default MediaList
