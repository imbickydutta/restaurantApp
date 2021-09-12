// import { useState } from 'react'
import data1 from './data.json'
import Details from './Details.jsx'
import Filter from './Filters.jsx'
import { useState } from 'react'

import '../../App.css'






// console.log(data);
export default function RestaurantDetails() {
    const [star, setStar] = useState(0)
    const [payType, setPayType] = useState(null)
    const [sortType, setSortType] = useState(null)
    const [data, setData] = useState(data1)


    function handleStarClick(value) {
        setStar(value)
    }

    function handlePayType(value) {
        setPayType(value)
    }

    function handleAll() {
        setPayType(null)
        setStar(0)
        setSortType(null)
    }

    function handleSort(value) {
        setSortType(value)
    }

    function handleAddRest(value) {
        for (let k in value) {
            if (value[k] === "") {
                return
            }
        }

        let newData = [value, ...data]
        setData(newData)
    }

    return (
        <div className="filter-container">
            <div>
                <Filter handleStarClick={handleStarClick} handlePayType={handlePayType} handleAll={handleAll} handleSort={handleSort} stars={star} payType={payType} sortType={sortType} handleAddRest={handleAddRest} />
            </div>
            <div className="container">
                <Details data={data.filter(item => item.star >= star).filter(item => payType === null ? item != null : item.payment === payType).sort((a, b) => sortType === null ? a.cost === b.cost : sortType === 1 ? a.cost - b.cost : b.cost - a.cost)} />
            </div>
        </div>
    )
}
