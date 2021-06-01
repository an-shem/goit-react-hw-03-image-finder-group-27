import { Component } from 'react';
import Loader from 'react-loader-spinner';
import galleryApi from './services/galleryApi';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import WrappLoader from './components/WrappLoader';
import Button from './components/Button';
import Modal from './components/Modal';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    page: 1,
    error: '',
    isLoading: false,
    showModal: false,
    imgUrl: '',
  };

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.handleFetch();
    }
    if (prevState.gallery !== this.state.gallery && prevState.gallery.length !== 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  toggleModal = (e) => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState(({ showModal }) => ({ showModal: !showModal }));
    }
  };

  handleSubmit = (value) => {
    if (value === '') return;
    this.setState((prevState) => {
      if (prevState.searchQuery === value) return;

      return { searchQuery: value, page: 1, error: '', gallery: [] };
    });
  };

  handleClick = () => {
    this.handleFetch();
  };

  handleClickImg = (e, largeImageURL) => {
    this.setState({ imgUrl: largeImageURL });
    this.toggleModal(e);
     };

  handleFetch = () => {
    const { searchQuery, page, gallery: stateGallery } = this.state;
    this.setState({ isLoading: true });
    galleryApi
      .fetchGalleryWithQuery(searchQuery, page)
      .then((gallery) => {
        if (gallery.length === 0) {
          if (stateGallery.length === 0) {
            notyf.error({
              message: 'Nothing found',
              position: {
                x: 'center',
                y: 'top',
              },
              dismissible: true,
            });
            return;
          }

          notyf.error({
            message: 'End of image list',
            position: {
              x: 'center',
              y: 'top',
            },
            dismissible: true,
          });
        }
        if (gallery.length > 0) {
          this.setState((prevState) => ({ gallery: [...prevState.gallery, ...gallery] }));
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() =>
        this.setState((prevState) => {
          return { isLoading: false, page: prevState.page + 1 };
        })
      );
  };

  render() {
    const { gallery, isLoading, showModal, searchQuery, imgUrl } = this.state;
    const seeButton = this.state.gallery.length > 0;
    return (
      <div className="App">
        {showModal && <Modal alt={searchQuery} url={imgUrl} closeModal={this.toggleModal} />}
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery gallery={gallery} alt={searchQuery} onClick={this.handleClickImg} />
        <WrappLoader>
          {isLoading ? (
            <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={3000} />
          ) : (
            seeButton && <Button onClick={this.handleClick} />
          )}
        </WrappLoader>
      </div>
    );
  }
}

export default App;
