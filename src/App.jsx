import { useState, useEffect } from 'react'
import { lerPosts } from '../../fetchAPI'
import './App.css'
import CardBlog from './components/CardBlog'
import InputBlog from './components/InputBlog'
import Header from './components/Header'
function App() {
  const [postText, setPostText] = useState("")
  const [postList, setPostList] = useState([])





  async function listarPosts() {
    
    let resposta = await lerPosts()
    setPostList(resposta)
  }


  useEffect(() => {
    listarPosts()
  }, [])
  return (
    <div className='flex flex-col gap-4  w-screen  min-h-screen items-center bg-slate-50'>
      {/* ----------Cabeçalho da página principal ---------------------- */}
      <Header />
      {/* ------Campo para digitação de novo post ---------------------- */}
      <InputBlog postText={postText} setPostText={setPostText} listarPosts={() => listarPosts} />

      {/* ------Renderização dos cards ------------------------ */}
      {/* -----------Se possuir lista de post faz o map----------------- */}
      <main className='w-full flex flex-col gap-4 items-center'>
        {postList.length > 0 ? postList.map((post) => (
          <CardBlog key={post.id} post={post} />
        ))
          :
          // Se não possuir , exibe mensagem que não possui lista e oferece opção de atualizar
          <div className='flex flex-col p-4 gap-4 items-center'>
            <h1>Nenhum post publicado ainda  </h1>
            <button className='bg-orange-700 text-slate-100 rounded-lg py-2 px-2'
              onClick={() => location.reload()}>
              Atualizar o feed
            </button>
          </div>

        }
      </main>
    </div>
  )
}

export default App
