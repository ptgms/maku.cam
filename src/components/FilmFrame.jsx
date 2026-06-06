// The signature visual: a photo printed inside a thick film-stock border
// with a handwritten-style caption beneath it.
export default function FilmFrame({ src, alt = '', caption = '', className = '', style }) {
  return (
    <figure className={`film-frame ${className}`.trim()} style={style}>
      <img src={src} alt={alt} />
      <figcaption className="film-caption">{caption}</figcaption>
    </figure>
  )
}
