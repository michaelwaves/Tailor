export default function Index() {
  return (
    <div>
      <div id="title-container"></div>
      <h1>Welcome to TAIlor</h1>
      <p>Your personal fashion assistant</p>
      <div id="clothes-container">
        <div id="tops-container">
          <h2>Tops</h2>
        </div>
        <div id="pants-container">
          <h2>Pants</h2>
        </div>
      </div>
      <div id="buttons-container">
        <button id="add-clothes-button">Add</button>
        <button id="reset-clothes-button">Reset</button>
      </div>

    </div>
  );
}
