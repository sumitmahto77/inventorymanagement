import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import AddProduct from '../AddProduct';

describe('Add Product component', () =>{
    test('Renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Router>
                <AddProduct />
                </Router>
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});