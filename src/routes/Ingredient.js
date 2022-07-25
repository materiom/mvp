// Dependencies
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Pictures

// Hooks
import useUpdateTitle from '../hooks/UpdatePageTitle'

// Components
import Header from '../components/Header'

export default function Ingredient(props) {
    // update page title
    useUpdateTitle(props.title)
    // get parameters from the router url
    const params = useParams()

    // set initial state
    const [ingredient, updateIngredient] = useState({})

    // dummy fetch ingredient data
    const getIngredient = () => {
        fetch(`https://materiom.org/api/ingredient/${params.ingredientId}`)
            .then(function (response) {
                // The response is a Response instance.
                // You parse the data into a useable format using `.json()`
                return response.json()
            })
            .then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                updateIngredient(data)
            })
    }

    // update state upon first render
    useEffect(() => {
        getIngredient()
        // if you return a function from useEffect is will fire
        // when the component is removed from the DOM to help
        // keep state clean
        return () => updateIngredient({})
    }, [])

    return (
        <div className=" custom-scrollbar flex max-h-screen min-h-screen w-full flex-col overflow-x-scroll bg-MatLightGrey">
            {/* Pass through a string to tell the header which tab to highlight */}
            <Header activePage="analyse" />

            <div className="custom-scrollbar flex h-full w-full flex-wrap justify-between bg-MatLightGrey px-36 py-10">
                {ingredient.gallery ? (
                    <img
                        src={`https://materiom.org/storage/${ingredient.gallery[0].src}`}
                        alt=""
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
