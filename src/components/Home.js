import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import CryptoCard from './CryptoCard';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cryptoData:[],
       show:false,
    }
  }
  componentDidMount=()=>{
    if (this.props.auth0.isAuthenticated){
      let url ='http://localhost:8000/getCrypto'
      axios.get(url).then(itm=>{
        this.setState({
          cryptoData:itm.data,
          show:true,
        })
      })
    }
    
  }
  addCrypto=(data)=>{
    let newData={
      email: this.props.auth0.user.email,
      image_url: data.image_url,
      toUSD: data.toUSD,
      description: data.description,
    }
    axios.post('http://localhost:8000/addCrypto',newData)
  }
 
  render() {
    return (
      <Row style={{gap:'40px'}}>
        {this.state.show&&
        this.state.cryptoData.map((item,idx)=>{
          return(
            <CryptoCard addCrypto={this.addCrypto} item={item} key={idx}/>
          )
        })}
      </Row>
    )
  }
}

export default withAuth0(Home);
