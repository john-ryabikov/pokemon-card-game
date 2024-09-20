import "./Loading.scss"

export default function Loading() {
  return (
        <p className='loading'>
            <span className='loading__loader'></span>
            <span className='loading__text'>Loading...</span>
        </p>
    )
}
