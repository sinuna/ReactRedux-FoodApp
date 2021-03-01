import React, { Component } from 'react';
import {connect} from 'react-redux'

class Food extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             foodData:this.props.storeData
        }
    }
    
    render() {
        return (
            <div className="container mt-3 inner-page">
                <div className="row">
                  {
                      this.state.foodData.map((data)=>{
                           return <div className="col-xs-12 col-sm-6 col-md-4">
                                     <div className="card mt-3">
                                         <img key={data.id}  src={data.url} alt={data.name} height="250px"/>
                                         <div className="card-body text-white">
                            
                                             <h3>{data.name}</h3>
                                         </div>
                                        
                                     </div>
                                 </div>
                            
                      })
                  }
            </div>     
            </div>
        );
    }
}

export default connect((store)=>{

      return {
              storeData:store.foodReducer.foodInfo
      }
})(Food)