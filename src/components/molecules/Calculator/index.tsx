import fetchData from './fetch'

const Calculator = () => {
  const data = fetchData()
  console.log(data)
  return null
}

export default Calculator
