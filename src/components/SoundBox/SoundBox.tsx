import { useGameStore } from "@/store/game.store";
import Button from "../Button/Button";

export default function SoundBox() {

    const { isSounds, changeSounds } = useGameStore()

    return (
        <div className='difficult-page__sound-box'>
            <h1 className='difficult-page__title'>Звуки и музыка</h1>
            <Button 
                subClass="sound"
                actionFn={() => changeSounds()}
            >
                {isSounds && <img src="img/Icons/sound_on.svg" alt="Sound On" draggable="false"/>}
                {!isSounds && <img src="img/Icons/sound_off.svg" alt="Sound On" draggable="false"/>}
            </Button>
        </div>
    )
}
