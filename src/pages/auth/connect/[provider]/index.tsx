import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_API_URL
const ConnectWithProvider = () => {
    const router = useRouter()
    const [text, setText] = useState('Loading...');
    const { provider, access_token, id_token } = router.query
    // console.log('wait bro find it', router.query)

    useEffect(() => {
        // Successfully logged with the provider
        // Now logging with strapi by using the access_token (given by the provider) in props.location.search
        if (provider !== undefined && access_token !== undefined && id_token !== undefined) {
            fetch(`${backendUrl}/auth/${provider}/callback?access_token=${access_token}`)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
                    }
                    return res;
                })
                .then(res => res.json())
                .then(async res => {
                    // console.log(res)
                    await axios.post('/api/auth', {
                        data: {
                            ...res,
                            flag: "CONNECT"
                        }
                    })
                    // Successfully logged with Strapi

                    setText('You have been successfully logged in. You will be redirected in a few seconds...');
                    setTimeout(() => router.push(`/user-profile/${res.user.username}`), 3000); // Redirect to homepage after 3 sec
                })
                .catch(err => {
                    console.log(err);
                    setText('An error occurred, please see the developer console.')
                });
        }
    }, [provider, access_token, router, id_token]);
    
  return (
    <div>{text}</div>
  )
}

export default ConnectWithProvider
