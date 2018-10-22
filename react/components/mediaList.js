import React from 'react'
import Lightbox from 'react-images'

class MediaList extends React.Component {

    constructor (props) {
        super(props)
        this.state = this.getInitialState()

        // prepare images array for lightbox viewer
        this.images = props.data.map(item => ({
            caption: item.caption,
            src: item.highResolutionUrl,
        }))

        this.openLightbox = this.openLightbox.bind(this)
        this.closeLightbox = this.closeLightbox.bind(this)
        this.goToNext = this.goToNext.bind(this)
        this.goToPrevious = this.goToPrevious.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.getInitialState = this.getInitialState.bind(this)
    }

    getInitialState () {
        return {
            currentImage: 0,
            lightboxIsOpen: false
        }
    }

    openLightbox (event, idx) {
        event.preventDefault()
        this.setState({
            lightboxIsOpen: true,
            currentImage: idx,
        })
    }

    closeLightbox () {
        this.setState(this.getInitialState())
    }

    goToNext () {
        this.goToIndex(this.state.currentImage + 1)
    }

    goToPrevious () {
        this.goToIndex(this.state.currentImage - 1)
    }

    goToIndex (idx) {
        this.setState({ currentImage: idx })
    }

    render () {
        const { currentImage, lightboxIsOpen } = this.state
        const { data } = this.props

        return (
            <div>
                <div>
                    <Lightbox images={this.images}
                        currentImage={currentImage}
                        isOpen={lightboxIsOpen}
                        onClose={this.closeLightbox}
                        onClickNext={this.goToNext}
                        onClickPrev={this.goToPrevious}
                        onClickThumbnail={this.goToIndex}
                        showThumbnails={true}
                        backdropClosesModal={true}
                        showCloseButton={false}
                    />
                </div>
                {data.map((item, idx) =>
                    <a href="#" onClick={e => this.openLightbox(e, idx)}>
                        <img src={item.thumbnailUrl} style={styles.img} />
                    </a>
                )}
            </div>
        )
    }
}

const styles = {
    img: {
        display: 'inline-block',
        padding: 5
    }
}

export default MediaList
