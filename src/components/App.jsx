import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import { searchImage } from './api/image';
import Loader from "./Loader/Loader";
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'

class App extends Component{
  state = {
    items: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if ((search && prevState.search !== search) || page > prevState.page)  {
      this.fetchImage(search, page);
    };
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

  render() {
    const { onSearch } = this;
    const { items, loading, error } = this.state;
    const isImages = Boolean(items.length);
    const {loadMore} = this
    return (
      <>
        <Searchbar onSubmit={onSearch} />
        {loading && <Loader />}
        {error && <p>Щось пішло не так!</p>}
        {isImages && <ImageGallery items={items} />}
        {isImages && < Button onClick={loadMore} title='Load more'/>}
        {/* {isImages && <button type="button" onClick={loadMore}>Load more</button>} */}
      </>
    )
  };
};

export default App;
