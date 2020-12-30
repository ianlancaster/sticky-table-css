import './App.css';

const Col = ({ rowKey, colKey }) => (
  <div className="col">
    <p>{rowKey}-{colKey}</p>
  </div>
)

const StickyCol = ({ rowKey }) => (
  <div className="col sticky-col">
    <p>{rowKey}-S</p>
  </div>
)

const Row = ({ rowKey }) => {
  const cols = Array.from({ length: 12 });

  return (
    <div className="row">
      <StickyCol rowKey={rowKey} />
      {cols.map((x, i) => <Col key={i} colKey={i} rowKey={rowKey} />)}
    </div>
  )
}

const StickyRow = ({ height }) => {
  const cols = Array.from({ length: 12 });

  return (
    <div className="row sticky-row">
      {cols.map((x, i) => <Col key={i} colKey={i} rowKey='H'/>)}
    </div>
  )
}

const CornerMask = () => (
  <div className="col corner-mask" />
)

const App = () => {
  const rows = Array.from({ length: 12 });

  return (
    <div className="app">
      <div className="scroll-wrapper">
        <div className="scroll-container">
          <div className="board">
            <CornerMask />
            <StickyRow />
            {rows.map((x, i) => <Row key={i} rowKey={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
