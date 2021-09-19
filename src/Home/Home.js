import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="text-center mt-4 pt-4">
            <Link to="/dashboard">
               <button className="btn btn-primary">Dashboard</button>
            </Link>
        </div>
    )
}
