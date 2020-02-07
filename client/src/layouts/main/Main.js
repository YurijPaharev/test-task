import React from 'react';
import { connect } from 'react-redux';
import { getImagesSelector } from '../../reducers/images/images.reducer';
import { getImagesAction, updateImageRateAction } from '../../actions/images/images.actions';
import Image from '../../components/image/Image';
import withStyles from 'react-jss';
import Modal from '../../components/modal/Modal';
import ImageModal from '../../components/image-modal/ImageItem';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: [5, 10],
    alignItems: 'center'
  },
  item: {
    padding: [5, 10]
  }
};

function mapStateToProps(state) {
  return {
    images: getImagesSelector(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: () => dispatch(getImagesAction()),
    updateRate: (data) => dispatch(updateImageRateAction(data))
  }
}

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showModal: false, currentImage: null};
  }

  componentDidMount() {
    this.props.getImages();
  }

  toggleModal(image) {
    return () => {
      this.setState({
        showModal: !this.state.showModal,
        currentImage: image
      });
    }
  }

  updateRate() {
    return (rate, id) => {
      this.props.updateRate({rate, id});
    }
  }

  render() {
    const {images, classes} = this.props;
    const {showModal, currentImage} = this.state;

    return (
      <div className={classes.wrapper}>

        {images && images.map(image => {
          return (
            <div onClick={this.toggleModal(image)} className={classes.item} key={image.id}>
              <Image image={image} />
            </div>
          ); 
        })}

        {
          showModal ? (
            <Modal>
              <ImageModal
                image={currentImage}
                onToggle={this.toggleModal(null)}
                onUpdateRate={this.updateRate()}
              />
            </Modal>
          ) : null
        }
      </div>
    );
  }
}

const StyledComponent = withStyles(styles)(Component);
const Main = connect(mapStateToProps, mapDispatchToProps)(StyledComponent);

export default Main;
