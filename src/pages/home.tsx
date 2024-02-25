
import React from 'react';
import Link from 'next/link'


export default function Home(){

    return(
        <>
            <div className="spacingInsideSticky">
                <img
                    src = "/logo.png"
                    width={120}
                    height={120}                        
                />
                <Link href="login"className="stickySpaceLink">Login </Link>
                <Link href="topics" className="stickySpaceLink"> CS Topics</Link>
            </div>

            <img
                className="image-title"
                src = "/title.png"            
                width={750}
                height={750}
            />

            <p className="descript-text">A newer and more <span className="text-1">intuitive</span> way to learn <span className="text-2">fundamental Data Structures</span> like arrays and hash maps</p>

            <a href="topics">
                <button className="neon-button">
                        Start Here
                </button>
            </a>
        </>
    )
}