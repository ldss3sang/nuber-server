import { Greeting } from './../../../types/graph.d';

const resolvers = {
    Query: {
        sayHello: () : Greeting => {
            return {
                error: false,
                text: "Hey hello how are you?"
            }
        }
    }
}

export default resolvers;