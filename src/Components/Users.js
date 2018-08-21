import React from 'react';
import Loading from '../Components/Loading';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

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
            <div className={'users__list'}>
                {
                    this.state.users ?

                        <List>
                            <Subheader>Your ten random users</Subheader>
                            {
                                this.state.users.map(e => {
                                    return (

                                        <ListItem
                                            key={e.login.uuid}
                                            primaryText={e.email}
                                            leftAvatar={<Avatar src={e.picture.medium} />}
                                        />
                                    )
                                })
                            }

                        </List>
                        :
                        <Loading />
                }
            </div>
        )
    }
}

export default Users