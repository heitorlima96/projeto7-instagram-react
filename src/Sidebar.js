import Sugestao from "./Sugestao"
import Usuario from "./Usuario"

export default function Sidebar(){
  const usuario={nomePerfil: "'Catana'", nomeConta: "catanacomics", imgPerfil: "assets/img/catanacomics.svg"}  
  const sugestoes = [{nome:"bad.vibes.memes", razao:"Segue você", img: "assets/img/bad.vibes.memes.svg"},
                    {nome:"chibirdart", razao:"Segue você", img: "assets/img/chibirdart.svg"},
                    {nome:"razoesparaacreditar", razao:"Novo no Instagram", img: "assets/img/razoesparaacreditar.svg"},
                    {nome:"adorable_animals", razao:"Segue você", img: "assets/img/adorable_animals.svg"},
                    {nome:"smallcutecats", razao:"Segue você", img: "assets/img/smallcutecats.svg"}]
  
  return(
        <div class="sidebar">
          <Usuario nomePerfil={usuario.nomePerfil} nomeConta={usuario.nomeConta} img={usuario.imgPerfil}/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestoes.map(s => <Sugestao nome={s.nome} razao={s.razao} img={s.img} />)}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2022 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}