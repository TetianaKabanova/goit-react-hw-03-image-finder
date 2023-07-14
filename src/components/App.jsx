import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Button } from './Button/Button.jsx';
import { Loader } from './Loader/Loader.jsx';
import { getImage } from './api/PixabayApi.js';
import { Message } from './Message/Message.jsx';
import { Modal } from './Modal/Modal.jsx';

export class App extends Component {
  state = {
    textQuery: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    error: null,
    totalPage: null,
  };

  async componentDidUpdate(_, prevState) {
    let { page } = this.state;
    const prevSearchValue = prevState.textQuery;
    const nextSearchValue = this.state.textQuery;

    if (prevSearchValue !== nextSearchValue || prevState.page !== page) {
      this.setState({ loading: true });

      try {
        const response = await getImage(nextSearchValue, page);
        const { hits, totalHits } = response.data;
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalPage: totalHits,
        }));
      } catch (error) {
        this.setState({ error: 'Something wrong. Please try again.' });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = searchValue => {
    this.setState({
      textQuery: searchValue,
      page: 1,
      images: [],
      loading: false,
      showModal: false,
      error: null,
      totalPage: null,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = (imgUrl, tag) => {
    this.setState({ showModal: true, imgUrl, tag });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, showModal, imgUrl, tag, loading, totalPage, error, page } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images} openModal={this.onOpenModal} />

        {/* модалка  */}
        {showModal && (
          <Modal onClose={this.onCloseModal}>
            <img src={imgUrl} alt={tag} />
          </Modal>
        )}

        {/* спінер */}
        <Loader isLoading={loading} />

        {/* кнопка завантажити ще */}
        {totalPage / 12 > page && <Button loadMore={this.onLoadMore} />}

        {/* нічого не знайшло */}
        {/* {totalPage === 0 && <ImageErrorView />} */}

        {/* помилка запиту */}
        {/* {error && <ImageErrorView>{error}</ImageErrorView>} */}
      </>
    );
  }
}
