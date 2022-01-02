import React from 'react'
import ResultCard from './mini-components/ResultCard'

export default function Results({ results }) {
    return (
        <div className='p-2 grid gap-6
        sm:grid-cols-2 sm:px-5
        lg:grid-cols-3 
        xl:grid-cols-4
        2xl:grid-cols-5
        3xl:grid-cols-6
        '>

            {results ? results.map((result) => {
                return (
                    <ResultCard key={result.id} result={result} />
                )
            }) :
                <p>
                    hi
                </p>
            }
        </div>
    )
}
