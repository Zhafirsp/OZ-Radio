import React, { useState } from "react"
import "./news.css"
import Card from "./Card"
import { hero } from "../../../Data/dummyData"

const News = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default News
