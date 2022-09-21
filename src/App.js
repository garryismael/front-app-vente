import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auths/Login';
import Registration from './components/auths/Registration';
import ProductDetail from './components/product/Detail';
import About from './pages/About';
import Cart from './pages/Cart';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import User from './pages/User';
import ChangePassword from './views/user/ChangePassword';
import EditUser from './views/user/Edit';

export default function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}>
				<Route
					index
					element={<Shop />}
				/>
				<Route
					path='about'
					element={<About />}
				/>
				<Route
					path='cart'
					element={<Cart />}
					children
				/>
				<Route
					path='shop'
					element={<Shop />}
				/>
				<Route
					path='products/:id'
					element={<ProductDetail />}
				/>
				<Route
					path='login'
					element={<Login />}
				/>
				<Route
					path='register'
					element={<Registration />}
				/>
				<Route
					path='user'
					element={<User />}
				/>
				<Route
					path='user/edit'
					element={<EditUser />}
				/>
				<Route
					path='user/password/edit'
					element={<ChangePassword/>}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	);
}

