import PostUnico from "./PostUnico"

export default function Posts(){
    
    const post = [{usuario: "meowed", imgUsuario: "assets/img/meowed.svg", 
                     imgPost: "assets/img/gato-telefone.svg", curtidoPor:"respondeai",
                     imgCurtidoPor: "assets/img/respondeai.svg", qtdCurtidas:"101.523"},
                  {usuario: "barked", imgUsuario: "assets/img/barked.svg", 
                     imgPost: "assets/img/dog.svg", curtidoPor:"adorable_animals",
                     imgCurtidoPor: "assets/img/adorable_animals.svg", qtdCurtidas:"99.159"}]
    
    return (
        <div class="posts">
            
            {post.map(p => (
                <PostUnico usuario={p.usuario} 
                        imgUsuario={p.imgUsuario} 
                        imgPost={p.imgPost} 
                        curtidoPor={p.curtidoPor} 
                        imgCurtidoPor={p.imgCurtidoPor} 
                        qtdCurtidas={p.qtdCurtidas} /> ))}
        </div>
    )
}
