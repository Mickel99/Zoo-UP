import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ISingelAnimal } from '../../models/ISingleAnimal'
import { FeedStatus } from './fed_status'
import { getAnimalFromLs, saveAnimalToLs } from '../../services/storage_service'
import '../animal_info/animal_info.scss';
import '../../style/container.scss'

export const AnimalDetails = () => {
  const [animal, setAnimal] = useState<ISingelAnimal>({
    id: 0,
    name: '',
    yearOfBirth: 0,
    latinName: '',
    longDescription: '',
    imageUrl: '',
    isFed: false,
    lastFed: '',
    medicine: '',
  })

  let param = useParams() as { id: string }

  useEffect(() => {
    let currentDate = new Date().getTime()
    let animalFromLS: ISingelAnimal[] = getAnimalFromLs()


    for (let i = 0; i < animalFromLS.length; i++) {
      if (
        +currentDate - new Date(animalFromLS[i].lastFed).getTime() >
        10800000
      ) {
        animalFromLS[i].isFed = false
      }

      if (+param.id === animalFromLS[i].id) {
        setAnimal(animalFromLS[i])
      }
    }
    saveAnimalToLs(animalFromLS)
  }, [param.id])

  const feedAnimal = (animal: ISingelAnimal) => {
    animal.isFed = true
    let feedTime = new Date()
    animal.lastFed = feedTime.toLocaleString()
    setAnimal({ ...animal })

    let animalFromLS: ISingelAnimal[] = getAnimalFromLs()

    for (let i = 0; i < animalFromLS.length; i++) {
      if (animal.id === animalFromLS[i].id) {
        animalFromLS[i] = { ...animal }
      }
    }

    saveAnimalToLs(animalFromLS)
  }

  return (
    <section id="animals">
      <div className="singelAnimal-container ">
        <div className="singelAnimal-container__imgWrapper">
          <img
            src={animal.imageUrl}
            alt={animal.name}
            onError={(e) =>
              (e.currentTarget.src =
                'https://img.theculturetrip.com/wp-content/uploads/2021/11/2c1074k-e1638197792976.jpg')
            }
          />
        </div>
        <div className="singelAnimal-container__details">
          <p className="singelAnimal-container__details__fakta">
            {' '}
            Faktaruta om {animal.name}
          </p>
          <h1 className="singelAnimal-container__details__name">
            {' '}
            Namn: {animal.name}
          </h1>
          <h2 className="singelAnimal-container__details__latinName">
            Latinskt Namn: {animal.latinName}
          </h2>
          <span className="singelAnimal-container__details__bith">
            Ålder: {2023 - animal.yearOfBirth}
          </span>
          <span className="singelAnimal-container__details__bith">
            medicinering: {animal.medicine}
          </span>
        </div>
        <div className="singelAnimal-container__text">
          <p className="singelAnimal-container__text__desc">
            {animal.longDescription}
          </p>
        </div>
        <FeedStatus animal={animal} feedAnimal={feedAnimal} />
      </div>
    </section>
  )
}
