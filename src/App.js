import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import List from './components/List'

function App() {
  return (
    <div>
      <h2>Пицца на любой вкус!</h2>
      <List />
    </div>
  )
}

export default App
