import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, gql, useQuery} from '@apollo/client'
import {ErrorResponse, onError} from '@apollo/client/link/error'
import { useState } from 'react';





// const errorLink = onError(({graphqlErrors, networkError}) => {
// const errorLink = onError(({graphqlErrors}: {graphqlErrors: ErrorResponse}) => {
//     if(graphqlErrors){
//         graphqlErrors.map(({message, location, path}) => {
//             alert(`graphql Error: ${message}`)
//         })
//     }
// });

// const link = from([
//     errorLink,
//     new HttpLink({uri: "https://api.github.com/graphql"})
// ]);

// const client = new ApolloClient({
    
//     cache: new InMemoryCache(),
//     uri: 'https://api.github.com/graphql'
//     // link: link
// });

const GET_COMMITS = gql`
    query {
        viewer {
            login
        }
    }
`;

export default function GithubInfo(){

    const {data} = useQuery(GET_COMMITS)
    const [commits, setCommits] = useState();

    console.log('GraphQL request data: ', data)

    return(
        // <ApolloProvider client={client}>
            <section>


            </section>
        // </ApolloProvider>
    )
}