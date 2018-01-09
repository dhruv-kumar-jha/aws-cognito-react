import Amplify from 'aws-amplify';
import Dashboard from './pages/Dashboard';
import { withAuthenticator } from 'aws-amplify-react';


Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:284605fe-d95e-4bb1-8e88-c84d875a3cec',
    region: 'us-east-1',
    userPoolId: 'us-east-1_D1hsLUCvG',
    userPoolWebClientId: '6ap5u48i154ibuv1l0b5mr29hp',
  }
});


export default withAuthenticator(Dashboard, { includeGreetings: true });

