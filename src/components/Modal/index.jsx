import { editarPost } from "../../../../fetchAPI"

export default function Modal({ setNewPostText, newPostText, showModal, setShowModal, postId }) {
    const handleEditPost = async () => {
        let resposta = await editarPost(postId, newPostText) /*--Envia id do post e novo conteúdo do post ------ */
        if (resposta) {
            alert("Post editado com sucesso")
            setShowModal(false)
            location.reload()
        } else {
            alert("Erro ao tentar editar post")
        }
    }
    return (
        <div className={`${showModal ? "flex" : "hidden"} h-screen w-screen bg-opacity-75 z-50 fixed top-0 left-0
         bg-black flex flex-col justify-center items-center `}>
            <div className="bg-white w-[300px] h-[250px] flex flex-col opacity-100 p-4 absolute rounded-sm">
                {/* --------------------Botão fechar Modal-------------------- */}
                <button className="text-black self-end " onClick={() => setShowModal(false)}>X</button>
                {/* ----------------Campo para mudança do post ------------------------ */}
                <textarea onChange={(e) => setNewPostText(e.target.value)} value={newPostText} 
                className="flex-1 mb-4 border-1 border-slate-300 bg-slate-100 p-2 rounded-lg" />
                {/* ---------------------------- Botões da tela modal ------------------------------------------------------*/}
                <div className="flex justify-around">
                    <button className="bg-orange-400 text-black px-4 py-2 rounded-lg"
                        onClick={() => setShowModal(false)}>
                        Cancelar
                    </button>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleEditPost()}>
                        Salvar Mudanças
                    </button>
                {/* -------------------------------------------------------------------------------------------- */}
                </div>
            </div>
        </div>
    )
}