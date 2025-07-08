import React, { use } from 'react'
import { useUserContext } from './UserContext'
type Props = {}

export default function UserInfor({}: Props) {
    const { user, setUser } = useUserContext();    
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setUser(names[randomIndex]);
    }

    const names = ["Phat", "An", "Binh", "Cuong", "Duc"];
  return (
    <div>
        <h2>Chào {user}</h2>
        <button onClick={handleClick}>
            Đổi tên
        </button>
    </div>
  )
}