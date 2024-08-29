import { gql, request } from "graphql-request"


const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/cm0c23u5e00nv08w3gdhv6iib/master'

const GET_CAR_LIST = gql`
 query CarLists {
  carLists{
    carAvg
    carType
    carBrand
    name
    price
    id
    publishedAt
    updatedAt
    createdAt
    image{
      url
    }
  }
}
`


// Asynchronous function to fetch the car list
export const getCarlist = async () => {
  try {
    // Make the API request using await
    const result = await request(
     MASTER_URL,
      GET_CAR_LIST
    )
    return result
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching car list:", error)
    throw error
  }
}

const GET_CAR_LOCATION = gql `
query storeLocation {
  storesLocations{
    address
  }
}
`

export const getLocation = async () => {
  try {
    // Make the API request using await
    const result = await request(
      MASTER_URL,
      GET_CAR_LOCATION
    )
    return result
  } catch (error) {
    // Handle errors appropriately
    console.error("Error fetching car list:", error)
    throw error
  }
}
