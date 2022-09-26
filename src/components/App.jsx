import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import { searchImage } from './api/image';
import Loader from "./Loader/Loader";
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import Modal from './Modal/Modal'

class App extends Component{
  state = {
    items: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    modalOpen: false,
    modalContent: {
      largeImageURL: '',
      tags: '',
    }
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if ((search && prevState.search !== search) || page > prevState.page)  {
      this.fetchImage(search, page);
    };
    // if (search !== prevState.search) {
    //   this.setState({
    //     search: '',
    //   })
    // }
  };

  async fetchImage() {
    const { search, page } = this.state;
    this.setState({
      loading: true,
    });
    try {
      const data = await searchImage(search, page);
      this.setState(({ items }) => {
        return {
          items: [...items, ...data.hits]
        };
      })
    } catch (error) {
      this.setState({
        error,
      })
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  onSearch = ({ search }) => {
    this.setState({
      search: search,
    })
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1
      }
    })
  }

  openModal = (modalContent) => {
    this.setState({
      modalOpen: true,
      modalContent
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: {
        largeImageURL: '',
       tags: '',
      }
    });
  };

  render() {
    const { onSearch } = this;
    const { items, loading, error, modalOpen, modalContent } = this.state;
    const isImages = Boolean(items.length);
    const {loadMore, closeModal, openModal} = this
    return (
      <>
        <Searchbar onSubmit={onSearch} />
        {modalOpen && <Modal items={items} onClose={closeModal}><img src={modalContent.largeImageURL} alt={modalContent.tags} /></Modal>}
        {loading && <Loader />}
        {error && <p>Щось пішло не так!</p>}
        {isImages && <ImageGallery items={items} onClick={openModal} />}
        {isImages && < Button onClick={loadMore} title='Load more'/>}
        {/* {isImages && <button type="button" onClick={loadMore}>Load more</button>} */}
      </>
    )
  };
};

export default App;
