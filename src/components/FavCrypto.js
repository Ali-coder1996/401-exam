import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import FavCard from './FavCard';
import { Row } from 'react-bootstrap';
import ModelF from './ModelF';

class FavCrypto extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favData: [],
      showF: false,
      showModel: false,
      index: 0,
      image_url: '',
      toUSD: '',
      description: '',
      showM:false
    }
  }
  componentDidMount() {
    if(this.props.auth0.isAuthenticated){
      let urlF = `http://localhost:8000/getFCrypto/${this.props.auth0.user.email}`
      axios.get(urlF).then(item => {
        console.log(item.data)
        this.setState({
          favData: item.data,
          showF: true,
        })
      })
    }


  }

  deleteCrypto = (id) => {
    const idx = this.state.favData[id]._id;
    axios.delete(`http://localhost:8000/deleteCrypto/${idx}`).then(item => {
      this.setState({
        favData: item.data
      })
    })

  }
  updataCrypto = (idx) => {
    this.setState({
      image_url:this.state.favData[idx].image_url ,
        toUSD: this.state.favData[idx].toUSD,
        description:this.state.favData[idx].description ,
        index:idx,
        showM:true
    })
  }
 updata=(e)=>{
  e.preventDefault();
  let newData={
    image_url:e.target.image_url.value ,
    toUSD: e.target.toUSD.value,
    description:e.target.description.value ,
  }
  let id = this.state.favData[this.state.index]._id;
  axios.put(`http://localhost:8000/deleteCrypto/${id}`,newData).then(item => {
    this.setState({
      favData: item.data
    })
  })
 }
 closeHandler=()=>{
   this.setState({
    showM:false   
  })
 }


  render() {
    return (

      <Row>
        {this.state.showF &&
          this.state.favData.map((item, idx) => {
            return (
              <FavCard deleteCrypto={this.deleteCrypto} updataCrypto={this.updataCrypto} item={item} idx={idx} />
            )
          })}
          <ModelF updata={this.updata} image_url={this.state.image_url}
          toUSD={this.state.toUSD}
          description={this.state.description}
          closeHandler={this.closeHandler}
          showM={this.state.showM}
          updata={this.updata}
          />
      </Row>
    )
  }
}

export default withAuth0(FavCrypto);
