import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);
function Home({ user }) {
    return (
        <>
            <h1>Hello {user.username}</h1>
            <div>Home</div>
        </>
    )
}

export default withAuthenticator(Home);
