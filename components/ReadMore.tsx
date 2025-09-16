import React from 'react'
import classes from "@/app/blog/page.module.css"

interface ReadMoreProps{
    id:string,
    number_of_words?:number,
    text:string
}

export const ReadMore = ({id,text,number_of_words = 36}:ReadMoreProps) => {
    const splittedText = text.split(" ")
    const itCanOverflow = splittedText.length > number_of_words
    const beginText = itCanOverflow ? splittedText.slice(0,number_of_words - 1).join(" "): text
    const endText = splittedText.slice(number_of_words - 1).join(" ")

  return (
    <p id={id}>
        {beginText}
        {itCanOverflow && (
            <>
                <span className={classes.hidden}>
                    {endText}
                </span>
                <button className={classes.ReadFull}><a href={`/blog/${id}`}>Read Full</a></button>
            </>
        )}
    </p>
  )
}

