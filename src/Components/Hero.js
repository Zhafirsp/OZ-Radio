import React, { useState } from "react";
import '../Assets/Css/hero.css';
import Card from "./Card";
import { hero } from "../Data/dummyData";

const Hero = () => {
  const [items, setItems] = useState(hero)

  return (
    <>
      <section className='hero' data-aos="fade-down" >
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

export default Hero