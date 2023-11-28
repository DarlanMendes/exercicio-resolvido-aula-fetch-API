import { deletarPost } from "../../../../fetchAPI"
import Modal from "../Modal"
import { useState } from "react"
export default function CardBlog({ post }) {
    const [newPostText, setNewPostText] = useState(post.postText)
    const[showModal, setShowModal] = useState(false)

    const handleDeletePost= async (postId)=>{
        await deletarPost(postId)
        location.reload()
    }
    return (
        <div  className='h-[100px] w-full max-w-[400px] px-4 py-2 shadow-sm flex flex-col bg-white'>
            <h1 className="flex-1">{post.postText}</h1>
            <div>
                <button
                    className='bg-red-400 text-white px-2 py-1 rounded-md mr-2'
                    onClick={() => handleDeletePost(post.id)}
                >Deletar</button>
                <button
                    onClick={()=>setShowModal(true)}
                    className='bg-orange-200 text-black px-3 py-1 rounded-md'
                > Editar</button>
            </div>
            <Modal newPostText={newPostText} setNewPostText={setNewPostText} showModal={showModal} setShowModal={setShowModal} postId={post.id}/>

        </div>
    )
}