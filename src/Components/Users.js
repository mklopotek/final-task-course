import React from 'react'
import Loading from '../Components/Loading'

class Users extends React.Component {
    state = {
        users: null
    }

    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data.results
                })
            )
    }

    render() {
        return (
            <div>
                {
                    this.state.users ?
                        this.state.users.map(e => {
                            return (
                                <div key={e.login.uuid}>
                                    <img src={e.picture.medium} alt='' />
                                    <div>{e.email}</div>
                                </div>
                            )
                        })
                        :
                        <Loading />
                }
            </div>
        )
    }
}

export default Users