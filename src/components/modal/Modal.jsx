import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, Image } from './ModalStyled';

class Modal extends Component {
  state = {};

  static propTypes = {
    picture: PropTypes.shape().isRequired,
    onExit: PropTypes.func.isRequired,
    height: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.props.onExit();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onExit();
    }
  };

  render() {
    const { picture, height } = this.props;
    return (
      <Overlay style={{ top: height }} onClick={this.handleBackdropClick}>
        <ModalWindow>
          <Image src={picture.largeImageURL} alt={picture.tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
