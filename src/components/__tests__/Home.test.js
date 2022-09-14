import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import Home from '../Home';

describe('Home', () =>{
    test('Renders correctly', () => {
        const tree = renderer.create(
        <Provider store={store}>
        <Router>
            <Home/>
        </Router>
        </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});