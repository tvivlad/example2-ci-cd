import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const List = () => {
  const [pizzaList, setPizzaList] = useState([])
  const getPizzaList = async () => {
    const response = await axios.get('https://dummyjson.com/recipes')
    console.log(response.data.recipes)
    setPizzaList(response.data.recipes)
  }

  useEffect(() => {
    getPizzaList()
  }, [])
  return (
    <div>
      {pizzaList.map((item) => (
        <Card name={item.name} image={item.image} />
      ))}
    </div>
  )
}

export default List
