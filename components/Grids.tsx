'use client'
import React, { useEffect, useState } from 'react'
import classes from "@/app/blog/page.module.css"
import Image from 'next/image'
import { ReadMore } from './ReadMore'

export const Grids:React.FC<{id:number,genre:string}> = ({id,genre})=>{
  const [data,setData] = useState<[]>()
  useEffect(() =>{
    const getData = async() =>{
      const response = await fetch(`https://api.jikan.moe/v4/anime?genres=${id}&page=2`)
      const data = await response.json()
      const mapped = data.data.map((arr:any) => arr)
      setData(mapped)
    }
    getData()
  },[])
  return (
    <>
    {data?.map((arr: any,index) => (
      <div className={classes.grid} key={index}>
        <div className={classes.images}>
          <Image
            loader={() => arr.images.webp.large_image_url}
            src={arr.images.webp.large_image_url}
            alt="anime-picture"
            height={250}
            width={500}
          ></Image>
        </div>
        <div className={classes.description}>
          <p>{genre}</p>
          <h2>{arr.title_english}</h2>
          <ReadMore id={arr.mal_id} text={arr.synopsis}></ReadMore>
        </div>
      </div>
    ))}
  </>
  )
}
