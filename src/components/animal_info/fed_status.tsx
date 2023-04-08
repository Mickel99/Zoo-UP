import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ISingelAnimal } from '../../models/ISingleAnimal'
import '../animal_info/animal_info.scss'

interface IFedStatusProps {
  animal: ISingelAnimal
  feedAnimal(animal: ISingelAnimal): void
}
export const FeedStatus = (props: IFedStatusProps) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="fed-status">
        <p className="lastFeed"> senast matad:</p>{' '}
        <p className="lastFeed">{props.animal.lastFed}</p>
        <br />
        {props.animal.isFed ? (
          <button type="button" className="btn primary" disabled>
            {props.animal.name} har fått mat
          </button>
        ) : (
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              props.feedAnimal(props.animal)
            }}
          >
            Mata {props.animal.name} 
          </button>
        )}
        <div className="back">
          <button
            type="button"
            className="btn primary"
            onClick={() => navigate(-1)}
          >
            Gå Tillbaka
          </button>
        </div>
      </div>
    </>
  )
}
