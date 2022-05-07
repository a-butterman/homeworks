import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type FilterType = 'all' | AffairPriorityType
export type AffairType = {
    id: number,
    name: string,
    priority: AffairPriorityType
}


// constants
const defaultAffairs: AffairType [] = [ // need to fix any
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType [], filter: string): any => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(affairsFilter => affairsFilter.priority === "high")
    if (filter === 'middle') return affairs.filter(affairsFilter => affairsFilter.priority === "middle")
    if (filter === 'low') return affairs.filter(affairsFilter => affairsFilter.priority === "low")
}

export const deleteAffair = (affairs: AffairType [], id: number): AffairType [] => { // need to fix any
    return affairs.filter(delAff => delAff.id !== id)
}



function HW2() {
    const [affairs, setAffairs] = useState <AffairType []>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
