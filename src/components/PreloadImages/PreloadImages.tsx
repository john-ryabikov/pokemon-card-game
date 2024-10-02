import { ENEMIES } from "@/data/enemies.cards";
import { ENERGY } from "@/data/energy.cards";
import { POKEMONS_2 } from "@/data/pokemons-stage2.cards";
import { POKEMONS_3 } from "@/data/pokemons-stage3.cards";
import { POKEMONS } from "@/data/pokemons.cards";

import "./PreloadImages.scss"

export default function PreloadImages() {
    return (
        <div className='preload-imgs'>
            <div className='preload-imgs__pokemons'>
                {POKEMONS.map((p, i) => (
                    <div key={i}>
                        <img src={p.pokemonImg}/>
                        <img src={p.pokemonImgStore}/>
                        <img src={p.attackEffect}/>
                    </div>
                ))}
            </div>
            <div className='preload-imgs__pokemons-2'>
                {POKEMONS_2.map((p, i) => (
                    <div key={i}>
                        <img src={p.pokemonImg}/>
                        <img src={p.pokemonImgStore}/>
                    </div>
                ))}
            </div>
            <div className='preload-imgs__pokemons-3'>
                {POKEMONS_3.map((p, i) => (
                    <div key={i}>
                        <img src={p.pokemonImg}/>
                        <img src={p.pokemonImgStore}/>
                    </div>
                ))}
            </div>
            <div className='preload-imgs__enemies'>
                {ENEMIES.map((d, i) => (
                    <div key={i}>
                        <>
                            {d.enemies.map((e, i) => {
                                <img key={i} src={e.pokemonImg}/>
                            })}
                        </>
                    </div>
                ))}
            </div>
            <div className='preload-imgs__energy-cards'>
                {ENERGY.map((en, i) => (
                    <div key={i}>
                        <img src={en.cardImg}/>
                        <img src={en.cardIcon}/>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
