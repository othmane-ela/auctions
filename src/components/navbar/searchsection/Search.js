import "./Search.scss"
import Styled from 'styled-components';
import Field from '../../tools/Field';
import React from "react";



const SearchSection = Styled.div`
             flex: 40%;
             display:flex;
            align-items:center;
            justify-content:center;
`;


class Search extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            searchIn : ''
        }
        this.handlChange = this.handlChange.bind(this);
    }

    handlChange(e) {
          this.setState({
                searchIn : e.target.value
            })
    }

    render() {
     return <SearchSection>
               <Field type="text" name="search" value={this.state.searchIn} onChange={this.handlChange} placeholder="Search"/>
             </SearchSection>
    }
}

export default Search;