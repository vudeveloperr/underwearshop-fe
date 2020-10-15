import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css'



export default class PriceRange extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          value4: {
            min: 0,
            max: 400000,
          },
        };
      }

      componentDidMount() {// setState ngan gia tri min max refresh 
        const query = new URLSearchParams(window.location.search);
        const min = query.get('minPrice');
        const max = query.get('maxPrice');

        this.setState({ value4: { min, max } })
      }

    
      render() {
        return (
            <InputRange             
              maxValue={400000}
              minValue={0}
              formatLabel={value => `${value} đ`}
              value={this.state.value4}
              onChange={value => this.setState({ value4: value })}
              onChangeComplete={value => {
                console.log("done");
                window.location.href=`/shop?minPrice=${this.state.value4.min}&maxPrice=${this.state.value4.max}`;
              }}
            />
            //</Link>
            
          // </form>
        );
      }
    }
    
    // ReactDOM.render(
    //   <PriceRange />,
    //   document.getElementById('app')
    // );
