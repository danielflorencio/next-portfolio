import { gql, useQuery} from '@apollo/client'
import { useEffect, useState } from 'react';

// const GET_COMMITS = gql`
// query {
//     viewer {
//       repositories(first: 100) {
//         nodes {
//           defaultBranchRef {
//             target {
//               ... on Commit {
//                 history {
//                   totalCount
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   } 
// `;

const GET_CONTRIBUTION_DAYS = gql`
query {
    viewer {
        repositories(isFork: false, privacy: PUBLIC) {
            totalCount
        }
        contributionsCollection {
            contributionCalendar {
                totalContributions
                weeks {
                    contributionDays {
                        contributionCount
                    }
                }
            }
        }
    }
}
`

export default function GithubInfo(){

    // const { data: commitsData } = useQuery(GET_COMMITS);
    const { data: contributionData } = useQuery(GET_CONTRIBUTION_DAYS);
    const [commits, setCommits] = useState();
    const [streak, setStreak] = useState<number>();
    const [repos, setRepos] = useState();

    // useEffect(() => {
    //     let commitCount: number = 0;
    //     if(commitsData){
    //         for(let i = 0; i < commitsData.viewer.repositories.nodes.length; i++){
    //             if(commitsData.viewer.repositories.nodes[i].defaultBranchRef){
    //                 commitCount = commitCount + Number(commitsData.viewer.repositories.nodes[i].defaultBranchRef.target.history.totalCount)
    //             }
    //         }
    //     }
    //     setCommits(commitCount)
    // }, [commitsData])

    useEffect(() => {
        let streaks: number[] = [0];
        if(contributionData){
            console.log('ContributionData: ', contributionData)
            for(let i = 0; i < contributionData.viewer.contributionsCollection.contributionCalendar.weeks.length; i++){
                for(let n = 0; n < contributionData.viewer.contributionsCollection.contributionCalendar.weeks[i].contributionDays.length; n++){
                    if(contributionData.viewer.contributionsCollection.contributionCalendar.weeks[i].contributionDays[n].contributionCount > 0){
                        streaks[streaks.length - 1] = streaks[streaks.length - 1] + 1
                    } else{
                        if(streaks[streaks.length - 1] !== 0){
                            streaks.push(0)
                        }
                    }
                }
            }
            const highestStreak = Math.max(...streaks)
            setStreak(highestStreak)
            setCommits(contributionData.viewer.contributionsCollection.contributionCalendar.totalContributions)
            setRepos(contributionData.viewer.repositories.totalCount)
        }
    }, [contributionData]) 

    console.log('Commits: ', commits)

    return(
        <section className='w-full flex flex-col justify-center items-center mb-12'>
            <h2 className='font-bold text-4xl text-center'>The best developers are always improving themselves.</h2>
            <h3 className='text-2xl mt-8 mb-20 text-center'>See my Github stats as my coding skills grow sharper every single day.</h3>
            <div className='flex pt-8 gap-24 flex-wrap justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg font-semibold'>Commits in the last 12 months</div>
                    <div className='border-solid border-x-2 border-slate-400 rounded-full text-2xl h-48 w-48 flex items-center justify-center mt-8'>
                        {commits && commits} ++
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg font-semibold'>Highest streak</div>
                    <div className='border-solid border-x-2 border-slate-400 rounded-full text-2xl h-48 w-48 flex items-center justify-center mt-8'>
                        {streak && streak}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg font-semibold'>Total Contributed repos</div>
                    <div className='border-solid border-x-2 border-slate-400 rounded-full text-2xl h-48 w-48 flex items-center justify-center mt-8'>
                        {repos && repos} ++
                    </div>
                </div>
            </div>
        </section>
    )
}