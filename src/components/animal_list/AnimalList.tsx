import { useEffect, useState } from 'react'
import { IAnimals } from '../../models/IAnimalList'
import { getAnimals } from '../../services/animal_service'
import './animal_list.scss'
import '../../style/container.scss'
import { SingelAnimal } from '../single_animal/SingleAnimal'
import { getAnimalFromLs, saveAnimalToLs } from '../../services/storage_service'

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimals[]>(getAnimalFromLs())

  useEffect(() => {
    const getData = async () => {
      let AnimalsFromApi = await getAnimals()
      setAnimals(AnimalsFromApi)
      saveAnimalToLs(AnimalsFromApi)
    }

    let animalList: IAnimals[] = getAnimalFromLs<IAnimals>()
    if (animalList.length !== 0) {
      return
    } else {
      getData()
    }
  })

  let animalHtml = animals.map((animal) => {
    return <SingelAnimal animal={animal} key={animal.id}></SingelAnimal>
  })

  return (
    <section id="animals">
      <div className="big-container">{animalHtml}</div>
    </section>
  )
}
