function ContentCard({content}){
  // console.log(content)
  return(
    <div className='content__card'>
      <h2>{content.name}</h2>
      <p>{content.description}</p>
      <p>fart</p>
    </div>
  )
}

export default ContentCard;
