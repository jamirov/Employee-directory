import React, { Component } from 'react'
import Main from '../components/Main'
import API from '../utils/Api'

export default class HomePage extends Component {
  state = {
    result: [],
    search: '',
  }
  componentDidMount() {
    this.searchEEs()
  }

  searchEEs = () => {
    API.search()
      .then((res) => {
        this.setState({ result: res.data.results })
        console.log(this.state.result[0].picture.thumbnail)
      })

      .catch((err) => console.log(err))
  }
sortfirst = () => {
    console.log("Sorting")
}
  render() {
    return (
      <div>
        <div>
          <h1>Employee Directory</h1>
          <h3>
            Click on the headings to toggle-sort, or search for a specific
            employee by first name using the search bar
          </h3>
        </div>
        <table>
          <tr>
            <th>Photo</th>
            <th onClick = {this.sortfirst} >First name  </th>
            <th>Last name</th>
            <th>Phone Number</th>
            <th>Email address</th>
            <th>User name</th>
          </tr>

          {this.state.result.length
            ? this.state.result.map((person) => {
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
