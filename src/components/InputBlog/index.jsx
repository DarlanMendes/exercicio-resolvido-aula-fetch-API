import { criarPost } from "../../../../fetchAPI"
export default function InputBlog({ postText, setPostText, listarPost }) {

    const handleTextPost = (e) => {
        setPostText(e.target.value)   //Controller do input do textarea --------------------
    }
    const handleCriarPost=async ()=>{
         await criarPost(postText)
         location.reload() // ----------recarrega a página para que haja atualização dos posts ----------------------
    }
    return (
        <>
        {/* ----------Campo que usuario digita texto para novo post----------------- */}
            <textarea className='shadow-lg min-w-[300px] min-h-[100px] px-8 py-2 text-gray-600 bg-white' 
                placeholder='Escreva o que está pensando aqui'
                onChange={(e) => handleTextPost(e)} value={postText} />
        {/* ------------------------------------------------------------------------- */}

            {/* ------- Botão que inicia a requisição POST para criar um novo post para o blog----------- */}
            <button
                className='px-4 py-2 text-white bg-blue-800 rounded-lg max-w-[200px]'
                onClick={() =>handleCriarPost() }
            >
                Criar Post
            </button>
            {/* ---------------------------------------------------------------------- */}
        </>
    )
}