import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: isInstructor} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async() =>{
            const response = await fetch(`http://localhost:5000/users/instructor/${user?.email}`, {headers: {
                authorization: `bearer ${token}`
            }})
            return response.json();
        }
    })
    return [isInstructor]
}

export default useInstructor;