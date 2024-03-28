import React from 'react'
import './Map.css'

function Map() {
    return (
        <div>
            <>
                <iframe width="560"
                    height="315"
                    src=
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790405!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711103939215!5m2!1sen!2sin"
                    title="GeeksforGeeks"
                    style={{
                        width: "100%",
                        height: "55svh"
                    }}
                >
                </iframe>
            </>
        </div>
    )
}

export default Map
