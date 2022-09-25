import { Component } from "react";
// import css from './Searchbar.module.css'

// const{searchbar}=css

class Searchbar extends Component{
  // state = {
  //   items: [],
  //   loading: false,
  //   error: null,
  //   page: 1,
  // }
  
  // componentDidMount() {
  //   this.setState({
  //     loading:true
  //   })
  //   this.fetchImages();
  // }
  
  
  // fetchImages() {
  //   const { page } = this.state;
  //   console.log('fetchImages')
    
  //   axios.get(`https://pixabay.com/api/?q=cat&page=1&key=29410547-eff01d8a7b7e1538418c57ece&image_type=photo&orientation=horizontal&per_page=12&page=${page}`)
  //     .then(({ data }) => {
  //       this.setState(({items}) => {
  //         // const { hits } = data.hits
  //         console.log(data.hits)
  //         return {
  //           items: [...items, ...data.hits]
  //         }
  //       })
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error
  //       })
  //     })
  //     .finally(() => {
  //       this.setState({
  //         loading: false
  //       })
  //     })
  // }

  render() {
      // const {items, loading, error}=this.state
        return(<header className='searchbar'>
  <form className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>)
    }
}

export default Searchbar