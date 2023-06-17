import { Inter } from 'next/font/google'
import Video from './Videos/index.js'
import Sidebar from '@/Components/Sidebar.js'
import Header from '@/Components/Header.js'
import CategoryList from '@/Components/CategoryList.js'
import ParentLayout from '@/Layouts/ParentLayout.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <ParentLayout>
      <Video/>
    </ParentLayout>
    </>
  )
}
