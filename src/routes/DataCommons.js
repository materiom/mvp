// Dependencies
import React from 'react'
import Header from '../components/Header'

// Hooks
import useUpdateTitle from '../hooks/UpdatePageTitle'

// Components
import DataFilterMenu from '../components/dataCommons/DataFilterMenu'
import DataSearchBar from '../components/dataCommons/DataSearchBar'
import DataSearchDisplay from '../components/dataCommons/DataSearchDisplay'

export default function UserDirectory(props) {
    useUpdateTitle(props.title)

    return (
        <div className="flex min-h-screen w-full flex-1 flex-col overflow-hidden bg-neutral-100">
            {/* Pass through a string to tell the header which tab to highlight */}
            <Header activePage={'analyse'} />
            <div className="flex min-h-[80vh] w-full flex-1 overflow-hidden px-36 pt-5">
                <div className="flex h-full w-1/3 flex-col overflow-hidden pr-5">
                    <DataFilterMenu />
                </div>
                <div className="flex max-h-[75vh] w-2/3 flex-col overflow-hidden rounded-b-lg">
                    <DataSearchBar />
                    <DataSearchDisplay />
                </div>
            </div>
        </div>
    )
}
