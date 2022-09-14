import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';
import Registration from '../Registration';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Registration component Snapshot', () =>{
    test('Renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
            <Registration/>
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });    
});

describe ('Registration page rendering of elements', () =>{
    beforeEach(() => {
        render (<Provider store={store}><Registration/></Provider>)
    });

    test('renders correct heading for Registration page', () =>{
        const heading = screen.getByRole('heading',{level:1});
        expect(heading).toHaveTextContent('CREATE AN ACCOUNT');
    });
});