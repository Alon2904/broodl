import React from 'react'

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
    const { children } = props
    return (
        <main className='flex-1 flex flex-col p-4 sm:p-8'>
            {children}
        </main>
    )
}

export default Main