import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, gql, useQuery} from '@apollo/client'
import {ErrorResponse, onError} from '@apollo/client/link/error'
import { useEffect, useState } from 'react';





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
      repositories(first: 100) {
        totalCount
        nodes {
          name
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
  
`;

export default function GithubInfo(){

    const {data} = useQuery(GET_COMMITS)
    const [commits, setCommits] = useState(0);

    useEffect(() => {
        let commitCount: number = 0;
        if(data){
            for(let i = 0; i < data.viewer.repositories.nodes.length; i++){
                if(data.viewer.repositories.nodes[i].defaultBranchRef){
                    commitCount = commitCount + Number(data.viewer.repositories.nodes[i].defaultBranchRef.target.history.totalCount)
                }
            }
        }
        setCommits(commitCount)
    }, [data])

    console.log('Commits: ', commits)
    console.log('GraphQL request data: ', data)

    return(
        // <ApolloProvider client={client}>
            <section>


            </section>
        // </ApolloProvider>
    )
}