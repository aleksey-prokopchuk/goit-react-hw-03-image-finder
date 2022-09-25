import { Component } from "react";
import axios from "axios";

import Searchbar from './Searchbar/Searchbar'
import Loader from './Loader/Loader'
import ImageGallery from "./ImageGallery/ImageGallery";

class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(_, prevState) { 
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchImages()
    }

    console.log('componentDidUpdate')

  
   };

  fetchImages() {
    const { page } = this.state;
    this.setState({
      loading: true,
    });
    axios.get(`https://pixabay.com/api/?q=cat&page=1&key=29410547-eff01d8a7b7e1538418c57ece&image_type=photo&orientation=horizontal&per_page=12&page=${page}`)
      .then(({ data }) => {
        this.setState(({items}) => {
          return {
            items: [...items, ...data.hits]
          }
        })
      })
      .catch(error => {
        this.setState({
          error
        })
      })
      .finally(() => {
        this.setState({
          loading: false
        })
      })
  }

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1
      }
    })
  }

  render() {
    const { items, loading, error } = this.state
    const isImages = Boolean(items.length)
    const {loadMore} = this
    return (
      <>
        <Searchbar />
        {loading && <Loader />}
        {error && <p>Перезавантажте сторінку</p>}
        {isImages && <ImageGallery items={items} />}
        {isImages && <button type="button" onClick={loadMore}>Load more</button>}
      </>
    )
  }
}

export default App