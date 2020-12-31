import './App.css';
import classNames from 'classnames'

const Col = ({ rowKey, colKey, cellWidth, sticky, fitContents }) => (
  <div
    className={classNames('col', { sticky })}
    style={{ flex: fitContents ? '1' : `0 0 ${cellWidth}px` }}
  >
    <p>{rowKey}-{colKey}</p>
  </div>
)

const Row = ({ rowKey, sticky, fitContents, cellHeight, cellWidth, cols }) => (
  <div
    className={classNames('row', { sticky })}
    style={{ flex: `0 0 ${cellHeight}px` }}
  >
    <Col {...{ cellWidth, rowKey, fitContents }} colKey="S" sticky />
    {cols.map((x, i) => (
      <Col {...{ cellWidth, rowKey, fitContents }} key={i} colKey={i} />
    ))}
  </div>
)

const ScrollContainer = ({ rows, cellHeight = 100, cellWidth = 150, fitContents }) => (
  <div className="scroll-container">
    <div className="board" style={{...(fitContents ? {} : { width: cellWidth * rows[0]?.length })}}>
      <Row {...{ fitContents, cellHeight, cellWidth }} cols={rows[0]} rowKey="H" sticky/>
      {rows.map((row, i) => (
        <Row {...{ fitContents, cellHeight, cellWidth }} cols={row} key={i} rowKey={i}/>
      ))}
    </div>
  </div>
)

const App = () => {
  const cols = Array.from({ length: 12 });
  const rows = Array.from({ length: 12 }).map(() => cols);

  return (
    <div className="app">
      <ScrollContainer rows={rows} fitContents={false} />
    </div>
  );
}

export default App;
