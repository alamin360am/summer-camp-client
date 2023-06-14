import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() =>{
            const response = await fetch(`https://summer-camp-server-alamin360am.vercel.app/carts?email=${user?.email}`, {headers: {
                authorization: `bearer ${token}`
            }})
            return response.json();
        },
      })
      return [cart, refetch]
}

export default useCart;