import {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

function GoToTop() {
    const routePath = useLocation();

    const toTop = () => {
        window.scrollTo(0,0)
    }

    useEffect(() => {
        toTop()
    },[routePath])

  return null
}

export default GoToTop