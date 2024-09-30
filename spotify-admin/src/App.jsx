import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import AddSong from './pages/AddSong';
import AddAlbum from './pages/AddAlbum';
import ListSong from './pages/ListSong';
import ListAlbum from './pages/ListAlbum';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';

export const url = 'http://localhost:4000';

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />
      <SideBar />
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
        <Navbar />
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path={'/admin/add-song'} element={<AddSong />} />
            <Route path={'/admin/add-album'} element={<AddAlbum />} />
            <Route path={'/admin/list-song'} element={<ListSong />} />
            <Route path={'/admin/list-album'} element={<ListAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App