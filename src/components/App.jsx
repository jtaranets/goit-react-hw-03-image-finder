import React, { Component } from 'react';
import SearchForm from './searchForm/SearchForm';
import fetcher from '../services/service';
import Gallery from './gallery/Gallery';
import LoadMoreBtn from './loadMoreBtn/LoadMoreBtn';
import Modal from './modal/Modal';
import styles from './app.module.css';

class App extends Component {
  state = {
    pictures: [],
    activePage: 1,
    query: '',
    bigPictureIsShowing: false,
    pictureToShow: null,
  };

  componentDidMount() {
    this.fetchPictures();
  }

  componentDidUpdate(prevProps, prevState) {
    const { activePage: prevPage } = prevState;
    const { activePage: nextPage } = this.state;
    const { query: prevQuery } = prevState;
    const { query: nextQuery } = this.state;
    if (prevPage !== nextPage) {
      fetcher(nextPage, nextQuery)
        .then(pictures => {
          this.setState(state => ({
            pictures: [...state.pictures, ...pictures],
          }));
        })
        .then(() =>
          window.scrollTo({
            top: window.scrollY + window.innerHeight - 100,
            behavior: 'smooth',
          }),
        );
    } else if (prevQuery !== nextQuery) {
      const func = async () => {
        await this.setState({ activePage: 1 });
        this.fetchPictures();
      };
      func();
    }
  }

  fetchPictures = () => {
    const { activePage, query } = this.state;
    fetcher(activePage, query).then(pictures => this.setState({ pictures }));
  };

  handleLoadMoreClick = () => {
    this.setState(state => ({ activePage: state.activePage + 1 }));
  };

  handleSubmit = value => {
    this.setState({ query: value });
  };

  getID = id => {
    const { pictures } = this.state;
    const pictureToShow = pictures.find(picture => picture.id === id);
    this.setState({ bigPictureIsShowing: true, pictureToShow });
  };

  handleExit = () => {
    this.setState({ bigPictureIsShowing: false });
  };

  render() {
    const { pictures, pictureToShow, bigPictureIsShowing } = this.state;
    return (
      <div className={styles.container}>
        <SearchForm onSubmit={this.handleSubmit} />
        <Gallery items={pictures} toGetID={this.getID} />
        {bigPictureIsShowing && (
          <Modal
            picture={pictureToShow}
            onExit={this.handleExit}
            height={`${window.scrollY}px`}
          />
        )}
        <LoadMoreBtn onLoadMore={this.handleLoadMoreClick} />
      </div>
    );
  }
}

export default App;
