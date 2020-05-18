import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
    console.log(res);
  }

  // search github users
  searchUsers = async (text) => {
    try {
      this.setState({ loading: true });

      const res = await axios.get(
        `https://api.github.com/search/users?q={text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      this.setState({ users: res.data.items, loading: false });

      // testing why no result
      console.log(`secret: ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      console.log(`total: ${res.data.total_count}`);
      console.log(`incomplete: ${res.data.incomplete_results}`);
      console.log(text);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
