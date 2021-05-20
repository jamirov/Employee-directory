import React, { Component } from 'react'
import Main from '../components/Main'
import API from '../utils/Api'
import SearchForm from '../components/SearchForm'

export default class HomePage extends Component {
  state = {
    result: [],
    filterResults:[],
    search: '',
    firstName:[]
  }
  componentDidMount() {
    this.searchEEs()
  }

  searchEEs = () => {
    API.search()
      .then((res) => {
        this.setState({ result: res.data.results, filterResults:res.data.results })
        console.log(this.state.result[0].picture.thumbnail)
      })

      .catch((err) => console.log(err))
  }
sortfirst = () => {
  const sorted = this.state.filterResults.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)

  console.log(sorted)
  this.setState({
    filterResults: sorted

  })
  
  console.log("sorting")
}



handleInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
  this.filterEmployees(value);
};

componentDidUpdate(){

}

filterEmployees = (name) => {
  const filtered = this.state.result.filter(employee =>{
    return employee.name.first.toLowerCase().includes(name.toLowerCase())
  })
  this.setState({ filterResults: filtered})
}



  render() {
    return (
      <div className = "container p-3 mb-2 bg-dark text-white">
        <div>
          <h1  className="text-center" >Employee Directory</h1>
          <h3 className="text-center" >
            Click on the headings to toggle-sort, or search for a specific
            employee by first name using the search bar
          </h3>
        </div>
        
        <SearchForm
        blue={this.handleInputChange}
        redb = {this.state.search}
        />
      
 
        <table >
          <thead>
          <tr>
            <th>Photo</th>
            <th  onClick = {this.sortfirst} >First name  </th>
            <th >Last name</th>
            <th >Phone Number</th>
            <th >Email address</th>
            <th >User name</th>
          </tr>
          </thead>

          {this.state.result.length
            ? this.state.filterResults.map((person) => {
                return (
                  <Main 
                    imgSrc={person.picture.thumbnail}
                    firstName={person.name.first}
                    lastName={person.name.last}
                    phoneNumber={person.phone}
                    email={person.email}
                    userName={person.login.username}
                  />
                )
              })
            : 'loading'}
        </table>
      </div>
    )
  }
}
