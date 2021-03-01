import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:this.props.storeData
        }
    }
    
    render() {
        return (
            <div className="container">
                {
                    this.state.data.map((data)=>{
                         return (
                             <div className="row mt-5">
                                 <div className="col">
                                     <div className="card">
                                         <div className="card-header font-weight-bold">
                                             {data.name}
                                         </div>
                                         <img src={data.url} alt={data.name}/>
										<div className="card-body">
											<p>{data.description}</p>
										</div>
                                     </div>
                                 </div>
                             </div>
                         )
                    })
                }
                  
            </div>
        );
    }
}

export default connect((store)=>{
    return {
          storeData:store.foodReducer.postInfo
    }
})(Post)