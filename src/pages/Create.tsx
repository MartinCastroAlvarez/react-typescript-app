import React, { useState, useCallback } from 'react'

import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

import Stack from 'react-bootstrap/Stack'

import { Text } from '../components/Text'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { FileInput } from '../forms/File'
import { TextInput } from '../forms/Text'
import { CallToAction } from '../forms/CallToAction'
import { Action } from '../forms/Action'
import { Link } from '../components/Link'
import { Progress } from '../components/Progress'
import { CategorySelect } from '../forms/Category'
import { DifficultySelect } from '../forms/Difficulty'
import { VideoFactory } from '../factories/Video'
import { ImageFactory } from '../factories/Image'
import { type Image } from '../models/Image'
import { type Video } from '../models/Video'
import { Gallery } from '../components/Gallery'
import { RecipeVideo } from '../components/Video'
import { type Recipe } from '../models/Recipe'
import { RecipeFactory } from '../factories/Recipe'
import { type Utensil } from '../models/Utensil'
import { UtensilFactory } from '../factories/Utensil'
import { type Ingredient } from '../models/Ingredient'
import { IngredientFactory } from '../factories/Ingredient'
import { Ingredients } from '../components/Ingredients'
import { Utensils } from '../components/Utensils'
import { Form } from '../forms/Form'
import { NutrientSelect } from '../forms/Nutrient'

const STEPS: number = 6

export const CreatePage1 = (): JSX.Element => {
  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    navigate('/create/step-2')
  }, [])

  return (
    <Stack className='aec-create-page' gap={3}>
      <Link href='/' value='Go Back'/>
      <Progress current={1} total={STEPS}/>
      <Title value='Create a Recipe'/>
      <Form>
        <Subtitle value='Name:'/>
        <TextInput onChange={() => {}} placeholder='Enter recipe name'/>
        <Subtitle value='Description:'/>
        <TextInput onChange={() => {}} placeholder='Enter recipe description'/>
        <Subtitle value='Category:'/>
        <CategorySelect onChange={() => {}}/>
        <Subtitle value='Difficulty:'/>
        <DifficultySelect onChange={() => {}}/>
        <Action onClick={handleSubmit} value="Next"/>
      </Form>
    </Stack>
  )
}

export const CreatePage2 = (): JSX.Element => {
  const navigate = useNavigate()
  const [video, setVideo] = useState<Video | null>(null)

  const handleSubmit = useCallback(() => {
    navigate('/create/step-3')
  }, [])

  const handleUpload = useCallback(() => {
    setVideo(VideoFactory)
  }, [setVideo])

  return (
    <Stack className='aec-create-page' gap={3}>
      <Link href='/create/step-1' value='Go Back'/>
      <Progress current={2} total={STEPS}/>
      <Title value='Add video'/>
      <RecipeVideo video={video}/>
      <Form>
        <FileInput onChange={handleUpload} value='Upload video'/>
        <Action onClick={handleSubmit} value="Next"/>
      </Form>
    </Stack>
  )
}

export const CreatePage3 = (): JSX.Element => {
  const navigate = useNavigate()
  const [images, setImages] = useState<Image[]>([])

  const handleSubmit = useCallback(() => {
    navigate('/create/step-4')
  }, [])

  const handleUpload = useCallback(() => {
    setImages(images => [...images, ImageFactory()])
  }, [setImages])

  return (
    <Stack className='aec-create-page' gap={3}>
      <Link href='/create/step-1' value='Go Back'/>
      <Progress current={3} total={STEPS}/>
      <Title value='Add images'/>
      <Gallery images={images}/>
      <Form>
        <FileInput onChange={handleUpload} value='Upload image'/>
        <Action onClick={handleSubmit} value="Next"/>
      </Form>
    </Stack>
  )
}

export const CreatePage4 = (): JSX.Element => {
  const navigate = useNavigate()
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  const handleSubmit = useCallback(() => {
    navigate('/create/step-5')
  }, [])

  const handleAdd = useCallback(() => {
    setIngredients(state => [...state, IngredientFactory()])
  }, [setIngredients])

  return (
    <Stack className='aec-create-page' gap={3}>
      <Link href='/create/step-3' value='Go Back'/>
      <Progress current={4} total={STEPS}/>
      <Title value='Add Ingredients'/>
      <Ingredients ingredients={ingredients}/>
      <Form>
        <TextInput onChange={() => {}} placeholder='Name'/>
        <TextInput onChange={() => {}} placeholder='Cost'/>
        <TextInput onChange={() => {}} placeholder='Calories'/>
        <FileInput onChange={() => {}} value='Upload image'/>
        <NutrientSelect onChange={() => {}}/>
        <Action onClick={handleAdd} value="Add"/>
        <Action onClick={handleSubmit} value="Next"/>
      </Form>
    </Stack>
  )
}

export const CreatePage5 = (): JSX.Element => {
  const navigate = useNavigate()
  const [utensils, setUtensils] = useState<Utensil[]>([])

  const handleSubmit = useCallback(() => {
    navigate('/create/step-6')
  }, [])

  const handleAdd = useCallback(() => {
    setUtensils(state => [...state, UtensilFactory()])
  }, [setUtensils])

  return (
    <Stack className='aec-create-page' gap={3}>
      <Link href='/create/step-4' value='Go Back'/>
      <Progress current={5} total={STEPS}/>
      <Title value='Add Utensils'/>
      <Utensils utensils={utensils}/>
      <Form>
        <TextInput onChange={() => {}} placeholder='Name'/>
        <TextInput onChange={() => {}} placeholder='Cost'/>
        <FileInput onChange={() => {}} value='Upload image'/>
        <Action onClick={handleAdd} value="Add"/>
        <Action onClick={handleSubmit} value="Next"/>
      </Form>
    </Stack>
  )
}

export const CreatePage6 = (): JSX.Element => {
  const navigate = useNavigate()
  const [recipe] = useState<Recipe>(RecipeFactory())

  const handleSubmit = useCallback(() => {
    toast.success('Created!')
    navigate('/recipe/new-recipe')
  }, [])

  return (
    <Stack className='aec-create-page' gap={3}>
      <Link href='/create/step-5' value='Go Back'/>
      <Progress current={6} total={STEPS}/>
      <Title value={recipe.name}/>
      <Text value={recipe.description}/>
      <RecipeVideo video={recipe.video}/>
      <Gallery images={recipe.images}/>
      <Ingredients ingredients={recipe.ingredients}/>
      <Utensils utensils={recipe.utensils}/>
      <Form>
        <CallToAction onClick={handleSubmit} value="Confirm"/>
      </Form>
    </Stack>
  )
}
