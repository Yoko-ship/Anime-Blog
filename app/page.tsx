import classes from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className={classes.home}>
        <h1>Welcome to Gates</h1>
        <p>
          Get the latest news on your favourite mangas, anime and manhwa around
          the world!
        </p>
      </div>
      <ul className={classes.category}>
        <li><Link href="/blog/action">Action</Link></li>
        <li><Link href="/blog/comedy">Comedy</Link></li>
        <li><Link href="/blog/drama">Drama</Link></li>
        <li><Link href="/blog/adventure">Adventure</Link></li>
        <li><Link href="/blog/fantasy">Fantasy</Link></li>
        <li><Link href="/blog/horror">Horror</Link></li>
      </ul>
    </>
  );
}
