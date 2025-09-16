"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import Image from "next/image";

function BlogDetails({ params }: { params: Promise<{ blogid: number }> }) {
  const [anime, setAnime] = useState<any>([]);
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      const id = (await params).blogid;

      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
      const data = await response.json();
      setAnime([data.data]);
      console.log(data.data);
      const fromAired = data.data.aired.from;
      const toAired = data.data.aired.to;
      const dateObject = new Date(fromAired);
      const from =
        dateObject.getFullYear() +
        " " +
        (dateObject.getMonth() + 1) +
        " " +
        dateObject.getDate();
      const toDateObject = new Date(toAired);
      const to =
        toDateObject.getFullYear() +
        " " +
        (toDateObject.getMonth() + 1) +
        " " +
        toDateObject.getDate();
      setFrom(from);
      setTo(to);
    };
    getData();
  }, []);

  return (
    <>
      {anime.map((data: any) => (
        <div key={data.mal_id} className={classes.anime_blog}>
          <Image
            loader={() => data.images.webp.large_image_url}
            src={data.images.webp.large_image_url}
            alt="anime-picture"
            width={600}
            height={350}
          ></Image>

          <div className={classes.title_descrip}>
            <h2>{data.title_english}</h2>
            <p>{data.synopsis}</p>
          </div>

          <div className={classes.additional}>
            <span>
              📅 {from} - {to}{" "}
            </span>
            <a href={data.url}>📎 {data.title_english}</a>
          </div>

          <div className={classes.embed}>
            <iframe
              src={data.trailer.embed_url}
              width={800}
              height={400}
            ></iframe>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogDetails;
