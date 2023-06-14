import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: isAdmin} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() =>{
            const response = await fetch(`https://summer-camp-server-alamin360am.vercel.app/users/admin/${user?.email}`, {headers: {
                authorization: `bearer ${token}`
            }})
            return response.json();
        }
    })
    return [isAdmin]
}

export default useAdmin;