function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: '"Comic Sans MS", fantasy', color: '#4b9be1' }}>
        {"Cloudstar's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'Arial, Helvetica, cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        click the buttons below
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'lavender',
          color: 'gray'
        }}
        onClick={() => alert('Welcome!!:D')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'skyblue',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          const name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;
