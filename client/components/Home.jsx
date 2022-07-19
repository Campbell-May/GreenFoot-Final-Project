import React, { useState, useEffect } from 'react'

import { fetchAllChallenges } from '../apis/challenges'
import { fetchAllMyChallenges } from '../apis/myChallenges'
import ChallengeCard from './ChallengeCard'

function Home () {
  const [challenges, setChallenges] = useState([])
  const [myChallengesArr, setMyChallengesArr] = useState([])
  const [currentPointsState, setCurrentPointsState] = useState()

  useEffect(() => {
    refreshChallenges()
    refreshMyChallenges()
  }, [])

  useEffect(() => {
    if (currentPointsState < 20) {
      setChallenges(challenges.slice(0, 4))
    } else if (currentPointsState >= 20 && currentPointsState < 60) {
      setChallenges(challenges.slice(0, 8))
    } else {
      setChallenges(challenges)
    }
  }, [currentPointsState])

  const refreshChallenges = () => {
    fetchAllChallenges()
      .then((res) => {
        setChallenges(res)
      })
  }

  const refreshMyChallenges = () => {
    fetchAllMyChallenges()
      .then((results) => {
        setMyChallengesArr(results)
        setCurrentPointsState(results.reduce((total, challenge) => {
          if (challenge.completed) {
            return total + challenge.points
          } else {
            return total
          }
        }, 0))
      })
  }

  return (
    <>
      <h1 className="is-title has-text-centered">Challenges unlocked</h1>
      <div className='challenges-container'>
        {challenges.map(challenge => <ChallengeCard data={challenge} key={challenge.id} />)}
      </div>
    </>
  )
}

export default Home
