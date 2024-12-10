import { useEffect } from "react";

function useCheckToken(setLoading, setLoggedIn) {
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token})
            }

            fetch('http://localhost:3000/auth/check', options)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    setLoggedIn(true);
                }
            })
            .catch(() => {
                localStorage.removeItem('token');
                window.location.href='/login';
            })
            .finally(() => {
                setLoading(false);
            })
        } else {
            setLoading(false);
        }
    }, [])
}

export default useCheckToken;