// Khai báo nhanh rfc

export default function RenderingElement() {
    const user = "Cybersoft";
    const age = 18;

    const renderNews = () => {
        return (
            <div>
                <h1>News Test</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit soluta, quia quo cum, rem dolorum dolore ducimus culpa eaque officiis ex maiores autem. Veritatis, reiciendis.</p>
            </div>
        );
    };
    const renderSong = () => {
        return (
            <div>
                <h1>New Song</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit soluta, quia quo cum, rem dolorum dolore ducimus culpa eaque officiis ex maiores autem. Veritatis, reiciendis.</p>
            </div>
        );
    };

  return (
    <div>
      <h1>RenderingElement</h1>
      <div>{user}</div>
      <div>age : {age} </div>
      <div>
        {renderNews()}
        {renderSong()}

      </div>
    </div>
  )
}
