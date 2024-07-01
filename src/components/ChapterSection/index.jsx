const ChapterSection = ({classValue, id, children}) => {

  return (
    <section className={classValue} id={id}>
      <div className="chapter-block">
        <span className="top-indent" aria-hidden="true"></span>
        <div className="chapter-content">
          {children}
        </div>
        <span className="bottom-indent" aria-hidden="true"></span>
      </div>
    </section>
  )
}

export default ChapterSection