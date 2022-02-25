import nextConnect from 'next-connect'
import { get, post } from '../../src/controllers/user'


const route = nextConnect()

route.get(get)

route.post(post)


export default route