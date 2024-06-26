import PropTypes from 'prop-types'

export const GifItem = ({id,url,title}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.PropTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}